import Swiper from 'swiper';

export function createSwiper() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        speed: 200,
        centeredSlides: true,
    });

    console.log('swiper created');

    return swiper;
}