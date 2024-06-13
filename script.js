document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  const navBar = document.querySelector('.nav-bar');
  const navBarContainer = document.querySelector('show-item-mobile');

  menuButton.addEventListener('click', () => {
    navBar.classList.toggle('active');
    navBarContainer.classList.toggle('active');
    header.classList.toggle('expanded');
  });
});
