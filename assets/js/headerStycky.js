let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 200) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
