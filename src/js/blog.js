import '/scss/blog.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useSliderSections } from './components/blog/slider.js';
import { useBlogHeroSlider } from './components/blog/slider.js';
import { useArticlesSlider } from './components/blog/articles.js';

useTheme();
useBurger();
useSliderSections();
useBlogHeroSlider();
useArticlesSlider();