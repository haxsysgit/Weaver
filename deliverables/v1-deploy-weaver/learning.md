# Learning: Plan v1 (Deploy Weaver)

Gate status: **Drafted 2026-08-14. Awaiting owner admission.**

Owner-confirmed decisions (quoted from the admission discussion):

1. "v1 is a public website but only he and his friends use it; BYOK stays"
   (2026-08-14). Friends are technical and can get a DeepSeek key.
2. Host: AWS t3.small on the new-account free plan ($100 credits + 6-month
   free plan, account created 2026-08-14). Reassess at month 6.
3. "going with funnel" (2026-08-14): Tailscale Funnel for HTTPS, no
   domain purchase. "currently i'm empty" — budget is close to zero.
4. Identity: no accounts. "those options look very stressful and
   complicated, i'm a solo dev" — device id in localStorage is the
   chosen scope.
5. "do you really need to get a .com from cloudflare? i cant host from my
   system?" — answered: home hosting rejected (CGNAT/uptime/learning
   value), funnel chosen over domain purchase.
6. Compose-first deploys; CI/CD for seamless updates is a core v1
   requirement (2026-08-14).
7. Quantized bge-large int8 onnx is the v1 host model; the deep-dive
   lesson is part of the v1 build (owner decision 2026-08-10,
   TODO_future).
8. Private state never leaves the machine except the prod bundle
   (~165MB: corpus + retrieval + knowledge). No novel content, receipts,
   or reasoning in git, image, CI, or public surface (standing rules).
