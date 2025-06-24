
export function openModal(modalWindow) {
    modalWindow.classList.add('popup_is-opened');
    document.addEventListener('keydown', addButtonClose)
}

export function closeModal(modalWindow) {
    modalWindow.classList.remove('popup_is-opened');
    removeButtonClose();
}

export function getOpenedModal() {
    return document.querySelector('.popup_is-opened');
}

// document.addEventListener('click', (evt) => {
//     if (evt.target.classList.contains('popup')) {
//         closeModal(evt.target);
//     }
// })

export const closePopupByOverlay = evt => {
    if (evt.target.classList.contains('popup')) {
        closeModal(evt.target);
    }
}

function addButtonClose(evt) {
    if (evt.key === 'Escape') {
        const modalIsOpen = getOpenedModal();
        if (modalIsOpen) {
            closeModal(modalIsOpen);
        }
    }
}

function removeButtonClose() {
    document.removeEventListener('keydown', addButtonClose);
}
