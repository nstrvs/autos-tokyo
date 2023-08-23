import Swiper from 'swiper';

export function createSwiper() {
    const swiper = new Swiper('.swiper', {
        breakpoints: {
            1920: {
                slidesPerView: 4,
                spaceBetween: 10,
                centeredSlides: true,
            },
            479: {
                slidesPerView: 1,
                spaceBetween: 10
            },
        }
    });

    console.log('swiper created');

    return swiper;
}