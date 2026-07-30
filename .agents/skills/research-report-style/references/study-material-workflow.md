# Study & Revision Material Production Workflow

When Arinze asks for study notes, revision guides, or exam-prep materials, follow this workflow.

## Production order

1. **Single detailed markdown file first.** One file covering all topics with full explanations, background context, legislation references, and practical details. Do not start condensed — detail is the default.

2. **Include tricky/practical questions from the start.** The user expects concrete exam-style gotchas: scenario-based questions, edge-case definitions, common traps, and specific number-based traps. Reference their own examples of questions they've failed or encountered. Build these into the body of each section, not just a separate Q&A appendix.

3. **HTML with clean light design.** Convert markdown to HTML with pandoc using a custom CSS stylesheet:
   - Light theme only — white background, dark text, no dark mode
   - Inter or system font
   - Clean table styling with striped rows and borders
   - Table of contents
   - CSS must be **embedded inline** in the HTML (not an external link) so it renders correctly standalone and in PDF conversion
   - Use the `style.css` template from previous sessions as a starting point

4. **PDF from markdown (not from HTML).** Use pandoc with xelatex (not pdflatex — it fails on Unicode characters like subscript ₂ in CO₂, or emoji). Command:
   ```
   pandoc file.md --pdf-engine=xelatex -V geometry:margin=0.8in \
     -V fontsize=10pt -V colorlinks=true -V linkcolor=blue \
     -V mainfont="DejaVu Sans" -V monofont="DejaVu Sans Mono" \
     --toc --toc-depth=2 --highlight-style=tango -o output.pdf
   ```

## Never do this

- Delete detailed content to create a shorter version without being asked
- Replace a detailed file with a condensed one — keep both if both are wanted
- Use pdflatex for documents containing Unicode (use xelatex)
- Use dark-themed CSS for study materials
- Start with a summary-first approach — study materials need context and explanation

## Previous session artifacts

- `/home/hax/citbtest/CITB_Complete_Revision_Guide.md` — 115KB reference example of the right level of detail
- `/home/hax/citbtest/style.css` — CSS template (deleted after use but reproducible)
- `/home/hax/citbtest/CITB_Complete_Revision_Guide.html` — inline-CSS HTML example
