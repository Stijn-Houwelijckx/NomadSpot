//===== Begin Mobile Navigation =====//

const primaryNav = document.querySelector(".primary-navigation");
const menuBtn = document.querySelector(".menu-btn");
// let menuOpen = false;
menuBtn.addEventListener("click", function (e) {
  const visibility = primaryNav.getAttribute("data-visible");

  // console.log(visibility);

  if (visibility === "false") {
    menuBtn.classList.add("open");
    primaryNav.setAttribute("data-visible", "true");
    // menuOpen = true;
  } else if (visibility === "true") {
    menuBtn.classList.remove("open");
    primaryNav.setAttribute("data-visible", "false");
    // menuOpen = false;
  }
});

const navlink = document.querySelectorAll(".nav-link");

for (let i = 0; i < navlink.length; i++) {
  navlink[i].addEventListener("click", function (e) {
    // console.log(e);
    menuBtn.classList.remove("open");
    primaryNav.setAttribute("data-visible", "false");
  });
}

//===== End Mobile Navigation =====//

//===== Begin Contact Form Validation =====//

const form = document.getElementById("form");
const firstname = document.getElementById("form-firstname");
const lastname = document.getElementById("form-lastname");
const email = document.getElementById("form-email");
const message = document.getElementById("form-message");
const errorMessageBox = document.getElementById("form-errorMessage");

form.addEventListener("submit", (e) => {
  let errorMessage = [];

  // Regex
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var nameformat = /^[a-zA-Z ]+$/;

  // Default border styles
  firstname.style.borderColor = "black";
  lastname.style.borderColor = "black";
  email.style.borderColor = "black";
  message.style.borderColor = "black";

  // Check form
  if (firstname.value.match(nameformat) == null) {
    errorMessage = "Name is required";

    firstname.style.border = "solid 3px red";
  } else if (lastname.value.match(nameformat) == null) {
    errorMessage = "Name is required";

    lastname.style.border = "solid 3px red";
  } else if (email.value.match(mailformat) == null) {
    errorMessage = "Fill in a valid email";

    email.style.border = "solid 3px red";
  } else if (message.value == "" || message.value == null) {
    errorMessage = "Message field cannot be empty";

    message.style.border = "solid 3px red";
  }

  // Error message
  if (errorMessage.length > 0) {
    e.preventDefault();

    errorMessageBox.style.color = "red";

    errorMessageBox.innerText = errorMessage;
  } else {
    errorMessage = "Email send";

    errorMessageBox.style.color = "green";

    errorMessageBox.innerText = errorMessage;

    // Reset form after 2 sec
    setTimeout(function () {
      form.reset();
    }, 2000);
  }
});

//===== End Contact Form Validation =====//
