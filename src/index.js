import './index.css';
import { employmentStatus, addIncome } from './app/form.js';
import { coBuyer, coBuyerEmploymentStatus, coBuyerAddIncome, removeDiv } from './app/coBuyer.js';
import { buttonsAnimation } from './app/hoverAnimations';
import { injectCars } from './app/injectCars.js';
import { mobileMenu } from './app/mobileMenu.js';
import { createSwiper } from './app/swiper.js';

document.addEventListener('DOMContentLoaded', function() {
    employmentStatus();
    addIncome();
    buttonsAnimation();
    injectCars();
    mobileMenu();
    console.log('Before createSwiper call');
    const swiper = createSwiper();
    console.log('After createSwiper call');

    var yesRadio = document.getElementById('yes');
    var noRadio = document.getElementById('no');

    yesRadio.addEventListener('change', function () {
        if (this.checked) {
            coBuyer();
            coBuyerEmploymentStatus();
            coBuyerAddIncome();
            buttonsAnimation();
        }
    });

    noRadio.addEventListener('change', function () {
        if (this.checked) {
            removeDiv();
        }
    });
});