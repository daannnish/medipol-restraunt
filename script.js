const navbarLinks = document.querySelector(".navbar .links");
const toggleMenuBtn = document.querySelector(".navbar .toggle-menu");
const toggleMenuIcon = document.querySelector(".navbar .toggle-menu i");
const navbarLinkItems = document.querySelectorAll(".navbar .links li a");
const navbar = document.querySelector(".navbar");

const toggleLinks = () => {
  navbarLinks.classList.toggle("show");
  toggleMenuIcon.classList.toggle("fa-xmark");
};
toggleMenuBtn.addEventListener("click", toggleLinks);

// NAVBAR LINK ITEMS EVENT CLICK
navbarLinkItems.forEach((link) => {
  link.addEventListener("click", toggleLinks);
});


window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("active-bg");
    return;
  }
  navbar.classList.remove("active-bg");
});
