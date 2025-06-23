import { openModal } from "../modal";

const modalTypeImage = document.querySelector('.popup_type_image');

export function openImage(image, title) {
    modalTypeImage.querySelector('.popup__image').src = image.src;
    modalTypeImage.querySelector('.popup__caption').textContent = title.textContent;
    openModal(modalTypeImage);
}