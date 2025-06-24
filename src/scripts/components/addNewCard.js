import { createCard, likeCard } from "./card";
import { openImage } from "./openImagePopup";

export const newForm = document.querySelector('.popup_type_new-card');

export function addNewCard(placesList) {

    const name = newForm.querySelector('.popup__input_type_card-name');
    const link = newForm.querySelector('.popup__input_type_url');
    const newCard = {
        name: name,
        link: link,
    }
    newCard.name = name.value;
    newCard.link = link.value;
    placesList.prepend(createCard(newCard, likeCard, openImage));
    name.value = '';
    link.value = '';
    console.log(name);
}
