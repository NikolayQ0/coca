import '/scss/pricing.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { usePriceSwitcher } from './components/pricing/priceSwither.js';
import { initFooterAccordion } from './components/home/accordeon.js';

useTheme();
useBurger();
usePriceSwitcher();
initFooterAccordion();