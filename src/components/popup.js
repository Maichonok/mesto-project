import {
  profileName,
  profileText,
  popupEdit,
  popupFormEditProfileFieldName,
  popupFormEditProfileFieldProfession,
  submitAvatarBtn,
  avatarInput,
  avatarImg,
  popupAvatar,
} from "../utils/constants.js";
import { closePopup } from "./modal.js";
import { loading, disabledBtn } from "./utils.js";
import { getEditProfile, getEditAvatar } from "./api";

const submitEditBtn = document.querySelector("#submit-edit");

export function submitProfileEdit(evt) {
  evt.preventDefault();
  loading(true, submitEditBtn);
  getEditProfile(
    popupFormEditProfileFieldName.value,
    popupFormEditProfileFieldProfession.value
  )
    .then(() => {
      profileName.textContent = `${popupFormEditProfileFieldName.value}`;
      profileText.textContent = `${popupFormEditProfileFieldProfession.value}`;
      evt.target.reset();
      closePopup(popupEdit);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loading(false, submitEditBtn);
    });
}

export function submitAvatar(evt) {
  evt.preventDefault();
  loading(true, submitAvatarBtn);
  getEditAvatar(avatarInput.value)
    .then(() => {
      avatarImg.src = avatarInput.value;
      closePopup(popupAvatar);
      disabledBtn(submitAvatarBtn);
      evt.target.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loading(false, submitAvatarBtn);
    });
}
