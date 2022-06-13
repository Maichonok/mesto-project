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

const cardsList = document.querySelector('.cards__list');
// Форма профиля
const popupFormEditProfile = document.querySelector('.popup__form_edit-profile');

// create new place
const popupFormAddPlace = document.querySelector('.popup__form_add-place');

// Инпуты для названия карточки и ссылки на изображение
const popupFormPlaceNameField = document.querySelector('.popup__form-input_place-name');
const popupFormPlaceLinkField = document.querySelector('.popup__form-input_place-link');

// Находим кнопку Добавить карточку
const buttonAddPlace = document.querySelector('.profile__add-btn');
const popupAdd = document.querySelector('#new-place-popup');

const buttonAddPopupClose = document.querySelector('.popup-add__close-btn');
const buttonPicturePopupClose = document.querySelector('.popup-pic__close-btn');

const popupAvatar = document.querySelector('#add-avatar');
const avatarBtn = document.querySelector('.profile__avatar-btn');
const closeAvatarBtn = popupAvatar.querySelector('.popup-avatar__close-btn');
const submitAvatarBtn = popupAvatar.querySelector('.popup-submit-avatar');
const avatarInput = popupAvatar.querySelector('.popup__form-input_avatar-link');
const avatarImg = document.querySelector('.profile__avatar');
const popupFormAvatar = popupAvatar.querySelector('.popup__form-avatar');


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

export {
  buttonEditProfile,
  popupEdit,
  profileName,
  profileText,
  popupFormEditProfileFieldName,
  popupFormEditProfileFieldProfession,
  buttonEditPopupClose,
  popupPreviewer,
  popupFormEditProfile,
  popupFormAddPlace,
  popupFormPlaceNameField,
  popupFormPlaceLinkField,
  buttonAddPlace,
  popupAdd,
  buttonAddPopupClose,
  buttonPicturePopupClose,
  initialCards,
  avatarBtn,
  closeAvatarBtn,
  submitAvatarBtn,
  avatarInput,
  avatarImg,
  popupFormAvatar,
  cardsList,
  popupAvatar
}
