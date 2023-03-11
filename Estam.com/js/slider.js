const slider = document.querySelector('.slider');

const rightArrow = document.querySelector('.right');
const leftArrow = document.querySelector('.left');

rightArrow.addEventListener('click', function() {
	slider.style.transform = 'translate(-25%)';
});