import '/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {useInsightSlider} from './components/home/slider.js';
import {useTestimonialsSlider} from './components/home/slider.js';
import { initFooterAccordion } from './components/home/accordeon.js';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
initFooterAccordion();