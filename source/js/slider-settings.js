import Swiper, { Navigation, pagination } from 'swiper';

const sliderImage = new Swiper(".slider-image", {
  slidesPerView:1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const sliderDesciption = new Swiper(".slider-description", {
  slidesPerView:1,
  nested: true,
});

sliderImage.controller.control = sliderDesciption;
sliderDesciption.controller.control = sliderImage;

