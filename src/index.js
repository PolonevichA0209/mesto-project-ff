import './pages/index.css';
import { createCard, initialCards } from './scripts/cards';
import { closeModal, openModal } from './scripts/modal';
import { openImage } from './scripts/components/openImagePopup';
import { openEditProfile, editProfile } from './scripts/components/editProfile';
import { addNewCard, newForm } from './scripts/components/addNewCard';
import { likeCard } from './scripts/components/likeCard';


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






