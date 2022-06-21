import {
  popupFormEditProfile,
  profileName,
  profileText,
  popupEdit,
  popupFormPlaceNameField,
  popupFormPlaceLinkField,
  buttonAddPlace,
  buttonPicturePopupClose,
  popupFormAddPlace,
  buttonEditProfile,
  buttonAddPopupClose,
  buttonEditPopupClose,
  popupAdd,
  popupPreviewer,
  avatarImg,
  popupAvatar,
  avatarBtn,
  closeAvatarBtn,
  popupFormAvatar,
  cardsList,
} from "../utils/constants.js";

import { enableValidation } from "./validate.js";
import { createCard } from "./card.js";
import { openPopup, closePopup, openEditPopup } from "./modal.js";
import { submitProfileEdit, submitAvatar } from "./popup";
import { getInitialCards, getUser, getNewCard } from "./api";
import { loading, disabledBtn } from "./utils.js";
import "../pages/index.css";

let user = null;

avatarBtn.addEventListener("click", () => {
  openPopup(popupAvatar);
});

closeAvatarBtn.addEventListener("click", () => {
  closePopup(popupAvatar);
});

popupFormAvatar.addEventListener("submit", submitAvatar);

popupFormEditProfile.addEventListener("submit", submitProfileEdit);
buttonPicturePopupClose.addEventListener("click", () => {
  closePopup(popupPreviewer);
});
buttonAddPlace.addEventListener("click", () => {
  openPopup(popupAdd);
});

popupFormAddPlace.addEventListener("submit", submitAddCard);
popupFormAvatar.addEventListener("submit", submitAvatar);

// Открытие и закрытие попапа edit
buttonEditProfile.addEventListener("click", () => {
  openEditPopup(popupEdit);
});
buttonEditPopupClose.addEventListener("click", () => {
  closePopup(popupEdit);
});

// Кнопка закрытия попапа add
buttonAddPopupClose.addEventListener("click", () => {
  closePopup(popupAdd);
});

// Кнопка закрытия попапа viewer

buttonPicturePopupClose.addEventListener("click", () => {
  closePopup(popupPreviewer);
});

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup-btn",
  inactiveButtonClass: "popup-btn_disabled",
  inputErrorClass: "popup__form-input_error",
  errorWrapperSelector: ".popup__error-message",
});

const btnAdd = document.querySelector("#submit-add");
// Добавляем карточки с кнопки
function submitAddCard(evt) {
  evt.preventDefault();
  loading(true, btnAdd);
  getNewCard(popupFormPlaceNameField.value, popupFormPlaceLinkField.value)
    .then((dataCards) => {
      const card = createCard(
        dataCards.name,
        dataCards.link,
        dataCards.likes,
        dataCards.owner._id,
        dataCards._id,
        user._id
      );
      cardsList.prepend(card);
    })
    .then(() => {
      evt.target.reset();
      disabledBtn(btnAdd);
      closePopup(popupAdd);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loading(false, btnAdd);
    });
}

Promise.all([getUser(), getInitialCards()])
  .then(([dataUser, dataCards]) => {
    user = dataUser;
    profileName.textContent = user.name;
    profileText.textContent = user.about;
    avatarImg.src = user.avatar;
    dataCards.forEach((card) => {
      const cards = createCard(
        card.name,
        card.link,
        card.likes,
        card.owner._id,
        card._id,
        user._id
      );
      cardsList.append(cards);
    });
  })
  .catch((err) => {
    console.log(err);
  });