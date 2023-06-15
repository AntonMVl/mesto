const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__input-button',
    inactiveButtonClass: 'popup__input-button_disabled',
    inputErrorClass: 'popup__form-input_type_error',
    errorClass: 'popup__error_visible'
};

export const popups = Array.from(document.querySelectorAll('.popup'));
export const buttonPopupOpenUserInfo = document.querySelector('.profile__editing-button');
export const buttonPopupOpenAddNewImage = document.querySelector('.profile__content-button');
export const userInfoPopup = document.querySelector('.popup_type_user-info');
export const popupAddNewImg = document.querySelector('.popup_type_add-img');
export const popupImageOpen = document.querySelector('.popup_type_open-img');
export const imageTemplate = document.querySelector('.image__tamplate').content;
export const cardGrid = document.querySelector('.content__box-list');
export const userInfoPopupForm = userInfoPopup.querySelector('.popup__form');
export const userInfoPopupInputName = userInfoPopup.querySelector('.popup__form-input_add_name');
export const userInfoPopupInputJob = userInfoPopup.querySelector('.popup__form-input_add_job');
export const userNameValue = document.querySelector('.profile__name');
export const userJobValue = document.querySelector('.profile__job-title');
export const popupAddNewImgForm = popupAddNewImg.querySelector('.popup__form');
export const popupAddNewImgTitle = popupAddNewImg.querySelector('.popup__form-input_card_name');
export const popupAddNewImgUrl = popupAddNewImg.querySelector('.popup__form-input_card_url');
export const popupImageOpenPicture = popupImageOpen.querySelector(".popup__image");
export const popupImageOpenTitle = popupImageOpen.querySelector(".popup__image-title");
export const buttonSubmitAddNewImg = popupAddNewImg.querySelector('.popup__input-button');
export const avatarImage = document.querySelector('.profile__image');
export const avatarImageButton = document.querySelector('.profile__image-button');
export const popupChangeAvatar = document.querySelector('.popup_type_change-avatar');
export const inputChangeAvatar = popupChangeAvatar.querySelector('.popup__form-input_avatar-name');
export const popupChangeAvatarForm = popupChangeAvatar.querySelector('.popup__form');
export const popupDeleteConfirmation = document.querySelector('.popup_type_delete-confirmed')

export default validationConfig;