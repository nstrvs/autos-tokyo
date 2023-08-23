import Swiper from 'swiper';

export function createSwiper() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
    });

    console.log('swiper created');

    return swiper;
}