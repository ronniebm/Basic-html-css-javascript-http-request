export {card};

// creating a random function for colors.
let Colors = {};

Colors.names = {
    black: "#000000",
    blue: "#0000ff",
    brown: "#a52a2a",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgrey: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darkviolet: "#9400d3",
    fuchsia: "#ff00ff",
    gold: "#ffd700",
    green: "#008000",
    indigo: "#4b0082",
    lime: "#00ff00",
    magenta: "#ff00ff",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    orange: "#ffa500",
    purple: "#800080",
    red: "#ff0000"
};

Colors.random = function() {
  var result;
  var count = 0;
  for (var prop in this.names)
      if (Math.random() < 1/++count)
         result = prop;
  return result;
};

// Card component rendering function.
let card = function(card) {

  var date = new Date(card.createdAt);
  var month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
              "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][date.getMonth()];
  var day = date.getDate().toString().length > 1 ? date.getDate : `0${date.getDate()}`;

  return `
  <div data-id="${card.id}" class="col-12 col-md-5 col-lg-4 col-xl-4 pad-0 card">
    <a class="card__a-link js-card-a-link" data-cardId="${card.id}" href="">hola</a>
      <a class="js-star" href="">
        <img data-starId="${card.id}" class="card-top__star" src="./img/icon_star.svg">
      </a>
      <div class="card-top" style="background-image: url(${card.coverUrl})">
        <span class="card-top__price" style="background: ${Colors.random()}">$${card.rate}</span>
      </div>

      <div class="card-bottom">
        <h2 class="card-bottom__title">${card.title}</h2>
        <p class="card-bottom__text">${card.description}</p>

        <div class="card-footer">
          <div class="card-footer__author">
            <div class="card-footer__avatar" style="background-image: url(${card.avatar})"></div>
            <span class="card-footer__name">${card.name}</span>
          </div>

          <span class="card-footer__date">${month} ${day}</span>
        </div>
      </div>
  </div>
  `;
};
