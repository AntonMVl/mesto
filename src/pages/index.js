import '../pages/index.css'
import {
    buttonPopupOpenUserInfo,
    buttonPopupOpenAddNewImage,
    userInfoPopup,
    popupAddNewImg,
    popupImageOpen,
    userInfoPopupForm,
    userInfoPopupInputName,
    userInfoPopupInputJob,
    userNameValue,
    userJobValue,
    popupAddNewImgForm,
} from '../utils/constants.js'
import initialCards from '../utils/CardsData.js';
import Card from '../components/Сard.js';
import FormValidator from '../components/FormValidator.js'
import validationConfig from '../utils/constants.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'

const popupOpenImage = new PopupWithImage (popupImageOpen);
popupOpenImage.setEventListeners();

const userInfo = new UserInfo (userNameValue, userJobValue);

const popupUserInfo = new PopupWithForm (userInfoPopup, (inputValues) => {
    userInfo.setUserInfo(inputValues)
})
popupUserInfo.setEventListeners();

const popupNewImageForm = new PopupWithForm (popupAddNewImg, (inputValues) => {
    renderCard({ name: inputValues.name, link: inputValues.link });
    popupNewImageForm.close();
    });
    popupNewImageForm.setEventListeners();

buttonPopupOpenAddNewImage.addEventListener('click', () => {
    popupNewImageForm.open()
    newImgFormValidation.disableButton();
});

buttonPopupOpenUserInfo.addEventListener('click', () => {
    popupUserInfo.open();
    userInfoPopupInputName.value = userInfo.getUserInfo().name;
    userInfoPopupInputJob.value = userInfo.getUserInfo().job;
});

const renderCardList = new Section ({items: initialCards, renderer: renderCard}, ".content__box-list");
renderCardList.renderItems()

function createCardElement (item) {
    const card = new Card(item, ".image__tamplate", () => {popupOpenImage.open(item)})
    return card.createCard();
}

function renderCard (item) {
    const cardElement = createCardElement(item);
    renderCardList.addItem(cardElement);
}

const userInfoFormValidation = new FormValidator(validationConfig, userInfoPopupForm);
const newImgFormValidation = new FormValidator(validationConfig, popupAddNewImgForm);
userInfoFormValidation.enableValidation();
newImgFormValidation.enableValidation();


