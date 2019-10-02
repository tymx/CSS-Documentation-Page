var nav = document.querySelector('#navbar');
var icon = document.querySelector('.hamburger-icon');
var realIcon = document.querySelector('.hamburger-icon > div');
var cross = document.querySelector('.cross');

function navAppear() {
  icon.addEventListener('click', () => {   
    nav.classList.toggle('nav-hidden');
    nav.classList.toggle('nav-bar-visible');
    icon.classList.toggle('hidden');
    realIcon.classList.toggle('hidden');
    cross.classList.toggle('cross-visible');
    cross.classList.toggle('hidden');
  });

  cross.addEventListener('click', () => {
    cross.classList.toggle('hidden');
    cross.classList.toggle('cross-visible');
    icon.classList.toggle('cross-visible');
    icon.classList.toggle('hidden');
    realIcon.classList.toggle('cross-visible');
    realIcon.classList.toggle('hidden');
    nav.classList.toggle('nav-hidden');
    nav.classList.toggle('nav-bar-visible');
  });

}

function navLinksClose(){
  var nav_links = document.getElementsByTagName('a');

  for(var i = 0; i < nav_links.length; i++){
    nav_links[i].addEventListener('click', () => {
      cross.classList.toggle('hidden');
      cross.classList.toggle('cross-visible');
      nav.classList.toggle('nav-bar-visible');
      nav.classList.toggle('nav-hidden');
      icon.classList.toggle('cross-visible');
      icon.classList.toggle('hidden');
      realIcon.classList.toggle('cross-visible');
      realIcon.classList.toggle('hidden');
    });
  }

}

navAppear();
navLinksClose();