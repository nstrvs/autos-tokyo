import Swiper from 'swiper';

export function createSwiper() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        breakpoints: {
            1921: {
                slidesPerView: 5,
                spaceBetween: 10,
                centeredSlides: true,
            },
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