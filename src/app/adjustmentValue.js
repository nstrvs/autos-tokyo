export default function adjustmentValue () {
    const selectors = document.querySelectorAll('#av-1, #av-2, #av-3');
    selectors.forEach(function (selector) { 
        if (selector.textContent < 0) {
            selector.textContent = selector.textContent.replace('-', '');
            selector.style.color = '#7f1111';
            document.querySelector(`#card-${selector.id}`).classList.add('is-negative');
            document.querySelector(`#up-${selector.id} .fontaswesome.is-value`).textContent = '?';
            document.querySelector(`#icon-${selector.id} .text-block.is-value`).textContent = '-';

        }
    });
}