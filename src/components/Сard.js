class Card {
    constructor(data, templateSelector, handleCardClick, handleConfirmPopupOpen, likeSet, user) {
        this._data = data;
        this._likes = data.likes;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleConfirmPopupOpen = handleConfirmPopupOpen;
        this._likeSet = likeSet;
        this._user = user;
    }

    createCard() {
        this._getCard();
        this._insertCardContent();
        this._setEventListeners();
        this._giveBasketButton();
        this._checkingLikeStatus();
        return this._imageItem;
    }

    _getCard() {
        this._imageItem = document.querySelector(this._templateSelector).content.querySelector('.content__box').cloneNode(true);
        this._likeButton = this._imageItem.querySelector('.content__like-img');
        this._deleteButton = this._imageItem.querySelector('.content__delete-button-icon');
        this._imageCardPicture = this._imageItem.querySelector('.content__image');
        this._imageTitle = this._imageItem.querySelector('.content__title');
        this._likeBox = this._imageItem.querySelector('.content__like-box');
        return this._imageItem;
    }

    _insertCardContent(){
        this._imageTitle.textContent = this._data.name;
        this._imageCardPicture.src = this._data.link;
        this._imageCardPicture.alt = this._data.name;
    }

    likeByMe() {
        const myLike = this._likes.find((like) => {
        return like._id === this._user;
        })
    return myLike
    };
    
    _checkingLikeStatus() {
        this._likes.forEach(item => {
            if (item._id === this._user) {
                this._likeButton.classList.add('content__like-img_type_active');
                return
            }
        })
        this._likeBox.textContent = this._likes.length;
    }
    
    _setEventListeners() {
        this._likeButton.addEventListener('click', () => this._handleLikeButtonClick());
        this._deleteButton.addEventListener('click', () => this._handleConfirmPopupOpen({ card: this, cardId: this._data._id }));
        this._imageCardPicture.addEventListener('click', () => this._handleCardClick());
    };
    
    
    _handleLikeButtonClick() {
        this._likeSet(this._data._id);
    };
    
    toggleButtonLike(likes) {
        this._likeBox.textContent = likes.length;
        this._likeButton.classList.toggle('content__like-img_type_active');
    }
    
    _giveBasketButton() {
        if (this._user === this._data.owner._id) {
        this._deleteButton.classList.add('content__delete-button-icon_type_visible');
        }
    }
    
    removeCard() {
        this._imageItem.remove();
        this._imageItem = null;
    }
    };

export default Card;



