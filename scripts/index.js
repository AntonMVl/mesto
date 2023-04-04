const popupOpenUserInfo = document.querySelector('.profile__editing-button');
const popupOpenAddNewImage = document.querySelector('.profile__content-button');

const userInfoPopup = document.querySelector('.popup_type_user-info');
const addNewImg = document.querySelector('.popup_type_add-img');

const userInfoPopupClose = userInfoPopup.querySelector('.popup__close');
const addNewImgPopupClose = addNewImg.querySelector('.popup__close');

const imageTemplate = document.querySelector('.image__tamplate');
const cardGrid = document.querySelector('.content__box-list');

const userInfoPopupForm = userInfoPopup.querySelector('.popup__form');
const userInfoPopupInputName = userInfoPopup.querySelector('.popup__form-input_add_name');
const userInfoPopupInputJob = userInfoPopup.querySelector('.popup__form-input_add_job');
const userNameValue = document.querySelector('.profile__name');
const userJobValue = document.querySelector('.profile__job-title');
const addNewImgPopupForm = addNewImg.querySelector('.popup__form');
const addNewImgPopupTitle = addNewImg.querySelector('.popup__form-input_card_name');
const addNewImgPopupUrl = addNewImg.querySelector('.popup__form-input_card_url');

const openPopup = (popup) => {
    popup.classList.add('popup_opened');
}
const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
}

function pressClick () {
    openPopup(userInfoPopup);
    userInfoPopupInputName.value = userNameValue.textContent;
    userInfoPopupInputJob.value = userJobValue.textContent;
}

popupOpenUserInfo.addEventListener('click', pressClick);
userInfoPopupClose.addEventListener('click', () => closePopup(userInfoPopup));

function submitUserInfo (event) {
    event.preventDefault();
    userNameValue.textContent = userInfoPopupInputName.value;
    userJobValue.textContent = userInfoPopupInputJob.value;
    closePopup(userInfoPopup);
};

userInfoPopupForm.addEventListener('submit', submitUserInfo);

/* */

popupOpenAddNewImage.addEventListener('click',  () => openPopup(addNewImg));
addNewImgPopupClose.addEventListener('click', () => closePopup(addNewImg));

const initialCards = [
    {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


const createCardElement = (cardData) => {
    const cardElement = imageTemplate.content.querySelector('.content__box').cloneNode(true);
    const cardTitle = cardElement.querySelector('.content__title');
    const cardImage = cardElement.querySelector('.content__image');
    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;

    const likeButton = cardElement.querySelector('.content__like-img');
    const deleteButton = cardElement.querySelector('.content__delete-button-icon');

    const addLikeButton = () => {
        likeButton.classList.toggle('contaent__like-img_type_active');
    };

    const addDeleteButton = () => {
        cardElement.remove();
    }

    likeButton.addEventListener('click', addLikeButton);

    deleteButton.addEventListener('click', addDeleteButton);

    return cardElement
}

const renderCardElement = (cardElement) => {
    cardGrid.prepend(cardElement);
}

initialCards.forEach((cards) => {
    renderCardElement(createCardElement(cards));
});

const editNewCardSubmit = (event) => {
    event.preventDefault();
    const newCardData = {
        name: addNewImgPopupTitle.value,
        link: addNewImgPopupUrl.value,
    };
    renderCardElement(createCardElement(newCardData));
    closePopup(addNewImg);
}

addNewImgPopupForm.addEventListener('submit', editNewCardSubmit);






