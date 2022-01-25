// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Controller } from 'swiper';

Swiper.use([Navigation, Pagination, Controller]);

const sliderImage = new Swiper(".slider-image", {
  loop: true,
  nested:true,
});

const sliderDescription = new Swiper(".slider-description", {
  loop:true,
  controller: {
    control: sliderImage,
  },
});
sliderImage.controller.control = sliderDescription;
sliderDescription.controller.control = sliderImage;
