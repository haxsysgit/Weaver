# Interactive Explainer Template

Pattern for teaching dense abstract concepts through self-contained HTML pages with Canvas visualizations.

## When to use

- Math concepts: derivatives, gradients, probability distributions, matrix operations
- Algorithm animations: gradient descent, backpropagation, attention, token sampling
- Architecture walkthroughs: transformer forward pass, agent loop, RAG pipeline
- Any concept where "seeing it move" is worth 1000 words

## Structure

Single `.html` file. No frameworks. No build step. Inline CSS + vanilla JS Canvas API.

### 1. Dark theme (match terminal vibe)
```css
:root { --bg: #0d1117; --surface: #161b22; --border: #30363d;
        --text: #c9d1d9; --muted: #8b949e; --accent: #58a6ff;
        --green: #3fb950; --red: #f85149; --orange: #d2991d; }
```

### 2. Section order
1. **Why this matters** (problem statement, 2-3 sentences)
2. **ELI5 analogy** in a styled callout (`.analogy` class, left border, tinted background)
3. **Core concept** with interactive Canvas
4. **Connection to user's actual work** (LLM APIs, fine-tuning, agent loops — concrete)
5. **Cheat sheet table** at the end
6. **Deeper dive** marked optional, collapsed or at bottom

### 3. Interactive Canvas pattern
- One `<canvas>` per concept, 700x400px
- Paired with `<input type="range">` sliders or `<button>` controls
- All JS inline in a `<script>` tag at bottom
- Math-to-pixel coordinate conversion function: `mathToPixel(x, y) → [px, py]`
- Update function redraws entire canvas on input change (clearRect + redraw)

### 4. Styling classes
- `.hero` — key insight callout (dark surface background)
- `.box` — bordered content block with `.box-title`
- `.analogy` — orange left-border, ELI5 explanation
- `.key` — green left-border, takeaway
- `.big-idea` — gradient background, centered, for the ONE rule
- `.columns` — CSS grid 2-column layout for comparisons

### 5. JavaScript patterns
```javascript
const canvas = document.getElementById('id');
const ctx = canvas.getContext('2d');
const W = canvas.width, H = canvas.height;
const midX = W/2, midY = H/2;
const scale = 20; // pixels per math unit

function mathToPixel(x, y) {
  return [midX + x * scale, midY - y * scale];
}

function draw() {
  ctx.clearRect(0, 0, W, H);
  // grid, axes, function curve, points, labels...
}
```

### 6. Delivery
- Save to user's working directory (e.g., `~/AiEngineering/concept-name.html`)
- Tell user: `xdg-open ~/AiEngineering/concept-name.html` or double-click
- File is self-contained — works offline, no server needed
