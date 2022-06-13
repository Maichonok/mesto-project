import {
  popupFormEditProfile, profileName, profileText, popupEdit,
  popupFormPlaceNameField, popupFormPlaceLinkField, initialCards,buttonAddPlace,
  buttonPicturePopupClose,
  popupFormAddPlace,
  buttonEditProfile,
  buttonAddPopupClose,
  buttonEditPopupClose,
  popupAdd,
  popupPreviewer,
  avatarImg,
  popupAvatar,
  avatarBtn,
  closeAvatarBtn,
  popupFormAvatar,
  cardsList
} from "../utils/constants.js";

import {enableValidation} from "./validate.js";
import {createCard} from "./card.js";
import {openPopup, closePopup} from "./modal.js";
import {submitProfileEdit, submitAddCard, submitAvatar} from './popup';
import {getInitialCards, getUser} from './api'
import "../pages/index.css";

avatarBtn.addEventListener('click', ()=>{
  openPopup(popupAvatar);
})

closeAvatarBtn.addEventListener('click', ()=>{
  closePopup(popupAvatar);
})

popupFormAvatar.addEventListener('submit', submitAvatar);

// Сохранение изменений профиля
// popupFormEditProfile.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   profileName.textContent= popupFormEditProfileFieldName.value;
//   profileText.textContent = popupFormEditProfileFieldProfession.value;

//   closePopup(popupEdit);
// });



popupFormEditProfile.addEventListener('submit', submitProfileEdit);
buttonPicturePopupClose.addEventListener('click', () => {
  closePopup(imagePopup);
});
buttonAddPlace.addEventListener('click', () => {
  openPopup(popupAdd);
});

buttonAddPopupClose.addEventListener('click', () => {
  closePopup(popupAdd);
})

popupFormAddPlace.addEventListener('submit', submitAddCard);
popupFormAvatar.addEventListener('submit', submitAvatar);

// popupFormAddPlace.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   initialRender(createCard(popupFormPlaceNameField.value, popupFormPlaceLinkField.value));
//   closePopup(popupAdd);
//   popupFormAddPlace.reset();
// });

// Функция выведения карточки на экран
// function initialRender(cardElement) {
//   // const cardsList = document.querySelector('.cards__list');
//   cardsList.prepend(cardElement);
// };

// initialCards.reverse().forEach((card) => {
//   initialRender(createCard(card.name, card.link));
// });




//закрыть попап edit
buttonEditPopupClose.addEventListener('click', () => {
  closePopup(popupEdit);
});

// Кнопка закрытия попапа add
buttonAddPopupClose.addEventListener('click', () => {
  closePopup(popupAdd);
});

// Кнопка закрытия попапа viewer

buttonPicturePopupClose.addEventListener('click', () => {
  closePopup(popupPreviewer);
});


buttonEditProfile.addEventListener('click', () => openPopup(popupEdit));

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup-btn",
  inactiveButtonClass: "popup-btn_disabled",
  inputErrorClass: "popup__form-input_error",
  errorWrapperSelector: ".popup__error-message"
});

Promise.all([getUser(),getInitialCards()])
  .then(([dataUser, dataCard])=>{
    profileName.textContent=dataUser.name;
    profileText.textContent=dataUser.about;
    avatarImg.src=dataUser.avatar;
    dataCard.forEach((card)=>{
      const cards = createCard(card.name, card.link, card.likes, card.owner._id, card._id, dataUser._id);
      cardsList.append(cards)
    })
  })
  .catch((err)=>{console.log(err)});
