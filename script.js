 //1. Работа модальных окон (open and close popup Edit profile)
const editButton = document.querySelector('.profile__edit-btn');

function openPopup() {
  let popup = document.querySelector('#edit-profile-popup');
  popup.classList.add('popup_open');
}
//одна и та же кнопка имеет 2 обработчика
//открыть попап
editButton.addEventListener('click', openPopup);
//заполнить форму начальными значениями из полей профиля
editButton.addEventListener('click', prefillEditProfileForm);

//выбрать все closebutton и привязать логику закрытия попапов
document.querySelectorAll('.popup__close-btn')
  .forEach(closeButton => {
    closeButton.addEventListener('click', closePopup);
  });

function closePopup() {
  let popup = document.querySelector('.popup_open');
  popup.classList.remove('popup_open');
}

// add an information in form fields
function prefillEditProfileForm() {
  // получаем доступ к input (находим поля формы в DOM)
  let nameField = document.querySelector('.popup__item[name="name"]');
  let textField = document.querySelector('.popup__item[name="profession"]');

  // получаем доступ к заголовку и тексту профиля
  let profileName = document.querySelector('.profile__name');
  let profileText = document.querySelector('.profile__text');

  // установляем новое значение inputs
  nameField.value = profileName.textContent;
  textField.value = profileText.textContent;
}

// Находим форму в DOM
let formElement = document.querySelector('#edit-profile-popup .popup__form');

//submit edit profile form
formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();

  let nameField = document.querySelector('.popup__item[name="name"]');
  let textField = document.querySelector('.popup__item[name="profession"]');
  let profileName = document.querySelector('.profile__name');
  let profileText = document.querySelector('.profile__text');

  profileName.textContent= nameField.value;
  profileText.textContent = textField.value;

  closePopup();
});

//2. Шесть карточек «из коробки»

const cardsList = document.querySelector('.cards__list');

// обращение к template свойству content
const cardTemplate = document.querySelector('#card-template').content;

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


// Находим кнопку Добавить карточку
const addButton = document.querySelector('.profile__add-btn');
function addCard() {
  let popup = document.querySelector('#new-place-popup');
  popup.classList.add('popup_open');
}

addButton.addEventListener('click', addCard);


// create new place
let formNewPlace = document.querySelector('#new-place-popup .popup__form');

formNewPlace.addEventListener('submit', function (evt) {
  evt.preventDefault();

  let titleField = document.querySelector('.popup__item[name="title"]');
  let linkField = document.querySelector('.popup__item[name="link"]');

  //добавление элемента на страницу относительно других DOM-элементов -  в начало
  const card = createCard(titleField.value, linkField.value);
  cardsList.prepend(card);
  addHandlers(document.querySelector('.card'));

  //очистить поля после создания новой карточки, после повторного открытия формы пустые поля
  titleField.value = '';
  linkField.value = '';

  closePopup();
});

function addHandlers(element) {
  // like card
  element.querySelector('.card__like-btn')
    .addEventListener('click', (evt) => {
      let like = evt.target;
      like.classList.toggle('card__like_active-btn');
    });

  // delete card
  element.querySelector('.card__trash-btn')
    .addEventListener('click', (evt) => {
      let deleteButton = evt.target;
      let card = deleteButton.closest('.card');

      card.remove();
    });

  // preview image
  element.querySelector('.card__pic')
    .addEventListener('click', (evt) => {
      let popupImage = document.querySelector('#image-preview .popup__image');
      let popupTitle = document.querySelector('#image-preview .popup__title-image');

      let cardImage= evt.target;
      let cardTitle = cardImage.nextElementSibling.querySelector('.card__title');

      popupImage.src = cardImage.src;
      popupTitle.textContent = cardTitle.textContent;

      document.querySelector('#image-preview').classList.add('popup_open');
    });
}


function initialRender() {
  initialCards.forEach(function (card) {
    cardsList.append(createCard(card.name, card.link));
  });

  document.querySelectorAll('.card')
    .forEach(element => addHandlers(element));
}

function createCard(name, link) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__pic').src = link;
  return cardElement;
}

initialRender();
