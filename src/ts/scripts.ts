import '../less/style.less';
// import './app';
import './module/slider';
import {search} from './module/search';
import './module/db';
import {renderCard} from "./module/renderCard";

search();

document.addEventListener('DOMContentLoaded', () => {
  const url: string = window.location.href;
  const lastWordInUrl: string = url.substring(url.lastIndexOf('/') + 1, url.length);
  const data: string = localStorage.getItem('data')
  if (lastWordInUrl === 'sights.html' && data) {
    const cardsOut: HTMLElement = document.getElementById('cards-out')
    JSON.parse(data).forEach(item => {
      cardsOut.append(renderCard(item))
    })
  }
})
