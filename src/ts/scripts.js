import '../less/style.less';
import './app.ts';
import Swiper, {Navigation, EffectCoverflow} from 'swiper';

Swiper.use([Navigation, EffectCoverflow]);


const MainSlider = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button_next',
    prevEl: '.swiper-button_prev',
  },
  // autoplay: {
  //   delay: 2000
  // },
  keyboard: true,
  effect: 'coverflow'
});

