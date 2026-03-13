export default function alertText(text) {
  const plate = document.querySelector(".alert__box");
  plate.getElementsByClassName("alert__box-text")[0].innerText = text;
  plate.classList.add("show");

  setTimeout(() => {
    plate.classList.remove("show");
  }, 2000);
}
