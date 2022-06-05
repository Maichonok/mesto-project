export function openPopup(popup) {
  popup.classList.add('popup_open');
  document.addEventListener('keydown',handleEscClose);
  document.addEventListener('mousedown', handleOverlay);
};

export function closePopup(popup) {
  popup.classList.remove('popup_open');
  document.removeEventListener('keydown',handleEscClose);
  document.removeEventListener('mousedown', handleOverlay);
};

function handleEscClose (evt) {
  if (evt.key==="Escape") {
    const openedPopup = document.querySelector('.popup_open');
    openedPopup && closePopup(openedPopup);
  }
  return
}

function handleOverlay (evt) {
  if (evt.target.classList.contains('popup_open')) {
    closePopup(evt.target);
  }
  return
}
