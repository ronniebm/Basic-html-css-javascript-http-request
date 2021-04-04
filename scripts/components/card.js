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
let card = function({id=null, createdAt, name, title, description, rate, avatar, coverUrl}) {

  var date = new Date(createdAt);
  var month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
              "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][date.getMonth()];
  var day = date.getDate().toString().length > 1 ? date.getDate : `0${date.getDate()}`;

  return `
  <div class="col-12 col-md-5 col-lg-4 col-xl-4 pad-0 card">
    <div class="card-top" src="${coverUrl}">
      <span class="card-top__price" style="background: ${Colors.random()}">$${rate}</span>
      <svg class="card-top__star" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 6.2c0 .182-.125.353-.25.484l-3.49 3.57.826 5.04c.01.07.01.131.01.202 0 .262-.115.504-.394.504a.755.755 0 01-.385-.121L8 13.499l-4.317 2.38a.784.784 0 01-.385.121c-.279 0-.404-.242-.404-.504 0-.07.01-.131.02-.202l.826-5.04-3.5-3.57C.125 6.554 0 6.382 0 6.2c0-.302.298-.423.538-.463L5.365 5 7.53.413C7.615.222 7.779 0 8 0c.221 0 .385.222.471.413l2.164 4.588 4.826.736c.231.04.539.16.539.463z" fill="#B4C2D3"/></svg>
    </div>

    <div class="card-bottom">
      <h2 class="card-bottom__title">${title}</h2>
      <p class="card-bottom__text">${description}</p>

      <div class="card-footer">
        <div class="card-footer__author">
          <div class="card-footer__avatar" src="${avatar}"></div>
          <span class="card-footer__name">${name}</span>
        </div>

        <span class="card-footer__date">${month} ${day}</span>
      </div>
    </div>
  </div>
  `;
};
