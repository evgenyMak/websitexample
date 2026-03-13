import { copyNumberToClipboard } from "./js/clipboard.js";

document.querySelectorAll(".copy").forEach((item) =>
  item.addEventListener("click", (e) => {
    copyNumberToClipboard(e.currentTarget);
  }),
);
