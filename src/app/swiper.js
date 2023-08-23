import Swiper from 'swiper';

export function createSwiper() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const spaceBetweenVW = vw * 0.02; // 2vw

    const swiper = new Swiper('.swiper', {
        slidesPerView: 4,
        spaceBetween: spaceBetweenVW,
        centeredSlides: true,
    });

    console.log('swiper created');

    return swiper;
}