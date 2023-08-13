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
    const sibling = document.getElementById('co-buyer__section');
    sibling.parentNode.insertBefore(newDiv, sibling.nextSibling);
  }

  function removeDiv() {
    const coBuyerContent = document.getElementById('co-buyer__sibling');
    if (coBuyerContent) {
      coBuyerContent.remove();
    }
  }

  var yesRadio = document.getElementById('yes');
  var noRadio = document.getElementById('no');

  yesRadio.addEventListener('change', function() {
    if (this.checked) {
      createDiv();
    }
  });

  noRadio.addEventListener('change', function() {
    if (this.checked) {
      removeDiv();
    }
  });
}