import { card } from './components/card.js';
import { loadMore } from './components/load-more.js';
import { notFound } from './components/not-found.js';
import { moreInfo } from './components/more-info.js';

// let myCards = [];
let counter = 0;
console.log(counter);

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

  getUsers()
  
  .then(val => {

    counter = 0;
    showMatchNumber.textContent = '';

    if (val.length == 0) {
      container.innerHTML = notFound();
      return;
    }

    let total = '';
    showMatchNumber.textContent = `${val.length} RESULTS`;

    val.forEach(data => {

      if (counter <= 5) {
        total += card(data);
      }
      counter += 1;
      console.log(counter);
    });

    if (counter > 6) {
      total += loadMore();
    }

    container.innerHTML = total;
  
  })

  .catch(msg => {console.log(msg)});

  console.log(`Funciona el click, recibí esto: ${searchText.value}`);

});
