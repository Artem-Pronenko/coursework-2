import {HTMLEl} from './type';
import {createFullCard, createMapCard} from './renderCards';
import {IAddedSightsId} from './interfaces';
import {sliderCard} from './sliders';
import {getSights} from './db';
import {addedComments} from './addedComments';

export function governmentDOMCard(): void {
  const cardWrapper: HTMLEl = document.getElementById('cards-out');
  let cardClose: HTMLEl;

  function closeCard($card: HTMLEl): void {
    //cardClose.removeEventListener('click', closeCard.bind(null));
    $card.remove();
  }

  function openCard(event): void {
    const card: HTMLEl = event.target.closest('.card');

    if (card) {
      const cardTitle: IAddedSightsId = JSON.parse(card.querySelector('[data-data]').textContent);
      document.body.append(createFullCard(cardTitle));
      sliderCard('full-card__slider', 'button_next-card', 'button_prev-card');

      cardClose = document.querySelector('.full-card__close');
      cardClose.addEventListener('click', closeCard.bind(null, document.querySelector('.card-wrap')));
      addedComments(cardTitle.feedback, cardTitle.id);
    }

  }


  cardWrapper.addEventListener('click', openCard);
}

export function governmentDOMMap(): void {
  const map: HTMLEl = document.getElementById('map');

  function openMapCard(event): void {
    const button: HTMLEl = event.target.closest('.map-mark');

    if (button) {
      const searchValue: string = button.dataset.street;
      const mouseX: number = event.pageX;
      const mouseY: number = event.pageY;

      getSights(searchValue, true).then(data => {
        document.querySelector('.map-card-item') && document.querySelector('.map-card-item').remove();

        document.body.append(createMapCard(data[0]));
        const card: HTMLEl = document.querySelector('.map-card-item');
        card.style.top = mouseY + 'px';
        card.style.left = mouseX + 'px';
        sliderCard('full-card__slider', 'button_next-card', 'button_prev-card');
      });

    }

  }

  map.addEventListener('click', openMapCard);
}
