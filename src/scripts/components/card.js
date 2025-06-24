const cardTemplate = document.querySelector('#card-template').content;

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

// @todo: Функция лайка карточки

export function likeCard(likeBtn) {
    likeBtn.classList.toggle('card__like-button_is-active');
}
