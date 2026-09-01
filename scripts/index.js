const toggleNavbar = document.getElementById("header-nav-toggle");
const closeNavbar = document.getElementById("header-nav-close");
const navList = document.getElementById("header-nav-list");
const navLinks = document.querySelectorAll(".header__nav-link");
const navBackdrop = document.getElementById("header-nav-backdrop");

/* ============== Functions ============ */
function openNav() {
  navList.classList.toggle("active");
  navBackdrop.classList.toggle("active");
}

function closeNav() {
  navList.classList.remove("active");
  navBackdrop.classList.remove("active");
}

/* ============== EVents ============ */
toggleNavbar.addEventListener("click", openNav);
closeNavbar.addEventListener("click", closeNav);

navLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});
