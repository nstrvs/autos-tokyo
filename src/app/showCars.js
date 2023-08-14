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
          console.log(carName);
        }
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
        carName = items[i].name;
        featuredImage = items[i]['front-page-image'].url;
    
        console.log(carName, featuredImage);
      }
      
    })
    .catch((err) => console.error('error:' + err));
}