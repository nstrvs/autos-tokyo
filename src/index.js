import './index.css';
import { employmentStatus, addIncome } from './app/form.js';
import { coBuyer, coBuyerEmploymentStatus, coBuyerAddIncome, removeDiv } from './app/coBuyer.js';
import { showCars} from './app/showCars';


employmentStatus();
addIncome();
showCars();

var yesRadio = document.getElementById('yes');
var noRadio = document.getElementById('no');

yesRadio.addEventListener('change', function () {
  if (this.checked) {
    coBuyer();
    coBuyerEmploymentStatus();
    coBuyerAddIncome();
  }
});

noRadio.addEventListener('change', function () {
  if (this.checked) {
    removeDiv();
  }
});
