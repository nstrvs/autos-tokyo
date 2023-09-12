import './index.css';
import { employmentStatus, addIncome } from './app/form.js';
import { coBuyer, coBuyerEmploymentStatus, coBuyerAddIncome, removeDiv } from './app/coBuyer.js';
import { buttonsAnimation } from './app/hoverAnimations';
import { injectCars } from './app/injectCars.js';
import { mobileMenu } from './app/mobileMenu.js';
import { search, filter } from './app/search.js';
import adjustments from './app/adjustmentValue.js';

document.addEventListener('DOMContentLoaded', function() {
  const page = window.location.pathname;

  mobileMenu();
  search();

  if (page === '/form') {
      employmentStatus();
      addIncome();
      buttonsAnimation();
      injectCars();
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
  } else if (page === '/cars') {
    filter();
  } else if (page.startsWith('/inventory'))  {
    console.log('inventory');
  }
});