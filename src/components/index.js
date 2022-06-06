import {
  popupFormEditProfile, profileName, profileText, popupEdit,
  popupFormPlaceNameField, popupFormPlaceLinkField, initialCards,buttonAddPlace,
  buttonPicturePopupClose,
  popupFormAddPlace,
  buttonEditProfile,
  buttonAddPopupClose,
  buttonEditPopupClose,
  popupFormEditProfileFieldName,
  popupFormEditProfileFieldProfession,
  popupAdd,
  popupPreviewer
} from "./utils/constants.js";

import {enableValidation} from "./validate.js";
import {createCard} from "./card.js";
import {openPopup, closePopup} from "./modal.js";
import "../pages/index.css";


// Сохранение изменений профиля
popupFormEditProfile.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent= popupFormEditProfileFieldName.value;
  profileText.textContent = popupFormEditProfileFieldProfession.value;

  closePopup(popupEdit);
});

popupFormAddPlace.addEventListener('submit', (evt) => {
  evt.preventDefault();
  initialRender(createCard(popupFormPlaceNameField.value, popupFormPlaceLinkField.value));
  closePopup(popupAdd);
  popupFormAddPlace.reset();
});

// Функция выведения карточки на экран
function initialRender(cardElement) {
  const cardsList = document.querySelector('.cards__list');
  cardsList.prepend(cardElement);
};

initialCards.reverse().forEach((card) => {
  initialRender(createCard(card.name, card.link));
});


buttonAddPlace.addEventListener('click', () => {
  openPopup(popupAdd);
});

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
