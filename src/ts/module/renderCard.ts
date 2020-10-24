//
export function renderCard(props): HTMLDivElement {
  const $card: HTMLDivElement = document.createElement('div');
  $card.classList.add('card', 'card__block')
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
    <label for="feedback-input">Залишити відгук</label>
    <textarea id="feedback-input" placeholder="Напишіть відгук" class="feedback feedback__input"></textarea>
    <button class="btn feedback-button" id="added-feedback-button">Відправити</button>
  `;
  return $card;
}
