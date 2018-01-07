'use strict'

//Vanilla JS//
/* When scrollTop === 0, set nav bar to white for media query < 760 width and
set nav bar to transparent for media query > 760 width */
function getSize(){
  var w = document.documentElement.clientWidth;
  var nav = document.getElementById('navb');

  if ( w >= 760){
    console.log('width is greater than 760')
    nav.classList.remove('redNav');
    nav.classList.add('transparentNav');
  } else{
    console.log('width is less than 760');
    nav.classList.remove('transparentNav');
    nav.classList.add('redNav');
  }
  scrollW(w, nav);
}

/*on page scroll, set nav bar to red when width > 760 && once user has
scrolled beyond the hero landing*/
function scrollW(w, nav){
  window.addEventListener("scroll", function(){
  var top = this.scrollY;
  var a = document.getElementById('about');
  var aboutTop = a.offsetTop;

  if ( w < 760){
    nav.classList.remove('transparentNav');
    nav.classList.add('redNav');
  }
  else if ( w > 760){
    if(top < aboutTop){
      nav.classList.remove('redNav');
      nav.classList.add('transparentNav');
    }else if ( top > aboutTop ) {
      nav.classList.remove('transparentNav');
      nav.classList.add('redNav');
    }
  }
  })
}
