
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const site = document.querySelector('.site');
const header = document.querySelector('.header__nav');
const openMenu = document.querySelector('.menu--open');
var play = document.querySelector(".burger");
var reverse = document.querySelector(".close");

var tl = gsap.timeline();


tl.fromTo(".hero__left", {duration: 1,  opacity:0.4},{duration: 1,  opacity: 1, stagger: 0.2})
  .fromTo(".photos-wrap img", {duration: 1,  opacity:0},{duration: 1,  opacity: 1, stagger: 0.2})
//tl.to(".menu", { duration: 1,  opacity:1,  stagger:0.8,  scale:1})


play.onclick = function(e) {
  e.preventdefault();
  tl.play();
}

reverse.onclick = function() {
  tl.reverse();
}

