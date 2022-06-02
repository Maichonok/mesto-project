import {enableValidation} from "./validate.js";
import {createCard, initialRender} from "./card.js";
import {prefillEditProfileForm, openPopup, closePopup} from "./modal.js";
import "../pages/index.css";

//1. Открытие и закрытие модальных окон и функциональность Редактировать профиль

//кнопка Редактировать профиль
const buttonEditProfile = document.querySelector('.profile__edit-btn');
// попап Редактировать профиль
const popupEdit = document.querySelector('#edit-profile-popup');
// профиль: имя и род деятельности
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
// Инпуты имени и рода деятельности
const popupFormEditProfileFieldName = document.querySelector('.popup__form-input_field-name');
const popupFormEditProfileFieldProfession = document.querySelector('.popup__form-input_field-profession');
// кнопка закрытия попапа Редактировать профиль
const buttonEditPopupClose = document.querySelector('.popup-edit__close-btn');
// попап изображения
const popupPreviewer = document.querySelector('#image-preview');

popupFormEditProfileFieldName.value = profileName.textContent;
popupFormEditProfileFieldProfession.value = profileText.textContent;

// Форма профиля
const popupFormEditProfile = document.querySelector('.popup__form_edit-profile');
// Сохранение изменений профиля
popupFormEditProfile.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent= popupFormEditProfileFieldName.value;
  profileText.textContent = popupFormEditProfileFieldProfession.value;

  closePopup(popupEdit);
});



// create new place
const popupFormAddPlace = document.querySelector('.popup__form_add-place');

// Инпуты для названия карточки и ссылки на изображение
const popupFormPlaceNameField = document.querySelector('.popup__form-input_place-name');
const popupFormPlaceLinkField = document.querySelector('.popup__form-input_place-link');
popupFormAddPlace.addEventListener('submit', (evt) => {
  evt.preventDefault();
  initialRender(createCard(popupFormPlaceNameField.value, popupFormPlaceLinkField.value));
  closePopup(popupAdd);
  popupFormPlaceNameField.value = "";
  popupFormPlaceLinkField.value = "";
});

enableValidation({
  formSelector: ".popup__form_edit-profile",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__save-btn",
  inactiveButtonClass: "popup__save-btn_disabled",
  inputErrorClass: "popup__form-input_error",
  errorClass: "popup__error-message"
});

enableValidation({
  formSelector: ".popup__form_add-place",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__create-btn",
  inactiveButtonClass: "popup__create-btn_disabled",
  inputErrorClass: "popup__form-input_error",
  errorClass: "popup__error-message"
});

//2. Работа с карточками

// Инициализация карточек из массива
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.reverse().forEach((card) => {
  initialRender(createCard(card.name, card.link));
});

// Находим кнопку Добавить карточку
const buttonAddPlace = document.querySelector('.profile__add-btn');
const popupAdd = document.querySelector('#new-place-popup');

const buttonAddPopupClose = document.querySelector('.popup-add__close-btn');
buttonAddPlace.addEventListener('click', () => {
  openPopup(popupAdd);
});


//открыть попап edit
buttonEditProfile.addEventListener('click', () => {
  prefillEditProfileForm(popupEdit);
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
const buttonPicturePopupClose = document.querySelector('.popup-pic__close-btn');
buttonPicturePopupClose.addEventListener('click', () => {
  closePopup(popupPreviewer);
});


// Закрытие попапа кликом на оверлей
window.addEventListener('click', (evt) => {
  const openedPopup = document.querySelector('.popup_open');
  if (evt.target.classList.contains('popup_open')) {
    closePopup(openedPopup);
  }
});

//Закрытие попапа нажатием на Esc
window.addEventListener('keydown', (evt) => {
  const openedPopup = document.querySelector('.popup_open');
  if (evt.key === 'Escape') {
    closePopup(openedPopup);
  }
});
