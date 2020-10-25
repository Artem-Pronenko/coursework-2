import {HTMLEl} from './type';
import {createFullCard} from './renderCard';
import {IAddedSights} from './interfaces';
import {sliderCard} from './sliders';

export function governmentDOM(): void {
  const cardWrapper: HTMLEl = document.getElementById('cards-out');
  let cardClose: HTMLEl;

  function closeCard($card: HTMLEl): void {
    //cardClose.removeEventListener('click', closeCard.bind(null));
    $card.remove();
  }

  function openCard(event): void {
    const card: HTMLEl = event.target.closest('.card');

    if (card) {
      const cardTitle: IAddedSights = JSON.parse(card.querySelector('[data-data]').textContent);
      document.body.append(createFullCard(cardTitle));
      sliderCard('full-card__slider', 'button_next-card', 'button_prev-card');

      cardClose = document.querySelector('.full-card__close');
      cardClose.addEventListener('click', closeCard.bind(null, document.querySelector('.card-wrap')));
    }

  }


  cardWrapper.addEventListener('click', openCard);
}
