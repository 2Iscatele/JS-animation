
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const site = document.querySelector('.site');
const header = document.querySelector('.header__nav');
const openMenu = document.querySelector('.menu--open');
const play = document.querySelector(".burger");
const reverse = document.querySelector(".close");

const  burgerOpen = gsap.timeline({paused:true})

.fromTo('.menu',{ opacity: 0 }, { opacity: 1, display: 'block', duration:0.5 },'-=0.1')
.fromTo('.menu-nav', { opacity: 0 }, { opacity: 1, y: 0, duration: .7 }, '-=0.5')
.fromTo('.menu__left', { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.4},'-=0.2')
.fromTo('.menu__container', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.4},'-=0.2')
.fromTo('.social',{ opacity: 0, y: 1000  }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
.fromTo('.sub-menu--1', { opacity: 0, x: -100  }, { opacity: 1, x: 0, duration: 0.7 }, '-=0.5')
.fromTo('.sub-menu--2',  { opacity: 0, x: -100  }, { opacity: 1, x: 0, duration: 0.7 }, '-=0.5')

const onLoad = gsap.timeline()

  .fromTo(".hero__left", { opacity: 0.3, y: 100 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 })
  .fromTo('.hero__desc', { opacity: 0.3 }, { opacity: 1, duration: 0.7},'-=0.5')
  .fromTo('.hero__btn', { opacity: 0.3, x: -1000 }, { opacity: 1, x: 0, duration: 0.6},'-=0.5')
  .fromTo('.photos__shape', { opacity: 0 }, { opacity: 1, duration: 0.7, stagger: 0.35 }, '-=0.15')
  .fromTo('.pictures  img', { opacity: 0 }, { opacity: 1, duration: 1.1,stagger: 0.5 })
  .fromTo('.photos__head  img', { opacity: 0 }, { opacity: 1, duration: 1.1,stagger: 0.1 })
  .fromTo('.photos__autor', { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.15 })


play.addEventListener('click',() =>  {
  burgerOpen.play();
})

reverse.onclick = function() {
  burgerOpen.reverse();
}

