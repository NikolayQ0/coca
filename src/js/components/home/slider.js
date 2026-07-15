import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const initArrowNavigation = (sliderInstance, prevButton, nextButton) => {
  const updateArrowState = () => {
    const isAtStart = sliderInstance.isBeginning;
    const isAtEnd = sliderInstance.isEnd;

    prevButton?.classList.toggle('is-disabled', isAtStart);
    nextButton?.classList.toggle('is-disabled', isAtEnd);
  };

  prevButton?.addEventListener('click', () => {
    sliderInstance.slidePrev();
    updateArrowState();
  });

  nextButton?.addEventListener('click', () => {
    sliderInstance.slideNext();
    updateArrowState();
  });

  sliderInstance.on('slideChange', updateArrowState);
  updateArrowState();
};

export const useInsightSlider = () => {
  const slider = new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });

  const prevBtn = document.querySelector('.insight__slider-btns');
  const nextBtn = document.querySelector('.insight__slider-btns');

  initArrowNavigation(slider, prevBtn, nextBtn);
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 22,
    loop: true,
    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
  });
};