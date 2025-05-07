const mobileMenuBtn = document.querySelector(".mobile-menu");
const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
const closeMenuBtn = document.querySelector(".close-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuOverlay.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenuOverlay.classList.remove("active");
});

mobileMenuOverlay.addEventListener("click", (e) => {
  if (e.target === mobileMenuOverlay) {
    mobileMenuOverlay.classList.remove("active");
  }
});
