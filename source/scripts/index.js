const menuButton = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');
const sliderControl = document.querySelector('.slider__control');
const slider = document.querySelector('.slider');

let isStarted = false;

mainNav.classList.add('main-nav--closed');

menuButton.addEventListener('click', () => {
  mainNav.classList.toggle('main-nav--closed');
  mainNav.classList.toggle('main-nav--opened');
});

if (sliderControl) {
  sliderControl.addEventListener('click', () => {
    if (isStarted) {
      slider.classList.toggle('slider--after');
      slider.classList.toggle('slider--before');
    } else {
      isStarted = true;
      slider.classList.add('slider--after');
    }
  });
}
