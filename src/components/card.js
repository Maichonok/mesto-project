import { openPopup } from "./modal.js";
import {popupPreviewer} from "./utils/constants.js";

// Конструктор карточек
export function createCard(cardName, cardLink) {
  // обращение к template свойству content
  const popupPreviewerPicture = document.querySelector('#image-preview .popup__image');
  const popupPreviewerTitle = document.querySelector('#image-preview .popup__title-image');  const cardElement = getTemplate();
  const cardElementPicture = cardElement.querySelector('.card__pic');

  cardElement.querySelector('.card__title').textContent = cardName;
  cardElementPicture.src = cardLink;
  cardElementPicture.alt = cardName;


  // like card
  cardElement.querySelector('.card__like-btn')
    .addEventListener('click', (evt) => {
      const like = evt.target;
      like.classList.toggle('card__like_active-btn');
    });

  // delete card
  cardElement.querySelector('.card__trash-btn')
    .addEventListener('click', (evt) => {
      const deleteButton = evt.target;
      const card = deleteButton.closest('.card');

      card.remove();
    });

  // preview image
  cardElement.querySelector('.card__pic')
    .addEventListener('click', (evt) => {
      const src = cardElement.querySelector('.card__pic').src;
      const title = cardElement.querySelector('.card__title').textContent;

      popupPreviewerPicture.src = src
      popupPreviewerPicture.alt = title;
      popupPreviewerTitle.textContent = title;
      openPopup(popupPreviewer);
    });
    return cardElement;
};


function getTemplate() {
  const cardTemplate = document.querySelector('#card-template').content;
  return cardTemplate.querySelector('.card').cloneNode(true);
}
