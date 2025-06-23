

export function editProfile() {
    const editProfileForm = document.querySelector('.popup_type_edit');
    const editProfileName = editProfileForm.querySelector('.popup__input_type_name');
    const editProfileDescr = editProfileForm.querySelector('.popup__input_type_description');

    document.querySelector('.profile__title').textContent = editProfileName.value;
    document.querySelector('.profile__description').textContent = editProfileDescr.value;
}

export function openEditProfile() {
    const editProfileForm = document.querySelector('.popup_type_edit');
    const editProfileName = editProfileForm.querySelector('.popup__input_type_name');
    const editProfileDescr = editProfileForm.querySelector('.popup__input_type_description');
    const profileTitle = document.querySelector('.profile__title').textContent;
    const profileDescr = document.querySelector('.profile__description').textContent;

    editProfileName.value = profileTitle;
    editProfileDescr.value = profileDescr;
}

