import './pages/index.css';
import { initialCards } from './scripts/cards';
import { createCard, likeCard } from './scripts/components/card';
import { closeModal, openModal, closePopupByOverlay } from './scripts/modal';
import { openImage } from './scripts/components/openImagePopup';
import { openEditProfile, editProfile } from './scripts/components/editProfile';
import { addNewCard, newForm } from './scripts/components/addNewCard';

// Контейнер карточек на странице
const placesList = document.querySelector('.places__list');

// Модальные окна
const modalNewCard = document.querySelector('.popup_type_new-card');
const openModalNewBtn = document.querySelector('.profile__add-button');
const modalCloseBtn = document.querySelectorAll('.popup__close');

// Открытие модальных окон
openModalNewBtn.addEventListener('click', () => {
    openModal(modalNewCard);
})

// Закрытие модальынх окон
modalCloseBtn.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        closeModal(closeBtn.closest('.popup'));
    })
})

document.addEventListener('click', closePopupByOverlay)

// Создание карточек
initialCards.forEach(el => {
    placesList.append(createCard(el, likeCard, openImage));
})

// Добавление карточки
newForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    addNewCard(placesList);
    closeModal(newForm);
})

// edit profile 
const modalEditProfile = document.querySelector('.popup_type_edit');
const openModalEditBtn = document.querySelector('.profile__edit-button');
const editProfileForm = document.querySelector('.popup_type_edit');

openModalEditBtn.addEventListener('click', () => {
    openEditProfile();
    openModal(modalEditProfile);
})

editProfileForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    editProfile();
    closeModal(modalEditProfile);
})

const modalList = document.querySelectorAll('.popup');

modalList.forEach((modal) => {
    modal.classList.add('popup_is-animated');
})






