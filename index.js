const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.hdr-navList');
const close = document.querySelector('.hdr-iconsClose');

const blur = document.querySelector('#blur');
const play = document.querySelector('.ion-md-play');


const popup = document.querySelector('#popup');
const popupClose = document.querySelector('.popup-iconsClose');


hamburger.addEventListener('click', (e)=> {
  menu.classList.add('is-active');
  hamburger.classList.add('is-active');
})

close.addEventListener('click', ()=> {
  menu.classList.remove('is-active');
  hamburger.classList.remove('is-active');
})

const active = ()=> {
  play.addEventListener('click', ()=>{
    blur.classList.add('active')
    popup.classList.add('active');
  })
}

popupClose.addEventListener('click', ()=> {
    blur.classList.remove('active')
    popup.classList.remove('active');
})

active();