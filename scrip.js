var sign_up = document.getElementById("link-sign-up");
var container_sign_up = document.getElementById("container-sign-up");
var login = document.getElementById("link-login");
var container_login = document.getElementById("container-login");

var container = document.getElementById("container");

sign_up.addEventListener('click', () => {
    container.classList.add("voltear");
    container_login.classList.add("no-ver");
    container_sign_up.classList.remove("no-ver");
    container_sign_up.classList.add("ver");
});

login.addEventListener('click', () => {
    container.classList.remove("voltear");
    container_login.classList.remove("no-ver");
    container_sign_up.classList.add("no-ver");
    container_sign_up.classList.remove("ver");
})
