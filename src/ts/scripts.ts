import '../less/style.less';
import './app.ts';
import Swiper, {Navigation, EffectCoverflow, Keyboard, Autoplay, Parallax} from 'swiper';

Swiper.use([Navigation, EffectCoverflow, Keyboard, Autoplay, Parallax]);


const mainSlider: object = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button_next',
    prevEl: '.swiper-button_prev',
  },
  autoplay: {
    delay: 5000
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  effect: 'coverflow',
  spaceBetween: 100,
  speed: 800,
  parallax: true
});

