document.addEventListener("click", openMenu);

function openMenu(e) {
  const targetElement = e.target;
  if (targetElement.closest(".icon-menu")) {
    document.documentElement.classList.toggle("open-menu");
  }
}
