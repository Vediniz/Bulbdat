let login = document.getElementById("loginView");
let signup = document.getElementById("signUpView");
let main = document.querySelector("main");

let btnLogin = document.getElementById("btnLogin");
let btnSignup = document.getElementById("btnSignUp");

btnLogin.onclick = function () {
    login.style.display = "flex";
}

btnSignup.onclick = function () {
    signup.style.display = "flex";
    login.style.display = "none";
}

main.addEventListener('click', function(event) {
    if (!signup.contains(event.target) || !login.contains(event.target)) {
      signup.style.display = 'none';
      login.style.display = 'none';
    }
  });