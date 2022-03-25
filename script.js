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
const popupPreviewerPicture = document.querySelector('#image-preview .popup__image');
const popupPreviewerTitle = document.querySelector('#image-preview .popup__title-image');

function prefillEditProfileForm(popup) {
  // установляем новое значение inputs
  popupFormEditProfileFieldName.value = profileName.textContent;
  popupFormEditProfileFieldProfession.value = profileText.textContent;
  openPopup(popup);
};

function openPopup(popup) {
  popup.classList.add('popup_open');
};

function closePopup(popup) {
  popup.classList.remove('popup_open');
};


//открыть попап edit
buttonEditProfile.addEventListener('click', () => {
  prefillEditProfileForm(popupEdit);
});

//закрыть попап edit
buttonEditPopupClose.addEventListener('click', () => {
  closePopup(popupEdit);
});


// Форма профиля
const popupFormEditProfile = document.querySelector('.popup__form_edit-profile');
// Сохранение изменений профиля
popupFormEditProfile.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent= popupFormEditProfileFieldName.value;
  profileText.textContent = popupFormEditProfileFieldProfession.value;

  closePopup(popupEdit);
});

//2. Работа с карточками

const cardsList = document.querySelector('.cards__list');

// обращение к template свойству content
const cardTemplate = document.querySelector('#card-template').content;

// Конструктор карточек
function createCard(cardName, cardLink) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
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

// Функция выведения карточки на экран
function initialRender(cardElement) {
  cardsList.prepend(cardElement);
};

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


// Кнопка закрытия попапа add
buttonAddPopupClose.addEventListener('click', () => {
  closePopup(popupAdd);
});

// Кнопка закрытия попапа viewer
const buttonPicturePopupClose = document.querySelector('.popup-pic__close-btn');
buttonPicturePopupClose.addEventListener('click', () => {
  closePopup(popupPreviewer);
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


