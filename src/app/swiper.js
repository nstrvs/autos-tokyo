import Swiper from 'swiper';

export function createSwiper() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        breakpoints: {
            // when window width is <= 478px
            478: {
                slidesPerView: 1, // change this to your desired value
                spaceBetween: 10   // change this to your desired value
            }
        }
    });

    return swiper;
}