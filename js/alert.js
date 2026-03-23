export default function alertText(text, options = {}) {
  const plate = document.querySelector(".alert__box");
  const importantIcon = plate.getElementsByClassName("important__icon")[0];
  plate.getElementsByClassName("alert__box-text")[0].innerText = text;
  plate.classList.add("show");

  if (options.isImportant) {
    importantIcon.classList.add("visible");
    plate.classList.add("important");
  }

  setTimeout(
    () => {
      importantIcon.classList.remove("visible");
      plate.classList.remove("important");
      plate.classList.remove("show");
    },
    2000 + (options.isImportant ? 1000 * 5 : 0),
  );
}
