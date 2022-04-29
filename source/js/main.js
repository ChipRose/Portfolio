import './../sass/style.scss';
import 'swiper/css/bundle';

import './burger.js';
import './slider-settings.js';

import { getSlider } from './api.js';
import { renderSlider } from './render-slide.js';

getSlider.then((slider) => {
  renderSlider(slider);
});

const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const req = require.context('./../img/icons/', true, /\.svg$/);
requireAll(req);
