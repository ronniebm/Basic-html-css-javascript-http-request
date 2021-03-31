document.addEventListener('DOMContentLoaded', function () {

  const menuBtn = document.querySelector('.js-burger');
  const header = document.querySelector('.js-header');
  const navRow = document.querySelector('.js-nav-row');


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
      navRow.classList.remove('justify-content-center');
    } else {
      if (menuActive) {
        header.classList.add('header--active');
        menuActive = false;
      }
      navRow.classList.add('justify-content-center');
    }
  });

});