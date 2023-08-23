import Swiper from 'swiper';

export function createSwiper() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 10,
        centeredSlides: true,
        breakpoints: {
            479: {
                slidesPerView: 1,
                spaceBetween: 10
            },
        }
    });

    console.log('swiper created');

    return swiper;
}