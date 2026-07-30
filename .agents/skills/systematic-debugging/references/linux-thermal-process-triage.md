# Linux thermal and hot-process triage

Use this when the user asks why the laptop/server is hot, loud, slow, or battery-draining.

## Goal

Find the real heat source before killing things. Heat usually tracks sustained CPU/GPU work, but RAM pressure, file indexing, browser media tabs, and broken GPU drivers can hide the real culprit.

## Fast investigation sequence

1. Capture current time and temperatures:

```bash
date
sensors 2>/dev/null || true
for z in /sys/class/thermal/thermal_zone*; do
  [ -r "$z/temp" ] || continue
  type=$(cat "$z/type" 2>/dev/null)
  temp=$(cat "$z/temp" 2>/dev/null)
  printf '%s: %s = %.1f°C\n' "$(basename "$z")" "$type" "$(awk "BEGIN{print $temp/1000}")"
done
```

2. Rank processes by CPU and memory:

```bash
ps -eo pid,ppid,comm,%cpu,%mem,etime,args --sort=-%cpu | head -25
ps -eo pid,ppid,comm,%cpu,%mem,etime,args --sort=-%mem | head -15
```

3. Check system pressure and GPU visibility:

```bash
uptime
nproc
grep -m1 'model name' /proc/cpuinfo
nvidia-smi 2>&1 || true
cat /proc/pressure/cpu /proc/pressure/io /proc/pressure/memory 2>/dev/null || true
```

4. For the top process, inspect parent chain and exact command:

```bash
pid=<PID>
pstree -aps "$pid" 2>/dev/null || true
ps -p "$pid" -o pid,ppid,user,stat,pri,ni,psr,%cpu,%mem,etime,lstart,args
ps -L -p "$pid" -o pid,tid,psr,stat,%cpu,comm --sort=-%cpu | head -20
```

5. If killing a looping parent/child job, kill the parent and child pattern, then verify. Avoid matching the current shell by using bracketed regexes:

```bash
pkill -TERM -f '[f]fmpeg.*libsvtav1' || true
pkill -TERM -f '[c]ompress_animepahe_av1\.sh' || true
sleep 2
pgrep -af '[f]fmpeg.*libsvtav1|[c]ompress_animepahe_av1\.sh' || echo 'gone'
# If it respawns, force kill both parent and child patterns:
pkill -KILL -f '[f]fmpeg.*libsvtav1' || true
pkill -KILL -f '[c]ompress_animepahe_av1\.sh' || true
```

6. Verify cooling with a second temperature/process sample after a few seconds:

```bash
sleep 3
uptime
ps -eo pid,ppid,comm,%cpu,%mem,etime,args --sort=-%cpu | head -20
for z in /sys/class/thermal/thermal_zone*; do
  [ -r "$z/temp" ] || continue
  type=$(cat "$z/type" 2>/dev/null)
  temp=$(cat "$z/temp" 2>/dev/null)
  printf '%s: %s = %.1f°C\n' "$(basename "$z")" "$type" "$(awk "BEGIN{print $temp/1000}")"
done | sort -t= -k2 -nr | head -15
```

## Firefox-specific follow-up

Firefox process names rarely reveal URLs. Use a three-layer approach: process ranking, live profile mapping, then session-tab clues.

1. Rank Firefox processes by CPU/RAM:

```bash
ps -eo pid,ppid,comm,%cpu,%mem,rss,etime,args --sort=-%cpu \
  | awk 'NR==1 || /firefox|WebExtensions|Isolated|Privileged/ {print}' \
  | head -35
```

2. For a more accurate short CPU sample, compare `/proc/<pid>/stat` ticks over 2-5 seconds and read `VmRSS` from `/proc/<pid>/status`. Firefox content process command lines often end in a numeric `tab` id; treat it as a clue, not a visible browser tab index.

3. Map live processes to active Firefox profiles before attributing saved tabs to current resource use. A profile can have `.parentlock` or stale session files without being the current hog. Inspect live file descriptors for paths into each profile:

```bash
pgrep -ax firefox
for profile in \
  "$HOME/snap/firefox/common/.mozilla/firefox"/* \
  "$HOME/Desktop/Firefox productivity profile"; do
  [ -d "$profile" ] || continue
  echo "PROFILE: $profile"
  for pid in $(pgrep -f 'firefox|contentproc' | sort -u); do
    [ -d "/proc/$pid/fd" ] || continue
    if ls -l "/proc/$pid/fd" 2>/dev/null | grep -Fq "$profile"; then
      echo "  live PID: $pid $(cat /proc/$pid/comm 2>/dev/null)"
    fi
  done
done
```

`fuser <profile>/.parentlock` or `lsof -p <firefox-main-pid>` can corroborate the profile, but `/proc/<pid>/fd` is usually enough and avoids guessing.

4. To map open tabs, inspect session files under Snap Firefox profiles:

- `~/snap/firefox/common/.mozilla/firefox/<profile>/sessionstore-backups/recovery.jsonlz4`
- `~/snap/firefox/common/.mozilla/firefox/<profile>/sessionstore.jsonlz4`
- external profile paths from `profiles.ini`, e.g. `Path=/home/hax/Desktop/Firefox productivity profile`

If no `mozlz4` tool exists, create a throwaway venv and install `lz4`; do not install into the externally-managed system Python:

```bash
python3 -m venv /tmp/jade-lz4-venv
/tmp/jade-lz4-venv/bin/pip install lz4
```

Minimal decoder:

```python
import json, pathlib, lz4.block
fp = pathlib.Path('/path/to/recovery.jsonlz4')
raw = fp.read_bytes()
data = lz4.block.decompress(raw[8:]) if raw[:8] == b'mozLz40\0' else raw
session = json.loads(data)
```

5. Privacy guard: do not dump all decoded titles/URLs blindly. First classify domains/categories and only print explicit tab titles when they are non-sensitive and needed for action. For sensitive/private content, report the profile path, tab count, process IDs, CPU/RAM, and a category summary such as “many video/adult/media tabs,” not exact titles.

## Common culprits and interpretation

- `ffmpeg` with `libsvtav1`: expected to peg many cores and heat the CPU. Low `nice` priority still uses all spare CPU.
- `tracker-extract-3` / `tracker-miner-fs-3`: GNOME indexer can spike after large file changes. Usually temporary; pause/kill only if it persists.
- `WebExtensions`: browser extension/background load, not a normal webpage.
- `nvidia-smi` driver/library mismatch: GPU stats unavailable until driver state is fixed, but do not let that distract from clear CPU evidence.

## Reporting style

Be direct and operational:

- Lead with the culprit and whether it was killed or left running.
- Include proof: before/after process match, CPU percent, temperature drop.
- Separate main cause from secondary contributors.
- Give exact safe commands only when the user may want to repeat the action.
