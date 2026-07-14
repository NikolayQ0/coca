export function useSliderSections() {
  const buttons = document.querySelectorAll('.hero__section-btn');
  const sections = document.querySelectorAll('.hero__slider-wrapper');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      // Снимаем активные классы
      buttons.forEach((btn) =>
        btn.classList.remove('hero__section-btn--active'),
      );
      sections.forEach((section) =>
        section.classList.remove('hero__slider-wrapper--active'),
      );

      // Добавляем активный класс на нужную кнопку и секцию
      const target = button.getAttribute('data-slider');
      button.classList.add('hero__section-btn--active');
      document
        .getElementById(target)
        .classList.add('hero__slider-wrapper--active');
    });
  });
}

import Swiper from 'swiper';
import 'swiper/css';

export const useBlogHeroSlider = () => {
  new Swiper('.hero__swiper-nav', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      577: {
        slidesPerView: 1.5,
      },
      993: {
        slidesPerView: 2.5,
        spaceBetween: 32,
        centeredSlides: false,
      },
    },
  });
};