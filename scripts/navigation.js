document.addEventListener('DOMContentLoaded', function () {

  const menuBtn = document.querySelector('.js-burger');
  const header = document.querySelector('.js-header');


  // listen for burger button click
  menuBtn.addEventListener('click', () => {
    header.classList.toggle('header--active')
  })

  // listen for window resize event
  window.addEventListener('resize', function() {

    newWidth = window.innerWidth;

    if (newWidth >= 1200) {
      if (header.classList.contains('header--active')) {
        header.classList.remove('header--active');
        menuActive = true;
      }
    } else {
      if (menuActive) {
        header.classList.add('header--active');
        menuActive = false;
      }
    }
  });

});