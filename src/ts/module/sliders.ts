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
})

const cardSlider: object = new Swiper('.full-card__slider', {
  loop: true,
  navigation: {
    nextEl: '.button_next-card',
    prevEl: '.button_prev-card',
  },
  autoplay: {
    delay: 5000
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  speed: 500,
  parallax: true
});
