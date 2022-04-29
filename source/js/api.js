import slider from './../json/portfolio.json';

const TIMEOUT_DELAY = 300;

const getSlider = new Promise((resolve) => {
  setTimeout(() => {
    resolve(slider);
  })
}, TIMEOUT_DELAY);

export { getSlider };
