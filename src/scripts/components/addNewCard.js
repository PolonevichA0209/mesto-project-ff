import { createCard } from "../cards";
import { likeCard } from "./likeCard";
import { openImage } from "./openImagePopup";

export const newForm = document.querySelector('.popup_type_new-card');

export function addNewCard(placesList) {
    const newCard = {}
    const name = newForm.querySelector('.popup__input_type_card-name');
    const link = newForm.querySelector('.popup__input_type_url');
    newCard.name = name.value;
    newCard.link = link.value;
    placesList.prepend(createCard(newCard, likeCard, openImage));
    name.value = '';
    link.value = '';
}
