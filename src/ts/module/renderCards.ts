import {IAddedSights} from './interfaces';
import {HTMLEl} from './type';


function renderSlider(arrImg) {
  return arrImg.map(item => `
      <div class="swiper-slide full-card__slide">
        <img src="${item}" alt="слайд: фото">
      </div>
    `).join('');
}

export function createPrevCard({data: props, id}): HTMLDivElement {
  props.id = id;
  const $card: HTMLDivElement = document.createElement('div');
  $card.classList.add('card', 'card__block');

  $card.innerHTML = `
    <h3 class="card-title">${props.title}</h3>
    <div class="card-img-block">
      <img class="card-img" src="https://media-cdn.tripadvisor.com/media/photo-p/0d/79/e9/04/caption.jpg" 
        alt="церковь">
    </div>
    <p class="card-info">${props.info}</p>
    <div class="rating rating__block">
      <div class="rating__text">Оцінка:</div>
      <div class="rating-num"><span>${props.rating}</span>/5</div>
    </div>
    <div data-data hidden>${JSON.stringify(props)}</div>
  `;
  return $card;
}

export function createFullCard(props: IAddedSights): HTMLDivElement {
  const $card: HTMLDivElement = document.createElement('div');
  $card.classList.add('card-wrap');

  $card.innerHTML = `
    <div class="full-card">
      <button class="full-card__close">&#10006;</button>
      <div class="full-card__content">
        <h3 class="full-card__title">${props.title}</h3>
        <div class="full-card__wrapper">
          <div class="full-card__slider">
            <div class="swiper-wrapper">
  ${renderSlider(props.imgArr)}
            </div>
            <div class="swiper-button swiper-button_prev btn button_prev-card"></div>
            <div class="swiper-button swiper-button_next btn button_next-card"></div>
          </div>
          <p class="full-card__text">${props.info}</p>
          <div class="added-comments added-comments__block">
            <form class="added-comments__form" id="added-comments-form">
              <label for="added-comments-input">Оставить комментарий</label>
              <textarea 
                type="text" 
                placeholder="Оставить комментарий" 
                class="added-comments-input" 
                id="added-comments-input"
               ></textarea>
              <button class="added-comments__button">Залишити</button>
              <span class="invalid d-n">Це поле обов'язкове!</span>
            </form>
          </div>
          <div class="comments-wrapper">
            <span class="comments-name">Коментарі</span>
        ${props.feedback.map(item => `
          <div class="card-comments full-card__comments">
            <strong class="card-comments__name">${item.name}</strong>
            <span class="card-comments__date">30.10.2020/10:30</span>
            <p class="card-comments__text">${item.text}</p>
          </div>
        `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  return $card;

}

export function createMapCard({data: props}): HTMLEl {
  const $card: HTMLEl = document.createElement('div');
  $card.classList.add('map-card-item');

  $card.innerHTML = `
    <h3>${props.title}</h3>
    <div class="full-card__slider">
      <div class="swiper-wrapper">
  ${renderSlider(props.imgArr)}
      </div>
      <div class="swiper-button swiper-button_prev btn button_prev-card"></div>
      <div class="swiper-button swiper-button_next btn button_next-card"></div>
    </div>
    <p>${props.info}</p>
  `;

  return $card;

}

export function createWarningCard(text: string = 'Помилка!'): HTMLEl {
  const $card: HTMLEl = document.createElement('div');
  $card.innerHTML = `
   <br>
   <strong>Ой...</strong>
   <h3>${text}</h3>
   <br>
  `;

  return $card;
}


export function createUserCard(): HTMLEl {
  const $modal: HTMLEl = document.createElement('div');
  $modal.classList.add('modal-account');

  $modal.innerHTML = `
    <div class="modal-account-content">
      <button class="modal-account-close" id="close-modal-account">&#10006;</button>
      <button class="offset-animation-button button-sign-in" id="button-sign-in">Войти</button>
      <button class="offset-animation-button button-sign-in d-n" id="button-new-sign-in">Сменить аккаунт</button>
      <button class="offset-animation-button button-sign-out" id="button-sign-out">Выйти</button>
    </div>
  `;

  return $modal;

}