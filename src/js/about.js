import '/scss/about.scss';

// components
import { useTheme } from './components/theme.js';
import {useAboutSlider} from './components/about/slider.js';
import {useTeamSlider} from './components/about/team.js';
import { useBurger } from './components/burger.js';

useTheme();
useBurger();
useAboutSlider();
useTeamSlider();