const header = document.getElementsByTagName("header")[0];

window.addEventListener("scroll", () => {
  window.scrollY > 1
    ? header.classList.add("header-scrolled")
    : header.classList.remove("header-scrolled");
});