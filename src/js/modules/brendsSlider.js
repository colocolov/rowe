// https://swiperjs.com/swiper-api

import _vars from "../_vars.js";
import Swiper, { Navigation, Pagination, Autoplay, EffectFade, Parallax } from "swiper";

Swiper.use([Autoplay]);

if (_vars.brendSliderEl) {
  // слайдер на главной
  new Swiper(_vars.brendSliderEl, {
    loop: true,
    autoplay: {
      //пауза между прокруткой
      delay: 3000,
      //закончить на последнем слайде
      // stopOnLastSlide: false,
      //отключить после ручного переключения
      // disableOnInteraction: false,
    },
    //скорость переключения слайдов
    speed: 800,
    // показ кол-ва слайдов (работает, когда откл effect: "fade")
    slidesPerView: 2,
    // расстояние между слайдами
    // spaceBetween: gap, // свой размер
    // spaceBetween: 130,
    // кол-во пролистываемых слайдов
    slidesPerGroup: 1,
    // стартовый слайд
    initialSlide: 2,
    // активный слайд по центру
    centeredSlides: true,
    
    // адаптив
    breakpoints: {
      // when window width is >= 320px
      576: {
        slidesPerView: 3,
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        // spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        // spaceBetween: 20,
      },
    },

    //отложенная загрузка:
    //отключаем презагрузку картинок
    preloadImages: false,
    lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: false,
    },
    //
  });
  //----- END
}