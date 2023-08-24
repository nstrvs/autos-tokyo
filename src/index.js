import './index.css';
import { employmentStatus, addIncome } from './app/form.js';
import { coBuyer, coBuyerEmploymentStatus, coBuyerAddIncome, removeDiv } from './app/coBuyer.js';
import { buttonsAnimation } from './app/hoverAnimations';
import { injectCars } from './app/injectCars.js';
import { mobileMenu } from './app/mobileMenu.js';

document.addEventListener('DOMContentLoaded', function() {
  const page = window.location.pathname;

  if (page === '/form') {
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
  } else {
      mobileMenu();
  }
});