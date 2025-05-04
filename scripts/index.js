// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки

function createCard(data) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImg = card.querySelector('.card__image');
    const cardTitle = card.querySelector('.card__title');
    const deleteButton = card.querySelector('.card__delete-button');
    cardImg.src = data.link;
    cardImg.alt = data.name;
    cardTitle.textContent = data.name;
    deleteButton.addEventListener('click', () => deleteCard(card));
    return card;
}

// @todo: Функция удаления карточки

function deleteCard(cardElement) {
    cardElement.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach(el => {
    placesList.append(createCard(el, deleteCard));
})