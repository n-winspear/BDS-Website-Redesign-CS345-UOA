$(document).ready(function (e) {
    $("#home").children("div").css({
        "display": "block"
    })
})

console.log($(".navbar-link").first())

$(".navbar-link").click(function (e) {
    $(this).children("div").css({
        "display": "block"
    });
    $(this).siblings().children("div").css({
        "display": "none"
    });

})

let modal = document.getElementById("registration-modal");
let registrationButton = document.getElementById("trigger-modal");
let modalClose = document.getElementsByClassName("modal-close")[0];
let registerButton = document.getElementById("submit-register");

registrationButton.onclick = function () {
    modal.style.display = "block";
}

modalClose.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

registerButton.onclick = function () {
    modal.style.display = "none";
}