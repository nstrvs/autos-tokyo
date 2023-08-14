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
        console.log(carAttribute);

        /* if (carAttribute == carName) {
          console.log(carName, featuredImage);
         }*/

      });
    });
  }

  fetch('https://autos-tokyo.vercel.app/api/fetch-cars')
  .then((res) => res.json())
  .then((json) => {
      // Extract the items array
      const items = json.items;

      const carName = [];
      const featuredImage = [];

      for (let i = 0; i < items.length; i++) {
        carName.push(items[i].name);
        featuredImage.push(items[i]['front-page-image'].url);
    
        hoverListener(carName[i], featuredImage[i]);
      }

    })
    .catch((err) => console.error('error:' + err));
}