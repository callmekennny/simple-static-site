const hamMenu = document.querySelector(".box");
const mobileNav = document.querySelector(".mobile-nav");
const close = document.querySelector(".close");

hamMenu.addEventListener("click", () => {
  mobileNav.classList.add("mobile-visible");
  console.log("clicked");
});

close.addEventListener("click", () => {
  mobileNav.classList.remove("mobile-visible");
});

console.log(hamMenu, mobileNav);
