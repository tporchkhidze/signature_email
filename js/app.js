function copySignature() {
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
  document.getElementById("detailsPhone").textContent = phone;
  document.getElementById("detailsPhone").href = `tel:${phone}`;
}
const contactArray = [
  {
    id: 1,
    name: "Georgia",
    phone: "+995322560590",
    fb: "https://www.facebook.com/cargon.inc",
    instagram: "https://www.instagram.com/cargon_georgia/",
    linkedin: "https://www.linkedin.com/company/cargon/mycompany/",
    address: "37-39 Merab Kostava St, Tbilisi 0179, Georgia",
    web: "https://cargon.com/ge_en/",
  },
  {
    id: 2,
    name: "Armenia",
    phone: "00374(10)504040",
    fb: "https://www.facebook.com/cargon.armenia",
    instagram: "https://www.instagram.com/cargon.armenia/",
    linkedin: "https://www.linkedin.com/company/cargon/mycompany/",
    address: "RA, c. Yerevan, str. Ashakunyats 15",
    web: "https://cargon.com/am_en/",
  },
  {
    id: 3,
    name: "Kazakhstan",
    phone: "+7 727 311 00 35",
    fb: "https://www.facebook.com/profile.php?id=61558754574815",
    instagram: "https://www.instagram.com/cargon_kazakhstan/",
    linkedin: "https://www.linkedin.com/company/cargon/mycompany/",
    address: "Al-Farabi Avenue 7, Almaty, Kazakhstan",
    web: "https://cargon.com/kz_en/",
  },
  {
    id: 4,
    name: "Uzbekistan",
    phone: "+998951156667",
    fb: "https://www.facebook.com/profile.php?id=61558711827131",
    instagram: "https://www.instagram.com/cargon_uzbekistan/",
    linkedin: "https://www.linkedin.com/company/cargon/mycompany/",
    address: "Tashkent, Toshkent Shahri, Uzbekistan",
    web: "https://cargon.com/uz_en/",
  },
  {
    id: 5,
    name: "Azerbaijan",
    phone: "(+994 50) 242 08 88",
    fb: "https://www.facebook.com/profile.php?id=61558545639679",
    instagram: "https://www.instagram.com/cargon_azerbaijan/",
    linkedin: "https://www.linkedin.com/company/cargon/mycompany/",
    address:
      "Baku, Azerbaijan AZ 1025 8 Noyabr avre., 15 'Azure Business Center' 14 floor, office # 88",
    web: "https://cargon.com/az_en/",
  },
];

function updateContent() {
  const branch = document.getElementById("branch").value;
  const contact = contactArray.find((item) => item.name === branch);

  const addressElement = document.getElementById("address");
  const facebookElement = document.getElementById("facebook");
  const instagramElement = document.getElementById("instagram");
  const linkedinElement = document.getElementById("linkedin");
  const websiteElement = document.getElementById("website");
  const companyPhoneElement = document.getElementById("companyPhone");

  if (contact) {
    //update address
    addressElement.textContent = contact.address;
    //update facebook
    facebookElement.href = contact.fb;
    //update instagram
    instagramElement.href = contact.instagram;
    //update linkedin
    linkedinElement.href = contact.linkedin;
    //update web
    websiteElement.href = contact.web;
    //update company phone
    companyPhoneElement.textContent = contact.phone;
    companyPhoneElement.href = `tel:${contact.phone}`;
  }
}
