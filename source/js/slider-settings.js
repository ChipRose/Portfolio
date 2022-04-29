import Swiper, { Navigation, Pagination, Controller } from 'swiper';

Swiper.use([Navigation, Pagination, Controller]);

const mainSliderSelector = '.slider__image-block';
const navSliderSelector = '.slider__description-block';

const mainSliderOptions = {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  spaceBetween: 10,
};

const mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

const navSliderOptions = {
  loop: true,
  spaceBetween: 10,
};

const navSlider = new Swiper(navSliderSelector, navSliderOptions);

mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;
