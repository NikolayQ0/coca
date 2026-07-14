import Swiper from 'swiper';
import 'swiper/css';

export const useAboutSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
        slidesPerView: 2.5,
        spaceBetween: 32,
      },
      577:{
        slidesPerView: 1.5,
      },
    },
  });
};