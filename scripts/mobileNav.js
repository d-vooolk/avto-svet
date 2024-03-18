const burger = document.getElementById("burger");
const close = document.getElementById("closeBurger");
const mobileMenu = document.getElementById("mobileNav");

burger.onclick = () => {
    burger.style.display = "none";
    close.style.display = "flex";
    mobileMenu.style.display = "flex";
}

close.onclick = () => {
    close.style.display = "none";
    burger.style.display = "flex";
    mobileMenu.style.display = "none";
}