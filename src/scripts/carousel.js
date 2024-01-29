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

let totalScroll = 0;

// Set up an interval for automatic scrolling
let autoScroll = setInterval(scrolling, delay);

// Function to handle scrolling
function scrolling() {
  totalScroll++;

  if (totalScroll === imageItems.length + 1) {
    resetScroll();
  }

  // Get the width of the first child element to calculate the scroll distance
  const widthEl = document.querySelector('.imageWrapper > :first-child').offsetWidth + 24;
  imageWrapper.style.left = `-${totalScroll * widthEl}px`;
  imageWrapper.style.transition = '.3s';
}

// Function to reset the scroll position and restart the interval
function resetScroll() {
  clearInterval(autoScroll);
  totalScroll = 1;
  imageWrapper.style.transition = '0s';
  imageWrapper.style.left = '0';
  autoScroll = setInterval(scrolling, delay);
}
