const form = document.querySelector("#form");
const scriptUrl = "https://script.google.com";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(scriptUrl, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      const repoName = "/websitexample/";
      window.location.href =
        window.location.origin + repoName + "index.html?sent=1";
    })
    .catch(() => {
      alertText(
        "Технические проблемы. Пожалуйства свяжитесь с нами сами. Способы связи в разделе 'Контакты' на основной странице",
      );
    });
});
