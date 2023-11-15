//Burger
const HEADER_HEIGHT = 70;

const navigation = document.querySelector('.navigation');
const burger = document.querySelector('.navigation__toggle');
const navigationItems = document.querySelectorAll('.navigation__item');
const page = document.querySelector('.page');
const body = document.querySelector('.body');
const main = document.querySelector('.main');

navigation.classList.remove('navigation--nojs');
page.classList.remove('page--nojs');

const openBurger = () => {
  navigation.classList.remove('navigation--closed');
  navigation.classList.add('navigation--opened');
}

const closeBurger = () => {
  navigation.classList.add('navigation--closed');
  navigation.classList.remove('navigation--opened');
}

const closeBurgerAfterClick = (item) => {
  item.addEventListener('click', () => {
    closeBurger();
    body.classList.remove('lock');
  })
}

burger.addEventListener('click', function () {
  if (navigation.classList.contains('navigation--closed')) {
    openBurger();
    body.classList.add('lock');
  } else {
    closeBurger();
    body.classList.remove('lock');
  }
})

main.addEventListener('click', () => {
  if (navigation.classList.contains('navigation--opened')) {
    closeBurger();
    body.classList.remove('lock');
  }
})

navigationItems.forEach((item) => {
  closeBurgerAfterClick(item);
})

const navigationList = document.querySelector('.navigation__list');
if (navigationList) {
  navigation.addEventListener('click', (evt) => {
    evt.preventDefault();
    const elementHref = evt.target.href;
    const elementId = elementHref.substring(elementHref.indexOf('#'));
    const scrollElement = document.querySelector(elementId).offsetTop;
    window.scrollTo({ top: scrollElement - HEADER_HEIGHT, behavior: 'smooth' });
  })
}
