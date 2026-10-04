# Embedded paper viewer

The viewer uses the **legacy/compatibility build of PDF.js 5.6.205**, vendored from the Codex bundled pdfjs-dist package. Use `legacy/build/pdf.min.mjs`, `legacy/build/pdf.worker.min.mjs`, and `legacy/web/pdf_viewer.mjs` together when updating; the modern build depends on JavaScript APIs absent from Safari 18.5 (including `Map.prototype.getOrInsertComputed`). Mozilla lists Safari 18+ under the legacy build: https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#which-browsersenvironments-are-supported

The library and its assets are served from this repository; no CDN is required to read a paper. See vendor/LICENSE for the Apache 2.0 license. Versioned URLs prevent previously cached modern modules from being reused. Imports run inside the error boundary, so Open PDF remains available if loading or rendering fails.

viewer.html?file=/Projects/VisConf/VisConf.pdf&title=VisConf opens a same-origin paper with continuous scrolling, selectable text, page navigation, and zoom. The four configured Projects paper paths are accepted. Earlier links under files/papers remain supported.

Project content, contributions, and image paths are in _data/research.yml. PDFs and original figures are in Projects, mirrored from the sibling UniversityApplications/Projects source folder. See Projects/README.md for the update workflow. Earlier screenshot assets remain available for existing direct links.
