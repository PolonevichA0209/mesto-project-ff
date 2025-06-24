import { openModal } from "../modal";

const modalTypeImage = document.querySelector('.popup_type_image');

export function openImage(image, title) {
    const popupImage = modalTypeImage.querySelector('.popup__image');
    popupImage.src = image.src;
    popupImage.alt = image.alt;
    modalTypeImage.querySelector('.popup__caption').textContent = title.textContent;
    openModal(modalTypeImage);
}