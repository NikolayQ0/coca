import '/scss/post.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { initFooterAccordion } from './components/home/accordeon.js';

useTheme();
useBurger();
initFooterAccordion();