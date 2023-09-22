export function mobileMenu() {
  const openMenu = document.getElementById("open-menu");
  const closeMenu = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile__menu");

  openMenu.addEventListener("click", (e) => {
    mobileMenu.classList.toggle("is-closed");
  });

  closeMenu.addEventListener("click", (e) => {
    mobileMenu.classList.toggle("is-closed");
  });
}
