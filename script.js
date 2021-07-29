let form = document.querySelector("#form");
let email = document.querySelector("#email");
let textError = document.querySelector("#text-error");
let error = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  if (email.validity.typeMismatch) {
    event.preventDefault();
    error.style.opacity = 1;
    textError.style.opacity = 1;
  } else {
    error.style.opacity = 0;
    textError.style.opacity = 0;
  }
});