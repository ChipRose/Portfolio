const slideImageList = document.querySelector('.slider__image-wrapper');
const slideTextList = document.querySelector('.slider__description-wrapper');
const slideImageTemplate = document.querySelector('#slide-image').content.querySelector('.slider__image-item');
const slideTextTemplate = document.querySelector('#slide-text').content.querySelector('.slider__description-item');

const renderSlider = (slider) => {
  const slideImageFragment = document.createDocumentFragment();
  const slideTextFragment = document.createDocumentFragment();

  slider.forEach((slide) => {
    const imageItem = slideImageTemplate.cloneNode(true);
    const textItem = slideTextTemplate.cloneNode(true);
    const image = imageItem.querySelector('.slider__img');
    

    imageItem.querySelector('#image-webp-tablet').srcset = slide.previewSrcWebpTablet;
    imageItem.querySelector('#image-webp').srcset = slide.previewSrcWebp;
    imageItem.querySelector('#image-png-tablet').srcset = slide.previewSrcPngTablet;
    image.src = slide.previewSrc;
    image.srcset = slide.previewSrcset;
    image.alt = slide.previewAlt;
    slideImageFragment.appendChild(imageItem);

    textItem.querySelector('.subtitle').textContent = slide.title;
    slideTextFragment.appendChild(textItem);
  });

  slideImageList.appendChild(slideImageFragment);
  slideTextList.appendChild(slideTextFragment);
};

export { renderSlider };
