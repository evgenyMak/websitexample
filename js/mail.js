const form = document.querySelector("#form");
const scriptUrl =
  "https://script.google.com/macros/s/AKfycbxjk_y12et_RaASCWDdGuSYmcATC4ih5sB9w6WGk8qGjaH27ALfUFoqjgyae0SEVeYARw/exec";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(scriptUrl, {
    method: "POST",
    body: formData,
  })
    .catch(() =>
      alertText(
        "Технические проблемы. Пожалуйства свяжитесь с нами сами. Способы связи в разделе 'Контакты' на основной странице",
      ),
    )
    .then(() => {
      alertText(
        "Ваша заявка успешно отправлена! В скором времени я свяжусь с вами",
        { isImportant: true },
      );
    });
});
