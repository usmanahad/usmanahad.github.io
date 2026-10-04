# Embedded paper viewer

The viewer uses PDF.js 5.6.205, vendored from the Codex bundled pdfjs-dist package. The library and its assets are served from this repository; no CDN is required to read a paper. See vendor/LICENSE for the Apache 2.0 license.

viewer.html?file=/files/papers/visconf.pdf&title=VisConf opens a same-origin paper with continuous scrolling, selectable text, page navigation, and zoom. Only PDF paths under files/papers are accepted.

Project content, contributions, and image paths are in _data/research.yml. Replace the screenshots in images/research with higher-quality images using the same filenames, or update those paths.
