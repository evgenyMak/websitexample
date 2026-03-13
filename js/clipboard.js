function copyToClipboard(text) {
  navigator.clipboard.writeText(text);

  const plate = document.querySelector('.copy__box');
  plate.classList.add('show');

  setTimeout(() => {
    plate.classList.remove('show');
  }, 2000);
}

function copyNumberToClipboard(element) {
  const result = element.innerText.split(" ").join("").slice(1);
  copyToClipboard(result);
}

