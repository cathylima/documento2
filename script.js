let startX = 0;
let currentTranslate = 0;

const slider = document.getElementById('slider');
const sliderImages = document.getElementById('sliderImages');
const totalImages = document.querySelectorAll('.slider-image').length;
const screenWidth = window.innerWidth;

function openSlider() {
  slider.style.display = 'block';
}

function closeSlider() {
  slider.style.display = 'none';
}

sliderImages.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

sliderImages.addEventListener('touchmove', (e) => {
  const deltaX = e.touches[0].clientX - startX;
  const newTranslate = currentTranslate + deltaX;

  sliderImages.style.transform = `translateX(${newTranslate}px)`;
});

sliderImages.addEventListener('touchend', (e) => {
  const deltaX = e.changedTouches[0].clientX - startX;

  if (deltaX > 50 && currentTranslate < 0) {
    currentTranslate += screenWidth;
  } else if (deltaX < -50 && currentTranslate > -(screenWidth * (totalImages - 1))) {
    currentTranslate -= screenWidth;
  }

  sliderImages.style.transform = `translateX(${currentTranslate}px)`;
});

