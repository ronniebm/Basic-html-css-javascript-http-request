export {moreInfo};

// Load more button section.
let moreInfo = function({id=null, createdAt, name, title, description, rate, avatar, coverUrl}) {

  var date = new Date(createdAt);
  var month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
              "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][date.getMonth()];
  var day = date.getDate().toString().length > 1 ? date.getDate : `0${date.getDate()}`;

  return `
    <div class="col-12 pad-0 more-info">
    <div class="container col-wrap">
      <div class="row more-info__row">
    
        <div class="col-12 col-md-9 col-lg-8 col-xl-8 col-xxl-9 pad-0 more-info__wrapper">
          <h2 class="more-info__title">${title}</h2>
          <p class="more-info__summary">${description}</p>
          
          <div class="more-info__user-container">
            <div class="more-info__user-container__data">
              <div class="more-info__user-container__data__avatar" src="${avatar}"></div>
              <div class="more-info__user-container__data__data">
                <p class="more-info__user-container__data__name">${name}</p>
                <p class="more-info__user-container__data__publish">Published on <span class="more-info__user-container__wrapper__date">${month} ${day}</span></p>
              </div>
            </div>
            <div class="more-info__user-container__social">
              <span class="more-info__user-container__social__share">SHARE:</span>
              <img src="./img/icon_instagram.svg" alt="instagram">
              <img src="./img/icon_facebook.svg" alt="facebook">
              <img src="./img/icon_twitter.svg" alt="twitter">
            </div>
          </div>
    
          <div class="col-12 pad-0 more-info__image"></div>
          <span class="more-info__caption">This is a caption on this photo for reference</span>
          <p class="more-info__paragraph">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.<br><br>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </div>
    
      </div>
    </div>
    </div>
  `;

}