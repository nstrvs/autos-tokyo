export default function adjustmentValue () {
    const selectors = document.querySelectorAll('#av-1, #av-2, #av-3');
    selectors.forEach(function (selector) { 
        if (selector.textContent < 0) {
            selector.textContent = selector.textContent.replace('-', '');
            selector.style.color = '#7f1111';
            document.querySelector(`#card-${selector.id}`).classList.add('is-negative');
            const up = document.querySelector(`#up-${selector.id}`);
            up.textContent = '';
            up.style.color = '#7f1111';
            const icon = document.querySelector(`#icon-${selector.id}`);
            icon.textContent = '-';
            icon.style.color = '#7f1111';
            icon.style.paddingBottom = '2px';

        }
    });
}