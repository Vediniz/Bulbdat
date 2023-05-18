let login = document.getElementById("loginView");
let signup = document.getElementById("signupView");

let btnLogin = document.getElementById("btnLogin");
let btnSignup = document.getElementById("btnSignup");

let overlay = document.getElementById('overlay');


btnLogin.onclick = function () {
    login.style.display = "flex";
    overlay.style.display = "block";
}

btnSignup.onclick = function () {
    signup.style.display = "flex";
    login.style.display = "none";
    overlay.style.display = 'block';
}

function closeWindow() {
    login.style.display = "none";
    signup.style.display = "none";
    overlay.style.display = "none";
}