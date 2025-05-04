// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки

function createCard(data, delCard) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    card.querySelector('.card__image').src = data.link;
    card.querySelector('.card__title').textContent = data.name;
    card.querySelector('.card__delete-button').addEventListener('click', delCard);
    return card;
};

// @todo: Функция удаления карточки

function delCard(evt) {
    const delTarget = evt.target.closest('.card');
    delTarget.remove();
}

// @todo: Вывести карточки на страницу

function render(data) {
    data.map(el => {
        placesList.append(createCard(el, delCard))
    })
}

render(initialCards);