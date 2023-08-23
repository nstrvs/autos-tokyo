import Swiper from 'swiper';

export function createSwiper() {
    const swiper = new Swiper('.swiper', {
        speed: 400,
        slidesPerView: 3,
        spaceBetween: 1,
        centeredSlides: true,
    });

    console.log('swiper created');

    return swiper;
}