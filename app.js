/* Created by Tivotal */

let signinForm = document.querySelector(".signin-form");
let signupForm = document.querySelector(".signup-form");
let indicator = document.querySelector(".indicator");

function signup() {
  signinForm.style.left = "-400px";
  signupForm.style.left = "50px";
  indicator.style.left = "110px";
}

function signin() {
  signinForm.style.left = "50px";
  signupForm.style.left = "450px";
  indicator.style.left = "0px";
}
