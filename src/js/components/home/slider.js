import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
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
};

export const useTestimonialsSlider = () =>{
  new Swiper('.testimonials__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 22,
    loop: true,
    navigation:{
      prevEl:'.testimonials__btn--prev',
      nextEl:'.testimonials__btn--next',
    },
  });

}