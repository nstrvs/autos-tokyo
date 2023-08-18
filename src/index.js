import './index.css';
import { employmentStatus, addIncome } from './app/form.js';
import { coBuyer, coBuyerEmploymentStatus, coBuyerAddIncome, removeDiv } from './app/coBuyer.js';
import { buttonsAnimation } from './app/hoverAnimations';
import { injectCars } from './app/injectCars';


employmentStatus();
addIncome();
buttonsAnimation();
injectCars();

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