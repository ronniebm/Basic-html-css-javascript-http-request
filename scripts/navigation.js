document.addEventListener('DOMContentLoaded', function () {

  const menuBtn = document.querySelector('.js-burger');
  const header = document.querySelector('.js-header');
  let menuActive = false;


  // listen for burger button click
  menuBtn.addEventListener('click', () => {
    header.classList.toggle('header--active')
  })

});