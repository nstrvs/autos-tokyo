export function coBuyer() {
  function createDiv() {
    var newDiv = document.createElement('div');
    newDiv.id = 'co-buyer__sibling';
    newDiv.className = 'co-buyer__sibling';
    newDiv.innerHTML = `
      <div class="co-buyer__wrapper">
        <h1>Co-Buyer</h1>
      </div>
    `;
    const container = document.getElementById('Dealership-Form');
    container.appendChild(newDiv);
  }

  var yesCheckbox = document.getElementById('yes');
  var noCheckbox = document.getElementById('no');

  noCheckbox.addEventListener('click', function() {
    if (this.checked) {
      yesCheckbox.checked = false;
      createDiv();
    } else {
      noCheckbox.checked = false;
      const coBuyerContent = document.getElementById('co-buyer__sibling');
      coBuyerContent.remove();
    }
  });

  yesCheckbox.addEventListener('click', function() {
    if (this.checked) {
      noCheckbox.checked = false;
      const coBuyerContent = document.getElementById('co-buyer__sibling');
      coBuyerContent.remove();
    } else {
      yesCheckbox.checked = false;
      createDiv();
    }
  });
}