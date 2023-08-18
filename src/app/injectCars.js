export function injectCars() {

  function createDiv(carName, slug) {
    let vehicleSelection = document.getElementById('form__cars-list');
    const newDiv = document.createElement('label');
    newDiv.id = slug;
    newDiv.classList.add("radio-button-field", "showcars", "w-radio");
    newDiv.setAttribute('for', `${carName}-radio`);
    newDiv.innerHTML = `
    <input type="radio" name="Vehicle-Selection" value="${carName}" data-name="Vehicle Selection" id="${carName}-radio" class="radio-button w-radio-input">
      <span class="radio-button-label w-form-label">${carName}</span>
    `
    vehicleSelection.appendChild(newDiv);
  }

  const images = [];

  function createImage(carName, featuredImage) {
    const newDiv = document.createElement('figure');
    newDiv.classList.add('car-image__wrapper');
    newDiv.innerHTML = `<img src="${featuredImage}" alt="${carName}">`;
    document.body.appendChild(newDiv);
  }

  function hoverListener(carName, slug, featuredImage) {

    const car = document.getElementById(slug);

    car.addEventListener('mouseover', (e) => {
        createImage(carName, featuredImage);
    });

    car.addEventListener('mouseout', (e) => {
      const carImage = document.querySelector('.car-image__wrapper');
      carImage.remove();
    });
  }

  fetch('https://autos-tokyo.vercel.app/api/fetch-cars')
  .then((res) => res.json())
  .then((json) => {
      // Extract the items array
      const items = json.items;

      for (let i = 0; i < items.length; i++) {
        const carName = items[i].name;
        const slug = items[i].slug;
        const featuredImage = items[i]['front-page-image'].url;

        
        const img = new Image();
        img.src = featuredImage;

        // Add the preloaded image to the images array
        images.push(img);

        createDiv(carName);
        hoverListener(carName, slug, featuredImage);
      }
    })
    .catch((err) => console.error('error:' + err));
}