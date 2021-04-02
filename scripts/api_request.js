// The <div> container where cards will be rendered.
let container = document.querySelector(".js-cards-container");

function renderCard() {
  
  return card = `
  <div class="container card-wrapper">
              <div class="row">
                <div class="col-12 col-md-3 pad-0">
                  <div class="card">

                    <div class="card-top">
                      <img class="card-top__img" src="http://placeimg.com/300/150" alt="background">
                      <span class="card-top__price" style="background: light-gray">$80/MO</span>
                    </div>
                
                    <div class="card-bottom">
                      <h2 class="card-bottom__title">Titulo principal</h2>
                      <p class="card-bottom__text">Descripcion de la tarjeta, se muestra en esta sección.</p>
                
                      <div class="card-footer">
                        <div class="card-footer__author">
                          <img class="card-footer__avatar" src="http://placeimg.com/300/150" alt="">
                          <span class="card-footer__name">Pedro Perez</span>
                        </div>
                
                        <span class="card-footer__date">MAY 03</span>
                      </div>
                    </div>
                
                  </div>
                </div>
              </div>
            </div>
  `
;}

// let total = '';
// total += renderCard();
// total += renderCard();