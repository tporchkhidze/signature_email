async function copySignature() {
  const signatureElement = document.getElementById("emailSignature");
  const button = document.querySelector(".copyButton");

  const range = document.createRange();
  range.selectNode(signatureElement);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  button.textContent = "Copied";
  button.classList.add("copied");

  setTimeout(() => {
    button.textContent = "Copy signature";
    button.classList.remove("copied");
  }, 2000);
}
