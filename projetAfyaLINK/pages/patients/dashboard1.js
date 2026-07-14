const burger = document.querySelector("#burger");
const sidebar = document.querySelector("#sidebar");
const closeMenu = document.querySelector("#closeMenu");
const overlay = document.querySelector("#overlay");
const logout = document.querySelector("#logout");



burger.addEventListener("click", function () {

    sidebar.classList.remove("-translate-x-full");

    overlay.classList.remove("hidden");

});



closeMenu.addEventListener("click", function () {

    sidebar.classList.add("-translate-x-full");

    overlay.classList.add("hidden");

});



overlay.addEventListener("click", function () {

    sidebar.classList.add("-translate-x-full");

    overlay.classList.add("hidden");

});



logout.addEventListener("click", function () {

    let confirmation = confirm("Voulez-vous vraiment vous déconnecter ?");

    if (confirmation) {

        window.location.href = "../login.html";

    }

});