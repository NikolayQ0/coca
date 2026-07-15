import '/scss/contact.scss';

// components
import { useTheme } from './components/theme.js';
import { usePhone } from './components/contact/phone.js';
import { useBurger } from './components/burger.js';
import { initFooterAccordion } from './components/home/accordeon.js';

useTheme();
usePhone();
useBurger();
initFooterAccordion();
