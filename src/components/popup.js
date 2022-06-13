import {
  profileName,
  profileText,
  popupEdit,
  popupFormEditProfileFieldName,
  popupFormEditProfileFieldProfession,
  popupFormPlaceNameField,
  popupFormPlaceLinkField,
  cardsList,
  popupAdd,
  submitAvatarBtn, avatarInput, avatarImg, popupAvatar
} from "../utils/constants.js";
import { closePopup } from './modal.js';
import { loading, disabledBtn } from './utils.js';
import { createCard } from './card';
import { getEditProfile, getEditAvatar,getNewCard, getUser } from './api';

const btnAdd = document.querySelector('#submit-add');
const submitEditBtn = document.querySelector('#submit-edit');

export function submitProfileEdit (evt) {
  evt.preventDefault();
  loading(true,submitEditBtn)
  getEditProfile(popupFormEditProfileFieldName.value, popupFormEditProfileFieldProfession.value)
    .then(()=>{
    profileName.textContent = `${popupFormEditProfileFieldName.value}`;
    profileText.textContent = `${popupFormEditProfileFieldProfession.value}`;
    evt.target.reset();
    closePopup(popupEdit);
  })
    .catch((err)=>{
      console.log(err)
    })
    .finally(()=>{
      loading(false,submitEditBtn)
    })
};

// Добавляем карточки с кнопки

export function submitAddCard (evt) {
  evt.preventDefault();
  loading(true, btnAdd)
  Promise.all([getNewCard(popupFormPlaceNameField.value, popupFormPlaceLinkField.value), getUser()])
    .then(([dataCard, dataUser])=>{
      const card = createCard(dataCard.name, dataCard.link, dataCard.likes, dataCard.owner._id,dataCard._id,dataUser._id);
      cardsList.prepend(card);
    })
    .then(()=>{
      evt.target.reset();
      disabledBtn(btnAdd);
      closePopup(popupAdd);
    })
  .catch((err)=>{
      console.log(err)
    })
    .finally(()=>{
      loading(false, btnAdd)
    })
}

export function submitAvatar (evt) {
  evt.preventDefault();
  loading(true,submitAvatarBtn)
  getEditAvatar(avatarInput.value)
  .then(()=>{
      avatarImg.src=avatarInput.value
      closePopup(popupAvatar);
      disabledBtn(submitAvatarBtn);
      evt.target.reset();
    })
    .catch((err)=>{
      console.log(err)
    })
    .finally(()=>{
      loading(false,submitAvatarBtn)
    })
}

