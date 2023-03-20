const popupOpenButton = document.querySelector('.profile__editing-button');
const userInfoPopup = document.querySelector('.popup_type_user-info');
const userInfoPopupClose = userInfoPopup.querySelector('.popup__close');
const userInfoPopupForm = userInfoPopup.querySelector('.popup__form');
const userInfoPopupInputName = userInfoPopup.querySelector('.popup__form-input_add_name');
const userInfoPopupInputJob = userInfoPopup.querySelector('.popup__form-input_add_job');
const userNameValue = document.querySelector('.profile__name');
const userJobValue = document.querySelector('.profile__job-title');



function pressClick () {
    userInfoPopup.classList.add('popup_opened');
    userInfoPopupInputName.value = userNameValue.textContent;
    userInfoPopupInputJob.value = userJobValue.textContent;
}

popupOpenButton.addEventListener('click', pressClick);

function pressCloseButton () {
    userInfoPopup.classList.remove('popup_opened');
};

userInfoPopupClose.addEventListener('click', pressCloseButton);

function submitUserInfo (event) {
    event.preventDefault();
    userNameValue.textContent = userInfoPopupInputName.value;
    userJobValue.textContent = userInfoPopupInputJob.value;
    pressCloseButton();
};

userInfoPopupForm.addEventListener('submit', submitUserInfo);






