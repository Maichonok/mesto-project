let editButton = document.querySelector('.profile__edit-btn');

function openPopup() {
  let popup = document.querySelector('.popup');
  popup.classList.add('popup_open');
}

editButton.addEventListener('click', openPopup);

let closeButton = document.querySelector('.popup__close-btn');

function closePopup() {
  let popup = document.querySelector('.popup');
  popup.classList.remove('popup_open');
}

closeButton.addEventListener('click', closePopup);
