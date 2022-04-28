import './../sass/style.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';

import './burger.js';
import './slider-settings.js';

import { getSlider } from './api.js';
import { renderSlider } from './render-slide.js';

getSlider.then((slider) => {
  renderSlider(slider);
});

const requireAllIcons = (r) => {
  r.keys().forEach(r);
};

requireAllIcons(require.context('./../img/icons/', true, /\.svg$/));