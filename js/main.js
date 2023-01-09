'use strict'

const eshopEl = document.getElementById('eshopImg');
const auctionEl = document.getElementById('auctionImg');

const eshopImages = ['../images/eshop/eshop.png', '../images/eshop/eshop2.png', '../images/eshop/eshop3.jpg'];
const auctionImages = ['../images/auction/auction.png', '../images/auction/auction2.png', '../images/auction/auction3.png', '../images/auction/auction4.png'];

function updateImage(el, arr) {

  let currentIndex = 0;
  let previousIndex = 0;

  setInterval(function () {
    // Find the next image to display
    do {
      currentIndex = Math.floor(Math.random() * arr.length);
    } while (currentIndex === previousIndex);
    previousIndex = currentIndex;

    el.style.opacity = 0;
    setTimeout(function () {
      el.src = arr[currentIndex];
      el.style.opacity = 1;
    }, 300);
  }, 4000);
}

setTimeout(function () {
  updateImage(eshopEl, eshopImages);
}, 1000);

setTimeout(function () {
  updateImage(auctionEl, auctionImages);
}, 3000);
