// Smooth Scroll Functionality
function smoothScroll(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Carousel Functionality
const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let counter = 0;

// Update the carousel's position based on the current slide
function updateCarousel() {
  const size = carouselItems[0].clientWidth;
  carouselSlide.style.transform = `translateX(-${counter * size}px)`;
}

// Initialize the carousel on load and on window resize
function initCarousel() {
  window.addEventListener('resize', updateCarousel);
  updateCarousel();
}

// Previous Button Functionality
prevButton.addEventListener('click', () => {
  counter = (counter <= 0) ? carouselItems.length - 1 : counter - 1;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  updateCarousel();
});

// Next Button Functionality
nextButton.addEventListener('click', () => {
  counter = (counter >= carouselItems.length - 1) ? 0 : counter + 1;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  updateCarousel();
});

// Call the initialization functions
document.addEventListener('DOMContentLoaded', initCarousel);

// Down Arrow in Header
const downArrow = document.querySelector('.down-arrow');
if (downArrow) {
  downArrow.addEventListener('click', () => smoothScroll('about'));
}