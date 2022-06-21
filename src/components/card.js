import { openPopup } from "./modal.js";
import { popupPreviewer } from "../utils/constants.js";
import { getDeleteCard, getPutLikes, getDelLike } from "./api";

// Конструктор карточек
export function createCard(
  cardName,
  cardLink,
  cardLikes,
  idOwner,
  idCard,
  myId
) {
  // обращение к template свойству content
  const popupPreviewerPicture = document.querySelector(
    "#image-preview .popup__image"
  );
  const popupPreviewerTitle = document.querySelector(
    "#image-preview .popup__title-image"
  );
  const cardElement = getTemplate();

  const cardElementPicture = cardElement.querySelector(".card__pic");
  cardElement.querySelector(".card__title").textContent = cardName;
  cardElementPicture.src = cardLink;
  cardElementPicture.alt = cardName;
  const likeButton = cardElement.querySelector(".card__like-btn");
  const cardAccLike = cardElement.querySelector(".card__like-acc");

  cardAccLike.textContent = `${cardLikes.length}`;

  if (idOwner !== myId) {
    cardElement
      .querySelector(".card__trash-btn")
      .classList.add("card__trash-btn_disabled");
  }

  if (cardLikes.some((like) => like._id === myId)) {
    likeButton.classList.add("card__like_active-btn");
  }

  likeButton.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("card__like_active-btn")) {
      getDelLike(idCard)
        .then((data) => {
          likeButton.classList.remove("card__like_active-btn");
          cardAccLike.textContent = `${data.likes.length}`;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      getPutLikes(idCard)
        .then((data) => {
          likeButton.classList.add("card__like_active-btn");
          cardAccLike.textContent = `${data.likes.length}`;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  // delete card
  cardElement
    .querySelector(".card__trash-btn")
    .addEventListener("click", (evt) => {
      getDeleteCard(idCard)
        .then(() => {
          const delElement = evt.target.closest(".card");
          delElement.remove();
        })
        .catch((err) => {
          console.log(err);
        });
    });

  // preview image
  cardElement.querySelector(".card__pic").addEventListener("click", (evt) => {
    popupPreviewerPicture.src = cardLink;
    popupPreviewerPicture.alt = cardName;
    popupPreviewerTitle.textContent = cardName;
    openPopup(popupPreviewer);
  });
  return cardElement;
}

function getTemplate() {
  const cardTemplate = document.querySelector("#card-template").content;
  return cardTemplate.querySelector(".card").cloneNode(true);
}
