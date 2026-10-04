import * as pdfjsLib from "./vendor/pdf.mjs";
import { EventBus, PDFLinkService, PDFViewer } from "./vendor/pdf_viewer.mjs";

const container = document.getElementById("viewerContainer");
const status = document.getElementById("viewer-status");
const pageNumber = document.getElementById("page-number");
const pageCount = document.getElementById("page-count");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const zoom = document.getElementById("zoom");
const openPdf = document.getElementById("open-pdf");

try {
  const params = new URLSearchParams(window.location.search);
  const file = new URL(params.get("file") || "", window.location.origin);
  if (file.origin !== window.location.origin || !file.pathname.includes("/files/papers/") || !file.pathname.endsWith(".pdf")) {
    throw new Error("No research paper was specified.");
  }
  document.title = `${params.get("title") || "Research"} — full paper`;
  openPdf.href = file.href;
  openPdf.hidden = false;
  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL("./vendor/pdf.worker.mjs", import.meta.url).href;

  const eventBus = new EventBus();
  const linkService = new PDFLinkService({ eventBus, externalLinkTarget: 2, externalLinkRel: "noopener noreferrer" });
  const viewer = new PDFViewer({
    container,
    viewer: document.getElementById("viewer"),
    eventBus,
    linkService,
    imageResourcesPath: new URL("./vendor/images/", import.meta.url).href,
  });
  linkService.setViewer(viewer);

  const updateControls = () => {
    pageNumber.value = viewer.currentPageNumber;
    previous.disabled = viewer.currentPageNumber <= 1;
    next.disabled = viewer.currentPageNumber >= viewer.pagesCount;
  };
  eventBus.on("pagesinit", () => {
    viewer.currentScaleValue = "page-width";
    pageNumber.max = viewer.pagesCount;
    pageCount.textContent = `/ ${viewer.pagesCount}`;
    pageNumber.disabled = false;
    zoom.disabled = false;
    updateControls();
  });
  eventBus.on("pagechanging", updateControls);
  eventBus.on("pagerendered", () => { status.hidden = true; });
  previous.addEventListener("click", () => { viewer.currentPageNumber -= 1; });
  next.addEventListener("click", () => { viewer.currentPageNumber += 1; });
  pageNumber.addEventListener("change", () => {
    const requested = Number(pageNumber.value);
    if (Number.isInteger(requested) && requested >= 1 && requested <= viewer.pagesCount) {
      viewer.currentPageNumber = requested;
    }
    updateControls();
  });
  zoom.addEventListener("change", () => { viewer.currentScaleValue = zoom.value; });
  window.addEventListener("resize", () => {
    if (zoom.value === "page-width") viewer.currentScaleValue = "page-width";
  });

  const documentTask = pdfjsLib.getDocument({
    url: file.href,
    standardFontDataUrl: new URL("./vendor/standard_fonts/", import.meta.url).href,
    wasmUrl: new URL("./vendor/wasm/", import.meta.url).href,
    isEvalSupported: false,
  });
  const paperDocument = await documentTask.promise;
  viewer.setDocument(paperDocument);
  linkService.setDocument(paperDocument);
} catch (error) {
  status.hidden = false;
  status.textContent = "The embedded viewer could not load. Please use Open PDF on this page or the project page to read the paper.";
  console.error("Paper viewer:", error);
}
