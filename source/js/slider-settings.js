import Swiper, { Navigation, Pagination, Controller } from "swiper";

Swiper.use([Navigation, Pagination, Controller]);

const mainSliderSelector = ".slider__image-block";
const navSliderSelector = ".slider__description-block";

const mainSliderOptions = {
  navigation: {
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable:true,
  },
  loop:true,
};

const mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

const navSliderOptions = {
  loop:true,
};

const navSlider = new Swiper(navSliderSelector, navSliderOptions);

mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;

