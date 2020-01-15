'use strict'

//BANNER SLIDER
var swiper = new Swiper('.main-banner', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 1100px
    1100: {
      slidesPerView: 'auto',
      spaceBetween: 150,
    },
  }
});

var swiper = new Swiper('.page-banner', {
    // If we need pagination
    pagination: {
      el: '.swiper-pagination', 
      clickable: true,
    },
});

var swiper = new Swiper('.gallery', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiper = new Swiper('.about-slider', {
  slidesPerView: 'auto',
  spaceBetween: 150,
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

  // Hamburger
  var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
      hamburger.addEventListener("click", function() {
        this.classList.toggle("is-active");
      }, false);
    });
  }

// MEDIA
if (window.matchMedia('(max-width: 990px)').matches) {  
  // let logo = document.getElementById('logo')
  let supLogo = document.getElementById('support-logo')
  let menu = document.getElementById('menu')

  supLogo.after(menu)
}

// Маска телефона
$(document).ready(function(){
  $('.phone-mask').mask('+7 (000) 000-00');
});