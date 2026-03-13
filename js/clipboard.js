import alertText from "../js/alert.js";

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  alertText("Скопировано");
}

export function copyNumberToClipboard(element) {
  const result = element.innerText.split(" ").join("").slice(1);
  copyToClipboard(result);
}
