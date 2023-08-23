// src/app/swiper.js
import Swiper from 'swiper/bundle';

export function createSwiper() {
    return new Swiper('.swiper', {
        speed: 400,
    });
}