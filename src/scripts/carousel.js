const imageWrapper = document.querySelector('.imageWrapper');
// Select all child elements of '.imageWrapper' and store them in 'imageItems'
const imageItems = document.querySelectorAll('.imageWrapper > *');
// Set the number of items to display at a time
const perView = 3;
// Set the interval for automatic scrolling
const delay = 2000;

// Set a CSS custom property '--per-view' on '.imageWrapper' to determine the number of images to display at once
imageWrapper.style.setProperty('--per-view', perView);

for (let i = 0; i < perView; i++) {
  imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML);
}

const totalScroll = 0;