import { openPopup } from "./modal.js";
import { popupPreviewer } from "../utils/constants.js";
import { getDeleteCard, getPutLikes, getDelLike } from './api';

// Конструктор карточек
export function createCard(cardName, cardLink, cardLikes, idOwner, idCard, myId) {
  // обращение к template свойству content
  const popupPreviewerPicture = document.querySelector('#image-preview .popup__image');
  const popupPreviewerTitle = document.querySelector('#image-preview .popup__title-image');
  const cardElement = getTemplate();
  const cardElementPicture = cardElement.querySelector('.card__pic');
  cardElement.querySelector('.card__title').textContent = cardName;
  cardElementPicture.src = cardLink;
  cardElementPicture.alt = cardName;

  const cardAccLike = cardElement.querySelector('.card__like-acc');

  cardAccLike.textContent = `${cardLikes.length}`;

  if (idOwner !== myId ) {
    cardElement.querySelector('.card__trash-btn').classList.add('card__trash-btn_disabled');
  }

  if (cardLikes.some((like)=>like._id === myId)) {
    cardElement.querySelector('.card__like-btn').classList.add('card__like_active-btn');
  }

  cardElement.querySelector('.card__like-btn')
    .addEventListener('click', (evt) => {
      if (evt.target.classList.contains('card__like_active-btn')) {
        getDelLike(idCard)
          .then((data) => {
            cardElement.querySelector('.card__like-btn').classList.remove('card__like_active-btn');
            cardAccLike.textContent = `${data.likes.length}`
          })
          .catch((err) => {
            console.log(err);
          })
      } else {
        getPutLikes(idCard)
        .then((data) => {
          cardElement.querySelector('.card__like-btn').classList.add('card__like_active-btn');
          cardAccLike.textContent = `${data.likes.length}`
        })
        .catch((err) => {
          console.log(err);
        })
      }
    })

  // like card
  // cardElement.querySelector('.card__like-btn')
  //   .addEventListener('click', (evt) => {
  //     const like = evt.target;
  //     like.classList.toggle('card__like_active-btn');
  //   });

  // delete card
  cardElement.querySelector('.card__trash-btn')
    .addEventListener('click', (evt) => {
      getDeleteCard(idCard)
    .then(()=>{
    const delElement = evt.target.closest('.card');
    delElement.remove();
      })
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


