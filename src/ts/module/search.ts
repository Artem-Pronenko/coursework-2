import {getSights} from './db';

export const search = (): void => {
  const modalSearch: HTMLElement | null = document.getElementById('modal-search');
  const searchInput = document.getElementById('search-input') as HTMLInputElement;
  const buttonSearch: HTMLElement | null = document.getElementById('modal-button-search');

  const handlerListener = (event): void => {
    const {target} = event;
    if (target.matches('#search-open-button, #close-search')) {
      modalSearch.classList.toggle('modal-active');
    } else if (target.matches('#modal-button-search')) {
      valid();
    }
  }

  const valid = () => {
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
