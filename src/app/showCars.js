const fetch = require('node-fetch');
require('dotenv').config();

const ApiKey = process.env.WEBFLOW;

export function showCars() {
  function createImage(carName, featuredImage) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('car-image__wrapper');
    newDiv.innerHTML = `<img src="${featuredImage}" alt="${carName}">`;
    document.body.appendChild(newDiv);
  }

  function hoverListener(carName, featuredImage) { 
    const carList = document.querySelectorAll('.cars-form_card');

    carList.forEach((car) => {
      car.addEventListener('mouseover', (e) => {
        const carAttribute = e.target.getAttribute('car');

        if (carAttribute == carName) {
          createImage(carName, featuredImage);
        }
      });
    });
  }

  fetch('https://autos-tokyo.vercel.app/fetch-cars')
  .then((res) => res.json())
  .then((json) => {
      // Extract the items array
      const items = json.items;

      items.forEach((item) => {
        const carName = item.name;
        const featuredImage = item.featuredImage; // Make sure 'featuredImage' is the correct key in the response

        hoverListener(carName, featuredImage);
      });
    
      console.log(items);
    })
    .catch((err) => console.error('error:' + err));
}