'use strict'

// image carousell

const eshopEl = document.getElementById('eshopImg');
const auctionEl = document.getElementById('auctionImg');
const chatEl = document.getElementById('chatImg');

const eshopImages = ['./images/eshop/eshop.png', './images/eshop/eshop2.png', './images/eshop/eshop3.jpg'];
const auctionImages = ['./images/auction/auction.png', './images/auction/auction2.png', './images/auction/auction3.png', './images/auction/auction4.png'];
const chatImages = ['./images/livechat/chatlogin.png', './images/livechat/chatroom.png', './images/livechat/chatwindow1.png', './images/livechat/chatwindow2.png'];

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

setTimeout(function () {
  updateImage(chatEl, chatImages);
}, 2000);

// scroll animation

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')

    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el)) 