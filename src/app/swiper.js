import Swiper from 'swiper';

export function createSwiper() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            479: {
                slidesPerView: 4,
                spaceBetween: 10,
                centeredSlides: true,
            },
        }
    });

    console.log('swiper created');

    return swiper;
}