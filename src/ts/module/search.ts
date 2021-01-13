import {getSights} from './db';
import {HTMLEl} from './type';

export const search = (): void => {
  const searchForm = document.getElementById('search-form') as HTMLFormElement;
  const modalSearch: HTMLEl = document.getElementById('modal-search');
  const searchInput = document.getElementById('search-input') as HTMLInputElement;

  const handlerListener = (event) => {
    const {target} = event;
    if (target.matches('#search-open-button, #close-search')) {
      modalSearch.classList.toggle('modal-active');
    }

    // поиск по улицам
    if (target.closest('.search-navigation__item > button')) {
      getSights(target.textContent, true).then(() => location.href = 'sights.html');
    }

    // поиск всех достопримечательностей
    if (target.matches('#all-sights')) {
      getSights('dost').then(() => location.href = 'sights.html');
    }
  }
  const handlerSubmit = (event): void => {
    event.preventDefault();
    valid();
  };

  // базовая проверка на валидность
  const valid = (): void => {
    const searchInputValue: string = searchInput.value;
    if (searchInputValue.trim() === '') {
      alert('Поле должно быть заполнено!');
      searchInput.value = '';
      searchInput.focus();
    } else {
      getSights(searchInputValue).then(() => location.href = 'sights.html');
    }
  };

  searchForm && searchForm.addEventListener('submit', handlerSubmit);
  document.body.addEventListener('click', handlerListener);
};
