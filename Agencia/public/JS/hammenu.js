const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
});
