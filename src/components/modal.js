export function prefillEditProfileForm(popup) {
  openPopup(popup);
};

export function openPopup(popup) {
  popup.classList.add('popup_open');
};

export function closePopup(popup) {
  popup.classList.remove('popup_open');
};
