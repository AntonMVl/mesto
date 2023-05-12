import initialCards from './CardsData.js';
import Card from './Сard.js';
import FormValidator from './FormValidator.js'
import validationConfig from './constants.js'

const popups = Array.from(document.querySelectorAll('.popup'));
const buttonPopupOpenUserInfo = document.querySelector('.profile__editing-button');
const buttonPopupOpenAddNewImage = document.querySelector('.profile__content-button');
const userInfoPopup = document.querySelector('.popup_type_user-info');
const popupAddNewImg = document.querySelector('.popup_type_add-img');
const popupImageOpen = document.querySelector('.popup_type_open-img');
const imageTemplate = document.querySelector('.image__tamplate').content;
const cardGrid = document.querySelector('.content__box-list');
const userInfoPopupForm = userInfoPopup.querySelector('.popup__form');
const userInfoPopupInputName = userInfoPopup.querySelector('.popup__form-input_add_name');
const userInfoPopupInputJob = userInfoPopup.querySelector('.popup__form-input_add_job');
const userNameValue = document.querySelector('.profile__name');
const userJobValue = document.querySelector('.profile__job-title');
const popupAddNewImgForm = popupAddNewImg.querySelector('.popup__form');
const popupAddNewImgTitle = popupAddNewImg.querySelector('.popup__form-input_card_name');
const popupAddNewImgUrl = popupAddNewImg.querySelector('.popup__form-input_card_url');
const popupImageOpenPicture = popupImageOpen.querySelector(".popup__image");
const popupImageOpenTitle = popupImageOpen.querySelector(".popup__image-title");
const buttonSubmitAddNewImg = popupAddNewImg.querySelector('.popup__input-button');

const openPopup = (popup) => {
    popup.classList.add('popup_opened');
    document.addEventListener("keydown", closePopupPressEsc);
}
const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener("keydown", closePopupPressEsc);
}

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
            closePopup(popup)
        }
    })
})

function openProfilePopup () {
    openPopup(userInfoPopup);
    userInfoPopupInputName.value = userNameValue.textContent;
    userInfoPopupInputJob.value = userJobValue.textContent;
}

function submitUserInfo (event) {
    event.preventDefault();
    userNameValue.textContent = userInfoPopupInputName.value;
    userJobValue.textContent = userInfoPopupInputJob.value;
    closePopup(userInfoPopup);
};

const closePopupPressEsc = function (event) {
    if (event.key === 'Escape') {
        const selectedPopup = document.querySelector(".popup_opened");
        closePopup(selectedPopup);
    }
};

function renderCardElement (item, cardGrid) {
    const card = new Card(item, imageTemplate, openImagePopup)
    const cardElement = card.createCard();
    cardGrid.prepend(cardElement);
}

function getItemFromArray (array, cardGrid) {
    array.forEach((item) => {
        renderCardElement(item, cardGrid);
    });
}

getItemFromArray (initialCards, cardGrid)

const editNewCardSubmit = (event) => {
    event.preventDefault();
    const newCardData = {
        name: popupAddNewImgTitle.value,
        link: popupAddNewImgUrl.value,
    };
    renderCardElement(newCardData, cardGrid);
    closePopup(popupAddNewImg);
    popupAddNewImgForm.reset();
}

function openImagePopup (item) {
    popupImageOpenPicture.src = item.link;
    popupImageOpenPicture.alt = item.name;
    popupImageOpenTitle.textContent = item.name;
    openPopup(popupImageOpen);
}

const userInfoFormValidation = new FormValidator(validationConfig, userInfoPopupForm);
const newImgFormValidation = new FormValidator(validationConfig, popupAddNewImgForm);
userInfoFormValidation.enableValidation();
newImgFormValidation.enableValidation();

buttonPopupOpenUserInfo.addEventListener('click', openProfilePopup);
userInfoPopupForm.addEventListener('submit', submitUserInfo);
buttonPopupOpenAddNewImage.addEventListener('click',  () => {
    openPopup(popupAddNewImg);
    newImgFormValidation.disableButton();
    buttonSubmitAddNewImg.classList.add('popup__input-button_disabled');
});
popupAddNewImgForm.addEventListener('submit', editNewCardSubmit);










