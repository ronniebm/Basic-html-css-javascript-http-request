export {loadMore};

// Load more button section.
let loadMore = function() {

  return `
    <div class="col-11 col-md-12 pad-0 load-more">
    <div class="container col-wrap load-more__container">
      <div class="row load-more__row">
        <div class="col-12 col-md-7 col-lg-7 pad-0 load-more__wrapper">
          <a class="load-more__wrapper__link" href="#">
            <div class="load-more__wrapper__text">Load more</div>
            <img class="load-more__wrapper__icon" src="./img/icon_arrow-right.svg" alt="right arrow">
          </a>
        </div>
      </div>
    </div>
    </div>
  `;

}