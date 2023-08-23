// src/app/swiper.js
import Swiper from 'swiper';

export function createSwiper() {
    return new Swiper('.swiper', {
        speed: 400,
        slidesPerView: 1,
        spaceBetween: 10,
    });
}