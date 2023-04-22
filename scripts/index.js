const popups = Array.from(document.querySelectorAll('.popup'));
const buttonPopupOpenUserInfo = document.querySelector('.profile__editing-button');
const buttonPopupOpenAddNewImage = document.querySelector('.profile__content-button');
const userInfoPopup = document.querySelector('.popup_type_user-info');
const popupAddNewImg = document.querySelector('.popup_type_add-img');
const popupImageOpen = document.querySelector('.popup_type_open-img');
const imageTemplate = document.querySelector('.image__tamplate');
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
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
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

const createCardElement = (cardData) => {
    const cardElement = imageTemplate.content.querySelector('.content__box').cloneNode(true);
    const cardTitle = cardElement.querySelector('.content__title');
    const cardImage = cardElement.querySelector('.content__image');
    const likeButton = cardElement.querySelector('.content__like-img');
    const deleteButton = cardElement.querySelector('.content__delete-button-icon');
    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    const addLikeButton = () => {
        likeButton.classList.toggle('contaent__like-img_type_active');
    };
    const addDeleteButton = () => {
        cardElement.remove();
    }
    likeButton.addEventListener('click', addLikeButton);
    deleteButton.addEventListener('click', addDeleteButton);
    cardImage.addEventListener('click', () => openImagePopup(cardData));

    return cardElement
}

function renderCardElement (cardElement) {
    cardGrid.prepend(cardElement);
}

initialCards.forEach((cards) => {
    renderCardElement(createCardElement(cards));
});

const editNewCardSubmit = (event) => {
    event.preventDefault();
    const newCardData = {
        name: popupAddNewImgTitle.value,
        link: popupAddNewImgUrl.value,
    };
    renderCardElement(createCardElement(newCardData));
    closePopup(popupAddNewImg);
    popupAddNewImgForm.reset();
}

function openImagePopup (cardData) {
    popupImageOpenPicture.src = cardData.link;
    popupImageOpenPicture.alt = cardData.name;
    popupImageOpenTitle.textContent = cardData.name;
    openPopup(popupImageOpen);
}

function addDisabledSubmitButtonAddNewImgPopup (popup) {
}

buttonPopupOpenUserInfo.addEventListener('click', openProfilePopup);
userInfoPopupForm.addEventListener('submit', submitUserInfo);
buttonPopupOpenAddNewImage.addEventListener('click',  () => {
    openPopup(popupAddNewImg);
    buttonSubmitAddNewImg.setAttribute('disabled', ''); 
    buttonSubmitAddNewImg.classList.add('popup__input-button_disabled');
});
popupAddNewImgForm.addEventListener('submit', editNewCardSubmit);


//Старый код, уменьшил после ревью.
// const userInfoPopupCloseButton = userInfoPopup.querySelector('.popup__close');
// const popupAddNewImgCloseButton = popupAddNewImg.querySelector('.popup__close');
// const popupOpenImageCloseButton = popupImageOpen.querySelector('.popup__close');
// const closePopupClickOverlay = function (event) {
//     if (event.target !== event.currentTarget) {
//     return;
//     }
//     closePopup(event.target);
// };
// popupAddNewImgCloseButton.addEventListener('click', () => closePopup(popupAddNewImg));
// popupOpenImageCloseButton.addEventListener('click', () => closePopup(popupImageOpen));
// userInfoPopup.addEventListener("click", closePopupClickOverlay);
// popupAddNewImg.addEventListener("click", closePopupClickOverlay);
// popupImageOpen.addEventListener("click", closePopupClickOverlay);
// userInfoPopupCloseButton.addEventListener('click', () => closePopup(userInfoPopup));





