var hamburgerIcon = document.querySelector(".hamburger-icon");
var navbarPopUp = document.querySelector(".mobile-navbar");
var headerTitle = document.querySelector(".header-title")

hamburgerIcon.addEventListener("click", function() {
    navbarPopUp.classList.toggle("show");
    headerTitle.classList.toggle("hide");

})