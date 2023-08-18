export function showCars() {
  const images = [];

  function createImage(carName, featuredImage) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('car-image__wrapper');
    newDiv.innerHTML = `<img src="${featuredImage}" alt="${carName}">`;
    document.body.appendChild(newDiv);
  }

  function hoverListener(carName, featuredImage) { 
    const carList = document.querySelectorAll('.radio-button-field');

    carList.forEach((car) => {
      car.addEventListener('mouseover', (e) => {
        const carAttribute = e.target.getAttribute('car');

        if (carAttribute == carName) {
          createImage(carName, featuredImage);
        }
      });

      car.addEventListener('mouseout', (e) => {
        const carAttribute = e.target.getAttribute('car');

        if (carAttribute == carName) {
          const carImage = document.querySelector('.car-image__wrapper');
          carImage.remove();
        }
      });
    });
  }

  fetch('https://autos-tokyo.vercel.app/api/fetch-cars')
  .then((res) => res.json())
  .then((json) => {
      // Extract the items array
      const items = json.items;

      for (let i = 0; i < items.length; i++) {
        const carName = items[i].name;
        const featuredImage = items[i]['front-page-image'].url;

        // Preload the image by creating an Image object and setting its src attribute
        const img = new Image();
        img.src = featuredImage;

        // Add the preloaded image to the images array
        images.push(img);

        hoverListener(carName, featuredImage);
      }
    })
    .catch((err) => console.error('error:' + err));
}