const menuBtn = document.querySelector('.header__menu-btn');
const menuBtnIcon = document.querySelector('.menu-btn-icon');
const headerNav = document.querySelector('.header__nav');

function updateMenuIcon() {
  if (menuBtnIcon.getAttribute('src') === 'images/icon-hamburger.svg') {
    menuBtnIcon.src = 'images/icon-close.svg';
  } else {
    menuBtnIcon.src = 'images/icon-hamburger.svg';
  }
}

function showMobileNav() {
  headerNav.classList.toggle('header__nav--active');
  headerNav.classList.toggle('animate__animated');
  headerNav.classList.toggle('animate__fadeInDown');
}

function toggleMobileNav() {
  updateMenuIcon();
  showMobileNav();
}

menuBtn.addEventListener('click', toggleMobileNav);