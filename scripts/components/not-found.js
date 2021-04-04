export {notFound};

// Load more button section.
let notFound = function() {

  return `
    <div class="col-12 pad-0 not-found">
    <div class="container col-wrap">
      <div class="row">
        <div class="col-12 pad-0 not-found__text">
          <h2 class="not-found__tittle">Uh oh.</h2>
          <span class="not-found__info">We ran into an issue, but don't worry, we'll take care of it for sure.</span>
          <div class="not-found__button-container">
            <button class="not-found__button">Back to safety</button>
          </div>
        </div>
        <div class="col-12 pad-0 not-found__image"></div>
      </div>
    </div>
    </div>
  `;

}