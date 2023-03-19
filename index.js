const popupOpenButton = document.querySelector('.profile__editing-button-link');
const userInfoPopup = document.querySelector('.popup_type_user-info');
const userInfoPopupClose = userInfoPopup.querySelector('.popup__close');
const userInfoPopupForm = userInfoPopup.querySelector('.popup__form');
const userInfoPopupInputName = userInfoPopup.querySelector('.popup__input-name');
const userInfoPopupInputJob = userInfoPopup.querySelector('.popup__input-job');
const userInfoPopupSubmit = userInfoPopup.querySelector('.popup__input-button');
const userNameValue = document.querySelector('.profile__name');
const userJobValue = document.querySelector('.profile__job-title');



function pressClick () {
    userInfoPopup.classList.add('popup_open');
    userInfoPopupInputName.value = userNameValue.textContent;
    userInfoPopupInputJob.value = userJobValue.textContent;
}

popupOpenButton.addEventListener('click', pressClick);

function pressCloseButton () {
    userInfoPopup.classList.remove('popup_open');
};

userInfoPopupClose.addEventListener('click', pressCloseButton);

function submitUserInfo (event) {
    event.preventDefault();
    const inputName = userInfoPopupInputName.value;
    userNameValue.textContent = inputName;
    const inputJob = userInfoPopupInputJob.value;
    userJobValue.textContent = inputJob;
    userInfoPopup.classList.remove('popup_open');
};

userInfoPopupForm.addEventListener('submit', submitUserInfo);






