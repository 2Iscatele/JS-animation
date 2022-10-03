const burger = document.querySelector('.burger');
const heroBlock = document.querySelector('.hero');
const minMenu = document.querySelector('.header__nav');
const uslugMenu = document.querySelector('.nav__link--arrow');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');
const headerMenu = document.querySelector('.menu__left');
const CaseMenu = document.querySelector('.menu__right');
const partnersMenu = document.querySelector('.sub-menu');


burger.addEventListener('click', () => {

  menu.classList.add('menu--open');

});

closeMenu.addEventListener('click', () => {

  menu.classList.remove('menu--open');

})
