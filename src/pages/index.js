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
    avatarImage,
    popupChangeAvatar,
    inputChangeAvatar,
    popupChangeAvatarForm,
    popupDeleteConfirmation,
    avatarImageButton,
} from '../utils/constants.js'
import Card from '../components/Сard.js';
import FormValidator from '../components/FormValidator.js'
import validationConfig from '../utils/constants.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'
import PopupWithConfirmation from '../components/PopupWithConfirmation.js'

const api = new Api({
    url:'https://mesto.nomoreparties.co/v1/cohort-68',
    headers: {
        authorization: 'b7287a4d-f4a8-45dd-a78c-ae9beeed02d9',
        'Content-Type': 'application/json'
    }
});

const userInfo = new UserInfo ({ nameSelector:userNameValue, jobSelector:userJobValue, avatarSelector:avatarImage });

const renderCardList = new Section ({renderer: renderCard}, ".content__box-list");

Promise.all([api.getUser(), api.getCards()])
    .then(([userRes, cardsRes]) => {
        const userId = userRes._id;
        const items = cardsRes.reverse();
        renderCardList.renderItems(items, userId);
        userInfo.setUserInfo({
            name: userRes.name,
            about: userRes.about,
            avatar: userRes.avatar,
            userId: userId,
        });
    })
    .catch((error) =>
        console.error(`Ошибка при загрузке данных с сервера - ${error}`)
    );

const userInfoFormValidation = new FormValidator(validationConfig, userInfoPopupForm);
const newImgFormValidation = new FormValidator(validationConfig, popupAddNewImgForm);
const avatarFormValidation = new FormValidator(validationConfig, popupChangeAvatarForm);
avatarFormValidation.enableValidation();
userInfoFormValidation.enableValidation();
newImgFormValidation.enableValidation();

const popupOpenImage = new PopupWithImage (popupImageOpen);
    popupOpenImage.setEventListeners();

    const popupNewImageForm = new PopupWithForm (popupAddNewImg, handleFormAddNewImage);
    popupNewImageForm.setEventListeners();

    const popupUserInfo = new PopupWithForm (userInfoPopup, handleSubmitSetInfo)
    popupUserInfo.setEventListeners();

    const confirmPopup = new PopupWithConfirmation(popupDeleteConfirmation, handleSubmitConfirmation);
    confirmPopup.setEventListeners();

    const popupUpdateAvatar = new PopupWithForm(popupChangeAvatar, handleEditAvatar);
popupUpdateAvatar.setEventListeners();

    buttonPopupOpenUserInfo.addEventListener('click', () => {
        popupUserInfo.open();
        userInfoPopupInputName.value = userInfo.getUserInfo().name;
        userInfoPopupInputJob.value = userInfo.getUserInfo().about;
    });
    
    buttonPopupOpenAddNewImage.addEventListener('click', () => {
        popupNewImageForm.open()
        newImgFormValidation.disableButton();
    });
    
    avatarImageButton.addEventListener("click", () => {
        inputChangeAvatar.value = userInfo.getUserInfo().avatar;
        popupUpdateAvatar.open();
    })


function handleSubmitConfirmation ({card, cardId}) {
    api.deleteCard(cardId).then(() => {
        card.removeCard();
        confirmPopup.close();
    })
        .catch((error) => console.error(`Ошибка при удалении карточки ${error}`))
        .finally(() => confirmPopup.setDefaultButtonText());
    }

function handleFormAddNewImage(inputValues) {
    api.addCard(inputValues.name, inputValues.link)
    .then((newCard) => {
        renderCard({
            name: newCard.name, _id: newCard._id, link: newCard.link, likes: newCard.likes, owner: { _id: newCard.owner._id }
        }, newCard.owner._id);
        popupNewImageForm.close();
    })
    .catch((error => console.error(`Ошибка при попытке создать карточку ${error}`)))
    .finally(() => popupNewImageForm.setDefaultButtonText());
}

function handleSubmitSetInfo(inputValues) {
    return api.updateProfileInfo(inputValues.name, inputValues.job)
    .then((res) => {
        userInfo.setUserInfo({ name: res.name, about: res.about, avatar: res.avatar });
        popupUserInfo.close();
        })
    .catch((error => console.error(`Ошибка редактирования профиля ${error}`)))
    .finally(() => popupUserInfo.setDefaultButtonText());
};

function handleEditAvatar(inputValues) {
    api.updateAvatar(inputValues.avatar)
        .then((res) => {
        userInfo.setUserInfo({ name: res.name, about: res.about, avatar: res.avatar });
        popupUpdateAvatar.close();
        })
    .catch((error => console.error(`Ошибка смены аватара ${error}`)))
    .finally(() => popupUpdateAvatar.setDefaultButtonText());
}

function createCard(item, user) {
    const card = new Card(
        item,
        ".image__tamplate",
        () => { popupOpenImage.open(item) },
        confirmPopup.open,
        (cardId) => {
            let likeByMe = card.likeByMe();
            if (likeByMe) {
                api.deleteLike(cardId).then((res) => card.toggleButtonLike(res.likes))
                .catch((error) => console.error(`Ошибка снятия лайка ${error}`))
            } else {
            api.addLike(cardId).then((res) => card.toggleButtonLike(res.likes))
            .catch((error) => console.error(`Ошибка попытки поставить лайк ${error}`));
            }
        },
        user
    );
    return card.createCard();
};

function renderCard (item, user) {
    const cardElement = createCard(item, user);
    renderCardList.addItem(cardElement);
}






















