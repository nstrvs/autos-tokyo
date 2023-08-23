// src/app/swiper.js
import Swiper from 'swiper';

export function createSwiper() {
    const swiper = new Swiper('.swiper', {
        speed: 400,
        slidesPerView: 1,
        spaceBetween: 10,
    });

    console.log(swiper);

    return swiper;
}