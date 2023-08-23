import Swiper from 'swiper';

export function createSwiper() {
    const swiper = new Swiper('.swiper', {
        speed: 200,
        centeredSlides: true,
    });

    console.log('swiper created');

    return swiper;
}