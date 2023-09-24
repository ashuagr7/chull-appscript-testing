
const signupBtn = document.getElementById("signup-btn");
const signinBtn = document.getElementById("signin-btn");
const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");

signupBtn.addEventListener("click", function () {
  signupForm.classList.add("active-form");
  signinForm.classList.remove("active-form");
  signupBtn.classList.add("active");
  signinBtn.classList.remove("active");
});

signinBtn.addEventListener("click", function () {
  signinForm.classList.add("active-form");
  signupForm.classList.remove("active-form");
  signinBtn.classList.add("active");
  signupBtn.classList.remove("active");
});