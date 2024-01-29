const navToggle = document.querySelector('.main-nav-toggle');
const nav = document.querySelector('.main-nav');

navToggle.classList.remove('main-nav-toggle--nojs');
nav.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (nav.classList.contains('main-nav--closed')) {
    nav.classList.remove('main-nav--closed');
    nav.classList.add('main-nav--opened');

    navToggle.classList.remove('main-nav-toggle--closed');
    navToggle.classList.add('main-nav-toggle--opened');
  } else {
    nav.classList.remove('main-nav--opened');
    nav.classList.add('main-nav--closed');

    navToggle.classList.remove('main-nav-toggle--opened');
    navToggle.classList.add('main-nav-toggle--closed');
  }
});
