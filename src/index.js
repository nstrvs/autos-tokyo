import './index.css';
import { employmentStatus, addIncome } from './app/form.js';
import { coBuyer, coBuyerEmploymentStatus, coBuyerAddIncome, removeDiv } from './app/coBuyer.js';
import { buttonsAnimation } from './app/hoverAnimations';
import { injectCars } from './app/injectCars.js';
import { mobileMenu } from './app/mobileMenu.js';
import { createSwiper } from './app/swiper.js';

document.addEventListener('DOMContentLoaded', function() {
  console.log(window.location.pathname)
  const path = window.location.pathname;
  const page = path.split("/").pop();

  switch (page) {
      case 'form.html':
          employmentStatus();
          addIncome();
          buttonsAnimation();
          injectCars();
          mobileMenu();
          var yesRadio = document.getElementById('yes');
          var noRadio = document.getElementById('no');
        
          if (yesRadio && noRadio) {
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
          }
          break;
      case 'index.html':
          mobileMenu();
          const swiper = createSwiper();
          break;
  }
});