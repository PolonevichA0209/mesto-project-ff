const modalList = document.querySelectorAll('.popup');

modalList.forEach((modal) => {
    modal.classList.add('popup_is-animated');
})

export function openModal(modalWindow) {
    modalWindow.classList.add('popup_is-opened');
}

export function closeModal(modalWindow) {
    modalWindow.classList.remove('popup_is-opened');
}

export function checkModalIsOpen() {
    return document.querySelector('.popup_is-opened');
}

