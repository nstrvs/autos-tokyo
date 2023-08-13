const fetch = require('node-fetch');

export function showCars() {
  const url = 'https://api.webflow.com/collections/64c5869d5fc3ada54bf96c88/items';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: 'Bearer 8bc43749e38f685f5408750d22123bde0a15b0cc22557253fe12793763a02374',
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      // Extract the items array
      const items = json.items;

      // Create a new array with the required properties
      const result = items.map((item) => {
        return {
          name: item.name,
          frontPageImage: item['front-page-image'].url,
        };
      });
      result.forEach (item => {
        const name = item.name;
        const carList = document.querySelectorAll(`#${name}`);
        carList.forEach((car) => {
          car.addEventListener('mouseenter', () => {
        });
      });

      console.log(result);
    })
    .catch((err) => console.error('error:' + err));
  
    function createImage(featuredImage, carName) {
      const newDiv = document.createElement('div');
      newDiv.classList.add('car-image__wrapper');
      newDiv.innerHTML = `<img src="${featuredImage}" alt="${carName}">`;
      document.body.appendChild(newDiv);
    }

    
}

showCars();