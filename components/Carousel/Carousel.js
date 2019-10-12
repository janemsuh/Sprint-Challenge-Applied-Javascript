/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {

  const carouselDiv = document.querySelector('.carousel-container');
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const images = [];
  for (let i = 0; i < 4; i++) {
    images.push(document.createElement('img'));
  }
  const rightbutton = document.createElement('div');

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button')
  rightButton.classList.add('right-button');

  leftButton.textContent = ' < ';
  images[0].src = '../../assets/carousel/mountains.jpeg';
  images[1].src = '../../assets/carousel/computer.jpeg';
  images[2].src = '../../assets/carousel/trees.jpeg';
  images[3].src = '../../assets/carousel/turntable.jpeg';
  rightButton.textContent = ' > ';

  leftButton.addEventListener('click', (event) => {
    // action
  })

  rightButton.addEventListener('click', (event) => {
    // action
  })

  carousel.appendChild(leftButton);
  carousel.appendChild(images);
  carousel.appendChild(rightButton);

  carouselDiv.appendChild(carousel);

  return carousel;
}

console.log(Carousel());