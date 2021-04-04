import { card } from './components/card.js';
import { loadMore } from './components/load-more.js';
import { notFound } from './components/not-found.js';
import { moreInfo } from './components/more-info.js';

// let myCards = [];
let counter = 0;
let total = '';
let usersData;
let usersDict = {};

// The <div> container where cards will be rendered.
let container = document.querySelector(".js-cards-container");

// setting vars for search input field.
let searchText = document.querySelector(".js-search-text");
let showMatchNumber = document.querySelector('.js-search-results');
let searchButton = document.querySelector(".js-search-button");

// function: makes a GET request to API -------------------------------
function getUsers() {

  const params = new URLSearchParams({search: `${searchText.value}`});
  const url = `https://5cf93b05e3c79f001439b581.mockapi.io/articles?${params}`;

  return fetch(url).then(res => res.json());
}



searchButton.addEventListener('click', () => {

  counter = 0;
  total = '';
  showMatchNumber.textContent = '';

  getUsers()
  
    .then(val => {

      usersData = val;
      showMatchNumber.textContent = `${val.length} RESULTS`;

      if (val.length == 0) {
        container.innerHTML = notFound();
        return;
      }

      val.forEach(user => {
        if (counter <= 5) {
          total += card(user);
        }
        counter += 1;
        usersDict[`id${user.id}`] = user;
        }
      );

      if (counter > 6) {
        total += loadMore();
        container.innerHTML = total;
        activateLoadMoreButton();
        activateBlog();
        // activateFavorites();
        return;
      }
      
      container.innerHTML = total;
      activateBlog();
      // activateFavorites();

    })

    .catch(msg => {console.log(msg)});

  console.log(`Funciona el click, recibí esto: ${searchText.value}`); //testing

});


// function: it activates Load More Button. ---------------------
function activateLoadMoreButton() {
  
  let loadMoreButton = document.querySelector(".js-load-more");

  loadMoreButton.addEventListener('click', () => {

    total = '';

    usersData.forEach(user => {
      total += card(user);
    });

    container.innerHTML = total;
    activateBlog();

  });

}

function activateFavorites() {

  document.querySelectorAll('.js-star').forEach(item => {

    item.addEventListener('click', event => {

      console.log(this.getAttribute('id'));

    })
  });

}

function activateBlog() {

  document.querySelectorAll('.js-card-a-link').forEach(item => {

    item.addEventListener('click', event => {
      event.preventDefault();

      container.innerHTML = moreInfo(usersDict[`id${event.target.dataset.cardid}`]);
      console.log(event.target.dataset.cardid);
      
    })
  });

}