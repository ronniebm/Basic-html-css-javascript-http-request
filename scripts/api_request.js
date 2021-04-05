import { card } from './components/card.js';
import { loadMore } from './components/load-more.js';
import { notFound } from './components/not-found.js';
import { moreInfo } from './components/more-info.js';

let counter = 0;
let total = '';
let usersData;
let usersDict = {};
let favoritesDict = {};
let selectedMenu = 'articles';

// The <div> container where cards will be rendered.
let menuArticles = document.querySelector(".js-articles");
let menuFavorites = document.querySelector(".js-favorites");
let container = document.querySelector(".js-cards-container");
let searchText = document.querySelector(".js-search-text");
let showMatchNumber = document.querySelector('.js-search-results');
let searchButton = document.querySelector(".js-search-button");


// Search Button 'click' listener.
searchButton.addEventListener('click', () => {
  counter = 0;
  total = '';
  showMatchNumber.textContent = '';
  apiGetRequest();
});

// menu Articles 'click' listener.
menuArticles.addEventListener('click', event => {
  event.preventDefault();
  selectedMenu = "articles";
  counter = 0;
  total = '';
  showMatchNumber.textContent = '';
  apiGetRequest();
});

// menu Favorites 'click' listener.
menuFavorites.addEventListener('click', event => {
  event.preventDefault();
  selectedMenu = "favorites";

  if (Object.entries(favoritesDict).length !== 0) {
    displayFavorites(favoritesDict);
  } else {
    alert('There are no favorites yet')
  }

});


// function: it makes a GET http request. -----------------------
function apiGetRequest() {

  getCards()
  
    .then(val => {

      usersData = val;
      showMatchNumber.textContent = val.length == 0 ? 'NO RESULTS' : `${val.length} RESULTS`;

      if (val.length == 0) {
        container.innerHTML = notFound();
        return;
      }

      val.forEach(dataSet => {
        if (counter <= 5) {
          total += isFavorite(card(dataSet), favoritesDict, dataSet.id);
        }
        counter += 1;
        usersDict[`id${dataSet.id}`] = dataSet;
        }
      );

      if (counter > 6) {
        total += loadMore();
        container.innerHTML = total;
        activateLoadMoreButton();
        activateBlog();
        activateFavorites();
        return;
      }
      
      container.innerHTML = total;
      activateBlog();
      activateFavorites();

    })

    .catch(msg => {console.log(msg)});

}

// function: is the card marked as favorite?.
function isFavorite(string, dict, num) {

  if (dict.hasOwnProperty(`id${num}`)) {
    return string.replace('icon_star.svg', 'icon_star_yellow.svg');
  } else {
    return string;
  }

}

// function: makes a GET request to API -------------------------------
function getCards() {

  const params = new URLSearchParams({search: `${searchText.value}`});
  const url = `https://5cf93b05e3c79f001439b581.mockapi.io/articles?${params}`;

  return fetch(url).then(res => res.json());
}

// function: it activates Load More Button. ---------------------
function activateLoadMoreButton() {
  
  let loadMoreButton = document.querySelector(".js-load-more");

  loadMoreButton.addEventListener('click', () => {

    total = '';

    usersData.forEach(user => {
      total += isFavorite(card(user), favoritesDict, user.id);
    });

    container.innerHTML = total;
    activateBlog();
    activateFavorites();

  });

}

// function: it activates Favorites mark option. ----------------
function activateFavorites() {

  document.querySelectorAll('.js-star').forEach(item => {
    item.addEventListener('click', event => {
      
      event.preventDefault();

      if (event.target.src.includes('icon_star.svg') ) {
        event.target.src = './img/icon_star_yellow.svg';
        favoritesDict[`id${event.target.dataset.starid}`] = usersDict[`id${event.target.dataset.starid}`];
      } else if (event.target.src.includes('icon_star_yellow.svg') ) {
        event.target.src = './img/icon_star.svg';
        delete favoritesDict[`id${event.target.dataset.starid}`];
        if(selectedMenu = 'favorites') {
          delete event.target;
        }
      }

    })
  });

}

// function: it activates blog section rendering. ---------------
function activateBlog() {

  document.querySelectorAll('.js-card-a-link').forEach(item => {

    item.addEventListener('click', event => {
      event.preventDefault();

      container.innerHTML = moreInfo(usersDict[`id${event.target.dataset.cardid}`]);
      console.log(event.target.dataset.cardid);
      
    })
  });

}

//function: display favorite cards. ----------------------------
function displayFavorites(favorite) {

  total = '';

  for (let key in favorite) {
    total += card(favorite[key]).replace('star.svg', 'star_yellow.svg');
  }

  container.innerHTML = total;
  showMatchNumber.textContent = `${Object.entries(favorite).length} RESULTS`;

  activateBlog();
  activateFavorites();

}

// first time loading website.
apiGetRequest();