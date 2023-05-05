let login = document.getElementById("loginView");
let signup = document.getElementById("signUpView");

let btnLogin = document.getElementById("btnLogin");
let btnSignup = document.getElementById("btnSignUp");

btnLogin.onclick = function () {
    login.style.display = "flex";
}

btnSignup.onclick = function () {
    signup.style.display = "flex";
}

login.blur(function () {
    setTimeout(() => {
        login.style.display = "none";
    }, 130)
});

signup.blur(function () {
    setTimeout(() => {
        signup.style.display = "none";
    }, 130)
});