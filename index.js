import alertText from "./js/alert.js";
import { copyNumberToClipboard } from "./js/clipboard.js";

document.querySelectorAll(".copy").forEach((item) =>
  item.addEventListener("click", (e) => {
    copyNumberToClipboard(e.currentTarget);
  }),
);

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.get("sent") === "1") {
    alertText(
      "Ваша заявка успешно отправлена! В скором времени я свяжусь с вами",
      { isImportant: true },
    );

    window.history.replaceState({}, document.title, window.location.pathname);
  }
});
