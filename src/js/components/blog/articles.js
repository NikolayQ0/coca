import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    centeredSlides: true,
    381: {
        slidesPerView: 1.2,
    },
    577: {
        slidesPerView: 2.2,
    },
    breakpoints: {
      993: {
        slidesPerView: 3,
      },
    },
    navigation: {
      prevEl: '.articles__btn--prev',
      nextEl: '.articles__btn--next',
    },
  });
};
