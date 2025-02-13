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
function displayFullName() {
  const fullName = document.getElementById("fullName").value;
  document.getElementById("detailsfullName").textContent = fullName;
}
function displayRole() {
  const role = document.getElementById("role").value;
  document.getElementById("detailsRole").textContent = role;
}

function displayEmail() {
  const email = document.getElementById("email").value;
  document.getElementById("detailsEmail").textContent = email;
  document.getElementById("detailsEmail").href = `mailto:${email}`;
}
function displayPhone() {
  const phone = document.getElementById("phone").value;
  const phoneIndex = document.getElementById("index").value;
  document.getElementById(
    "detailsPhone"
  ).textContent = `${phoneIndex} ${phone}`;
  document.getElementById("detailsPhone").href = `tel:${phoneIndex} ${phone}`;
}
