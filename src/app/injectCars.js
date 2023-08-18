export function injectCars() {

  function createDiv(carName) {
    let vehicleSelection = document.getElementById('form__cars-list');
    const newDiv = document.createElement('label');
    newDiv.id = carName;
    newDiv.classList.add('radio-button-field showcars w-radio');
    newDiv.setAttribute('for', `${carName}-radio`);
    newDiv.innerHTML = `
    <input type="radio" name="Vehicle-Selection" value="${carName}" data-name="Vehicle Selection" id="${carName}-radio" class="radio-button w-radio-input">
      <span class="radio-button-label w-form-label">${carName}</span>
    `
    vehicleSelection.appendChild(newDiv);
  }

  fetch('https://autos-tokyo.vercel.app/api/fetch-cars')
  .then((res) => res.json())
  .then((json) => {
      // Extract the items array
      const items = json.items;

      for (let i = 0; i < items.length; i++) {
        const carName = items[i].name;
        createDiv(carName);
      }
    })
    .catch((err) => console.error('error:' + err));
}