export function mobileMenu() {
  const openMenu = document.getElementById('open-menu');
  const closeMenu = document.getElementById('close-menu');

  openMenu.addEventListener('click', (e) => {
    closeMenu.classList.toggle('is-closed');
  });

  closeMenu.addEventListener('click', (e) => {
    closeMenu.classList.toggle('is-closed');
  });

};