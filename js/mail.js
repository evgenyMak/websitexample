const form = document.querySelector("#form");
const scriptUrl =
  "https://script.google.com/macros/s/AKfycbxjk_y12et_RaASCWDdGuSYmcATC4ih5sB9w6WGk8qGjaH27ALfUFoqjgyae0SEVeYARw/exec";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(scriptUrl, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      // window.location.href = "/index.html?sent=1";
      document.querySelector(".prev__container").classList.add("visib");
      [...document.querySelector(".form").querySelectorAll("input")].forEach(
        (e) => {
          e.disabled = true;
        },
      );
      document.querySelector(".prev__link").classList.add("hidden");
      document.querySelector(".form__button").classList.add("hidden");

      document.querySelector(".form").scrollTo({
        top: 0,
        behavior: "smooth",
      });
    })
    .catch(() => {
      alertText(
        "Технические проблемы. Пожалуйства свяжитесь с нами сами. Способы связи в разделе 'Контакты' на основной странице",
      );
    });
});
