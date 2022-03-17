 // open and close popup Edit profile
let editButton = document.querySelector('.profile__edit-btn');

function openPopup() {
  let popup = document.querySelector('.popup');
  popup.classList.add('popup_open');
}

editButton.addEventListener('click', openPopup);
editButton.addEventListener('click', addInformation);


let closeButton = document.querySelector('.popup__close-btn');

function closePopup() {
  let popup = document.querySelector('.popup');
  popup.classList.remove('popup_open');
}

closeButton.addEventListener('click', closePopup);


// add an information in form fields
function addInformation() {
  // получили доступ к input (находим поля формы в DOM)
  let nameField = document.querySelector('#profile__name');
  let textField = document.querySelector('#profile__text');

  // получили доступ к заголовку и тексту профиля
  let profileName = document.querySelector('.profile__name');
  let profileText = document.querySelector('.profile__text');

  // установили новое значение inputs
  nameField.value = profileName.textContent;
  textField.value = profileText.textContent;
}

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();

  let nameField = document.querySelector('#profile__name');
  let textField = document.querySelector('#profile__text');
  let profileName = document.querySelector('.profile__name');
  let profileText = document.querySelector('.profile__text');

  profileName.textContent= nameField.value;
  profileText.textContent = textField.value;

  // console.log('Форма отправлена');

  closePopup();
});


