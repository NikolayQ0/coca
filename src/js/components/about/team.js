import Swiper from 'swiper';
import 'swiper/css';

export const useTeamSlider = () => {
  new Swiper('.team__slider', {
    slidesPerView: 1.5,
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        slidesPerView: 3,
      },
      577:{
        slidesPerView: 2.2,
      },
    },
  });
};