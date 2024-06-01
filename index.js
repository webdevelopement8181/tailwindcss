document.addEventListener("DOMContentLoaded",() => {
    const menuToggle =document.getElementById("menu-toggle");
    const navbarSticky=document.getElementById("navbar-sticky");
    menuToggle.addEventListener("click",() => {
    navbarSticky.classList.toggle("hidden");
    });
});