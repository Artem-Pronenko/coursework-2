import {getSights} from './db';

export const search = (): void => {
  const modalSearch: HTMLElement | null = document.getElementById('modal-search');
  const searchInput = document.getElementById('search-input') as HTMLInputElement;

  const handlerListener = (event): void => {
    const {target} = event;
    if (target.matches('#search-open-button, #close-search')) {
      modalSearch.classList.toggle('modal-active');
    } else if (target.matches('#modal-button-search')) {
      valid();
    }
    // поиск по улицам
    if (target.closest('.search-navigation__item > button')) {
      getSights(target.textContent, 'street');
    }
  }

  // базовая проверка на валидность
  const valid = (): void => {
    const searchInputValue = searchInput.value
    if (searchInputValue.trim() === '') {
      alert('Поле должно быть заполнено!')
      searchInput.value = '';
      searchInput.focus();
    } else {
      getSights(searchInputValue);
    }
  }

  document.body.addEventListener('click', handlerListener);
};
