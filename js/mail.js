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
      const url = new URL(window.location.href);
      const newPath =
        url.pathname.split("/").slice(0, -2).join("/") + "/index.html";
      window.location.href = url.origin + newPath + "?sent=1";
    })
    .catch(() => {
      alertText(
        "Технические проблемы. Пожалуйста свяжитесь с нами сами. Способы связи в разделе 'Контакты' на основной странице",
      );
    });
});
