 // open and close popup Edit profile
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

//submit
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

//добавление массива из 6 карточек
function loadCards() {
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

  // how to get html elements
  // this will return an array
  // iterate over the array with loop
  const images = document.querySelectorAll('.card__pic');

  // this also returns array
  // iterate with for loop
  const titles = document.querySelectorAll('.card__title');


  for (let i = 0; i < initialCards.length; i++) {
     const link = initialCards[i].link; // get name and link
     const name = initialCards[i].name;
     images[i].src = link;
     titles[i].textContent = name;
  }
}

loadCards();


// Находим кнопку Добавить карточку
const addButton = document.querySelector('.profile__add-btn');
function addCard() {
  let popup = document.querySelector('#new-place-popup');
  popup.classList.add('popup_open');
}

addButton.addEventListener('click', addCard);


let formNewPlace = document.querySelector('#new-place-popup .popup__form');

formNewPlace.addEventListener('submit', function (evt) {
  evt.preventDefault();

  let titleField = document.querySelector('.popup__item[name="title"]');
  let linkField = document.querySelector('.popup__item[name="link"]');


  const card = htmlToElement(`
    <li class="card">
      <img class="card__pic" src="${linkField.value}">
      <div class="card__footer">
        <h2 class="card__title">${titleField.value}</h2>
        <button class="card__like-btn" type="button" aria-label="Добавить лайк"></button>
      </div>
    </li>
  `);

  const listElement = document.querySelector('.cards__list');


  listElement.prepend(card);

//очистить поля после создания новой карточки, после повторного открытия формы пустые поля
  titleField.value = '';
  linkField.value = '';

  closePopup();
});

//функция, которая создает html элемент из строки
function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}


// const likeButtons = document.querySelectorAll('.card__like-btn');

document.querySelectorAll('.card__like-btn')
  .forEach(likeButtons => {
    likeButtons.addEventListener('click', likeCards);
  });

  function likeCards(evt) {
    let like = evt.target;
    // like.classList.add('card__like_active-btn');
    like.classList.toggle('card__like_active-btn');
}



