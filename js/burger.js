const burger = document.querySelector('.humburger-menu');
const menuElem = document.querySelector('.menu');

// Открываем по клику на бургер меню и даем каждому элементу свой класс.
const togleMenu = () => {
  menuElem.classList.toggle('menu-active');
  burger.classList.toggle('humburger-menu-active');
};

burger.addEventListener('click', () => togleMenu());

// humburger-menu
// console.log('click')