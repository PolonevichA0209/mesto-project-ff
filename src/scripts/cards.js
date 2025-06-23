const cardTemplate = document.querySelector('#card-template').content;


export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  }
];


// @todo: Функция создания карточки

export function createCard(data, likeCard, openImage) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImg = card.querySelector('.card__image');
  const cardTitle = card.querySelector('.card__title');
  const deleteButton = card.querySelector('.card__delete-button');
  const cardLikeBtn = card.querySelector('.card__like-button');
  cardImg.src = data.link;
  cardImg.alt = data.name;
  cardTitle.textContent = data.name;
  deleteButton.addEventListener('click', () => deleteCard(card));
  cardLikeBtn.addEventListener('click', () => {
    likeCard(cardLikeBtn)
  })
  cardImg.addEventListener('click', () => {
    openImage(cardImg, cardTitle);
  })
  return card;
}

// @todo: Функция удаления карточки

export function deleteCard(cardElement) {
  cardElement.remove();
}


