const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const imageContainer = document.querySelector('.card__container');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const imageCount = imageContainer.children.length; 
function updateDots() {
dots.forEach((dot, index) => {
dot.classList.toggle('active', index === currentIndex);
});
}


rightArrow.addEventListener('click', () => {
const firstImage = imageContainer.firstElementChild; 
imageContainer.appendChild(firstImage); 
currentIndex = (currentIndex + 1) % imageCount; 
updateDots(); 
});


leftArrow.addEventListener('click', () => {
const lastImage = imageContainer.lastElementChild;
imageContainer.prepend(lastImage); 
currentIndex = (currentIndex - 1 + imageCount) % imageCount;
updateDots(); 
});


dots.forEach((dot, index) => {
dot.addEventListener('click', () => {
if (currentIndex !== index) {
const diff = index - currentIndex; 
if (diff > 0) {

for (let i = 0; i < diff; i++) {
imageContainer.appendChild(imageContainer.firstElementChild); 
}
} else {

for (let i = 0; i < Math.abs(diff); i++) {
imageContainer.prepend(imageContainer.lastElementChild); 
}
}
currentIndex = index; 
updateDots();
}
});
});

