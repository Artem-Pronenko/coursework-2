import '../less/style.less';
import './module/sliders';
import {search} from './module/search';
import './module/db';
import {createPrevCard, createWarningCard} from './module/renderCard';
import {governmentDOMCard, governmentDOMMap} from './module/governmentDOM';
import {HTMLEl} from './module/type';

search();

document.addEventListener('DOMContentLoaded', (): void => {
  const url: string = window.location.href;
  const lastWordInUrl: string = url.substring(url.lastIndexOf('/') + 1, url.length);
  const data = localStorage.getItem('data');
  const cardsOut: HTMLEl = document.getElementById('cards-out');

  if (lastWordInUrl === 'sights.html' && JSON.parse(data).length) {
    JSON.parse(data).forEach(item => cardsOut.append(createPrevCard(item)));
    governmentDOMCard();
  } else if (lastWordInUrl === 'sights.html' && !JSON.parse(data).length) {
    cardsOut.append(createWarningCard('Таких пам\'яток не знайдено. Або на цій вулиці їх немає!'));
  } else if (lastWordInUrl === 'index.html' || lastWordInUrl === '') {
    governmentDOMMap();
  }

});
