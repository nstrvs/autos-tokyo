export default function adjustmentValue () {
    const selectors = document.querySelectorAll('#av-1, #av-2, #av-3');
    selectors.forEach(function (selector) { 
        if (selector.textContent < 0) {
            document.getElementById(`card-${selector.id}`).classList.add('is-negative');
            /*document.querySelector(`#card-${selector.id}.fontaswesome.is-value`).textContent = '';
            document.querySelector(`#card-${selector.id}.text-block.is-value`).textContent = '-';
            document.querySelector(`#card-${selector.id}.text-block`).style.color = '#7f1111'; */

        }
    });
}