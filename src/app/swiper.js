import Swiper from 'swiper';

export function createSwiper() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        freeMode: true,
        mousewheel: true,
        keyboard: true,
    });

    console.log('swiper created');

    return swiper;
}