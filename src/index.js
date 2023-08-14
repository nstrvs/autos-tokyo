import './index.css';
import { employmentStatus, addIncome } from './app/form.js';
import { coBuyer, coBuyerEmploymentStatus, coBuyerAddIncome, removeDiv } from './app/coBuyer.js';
import { showCars } from './app/showCars';
import { buttonsAnimation } from './app/hoverAnimations';


employmentStatus();
addIncome();
showCars();
buttonsAnimation();

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