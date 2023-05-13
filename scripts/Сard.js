class Card {
    constructor(data, templateSelector, openImage) {
        this._data = data;
        this._templateSelector = templateSelector;
        this._openImage = openImage;
    }

    createCard() {
        this._getCard();
        this._insertCardContent();
        this._setEventListeners();
        return this._imageItem;
    }

    _getCard() {
        this._imageItem = document.querySelector(this._templateSelector).content.querySelector('.content__box').cloneNode(true);
        this._likeButton = this._imageItem.querySelector('.content__like-img');
        this._deleteButton = this._imageItem.querySelector('.content__delete-button-icon');
        this._imageCardPicture = this._imageItem.querySelector('.content__image');
        this._imageTitle = this._imageItem.querySelector('.content__title');
        this._image = this._imageItem.querySelector('.content__image');
        return this._imageItem;
    }

    _insertCardContent(){
        this._imageTitle.textContent = this._data.name;
        this._image.src = this._data.link;
        this._image.alt = this._data.name;
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => this._likeCard());
        this._deleteButton.addEventListener('click', () => this._deleteCard());
        this._imageCardPicture.addEventListener('click', () => this._openImagePopup());
    }
    
    _likeCard() {
        this._likeButton.classList.toggle('content__like-img_type_active');
    }

    _deleteCard() {
        this._imageItem.remove();
    }

    _openImagePopup() {
        this._openImage(this._data)
    }
}

export default Card;



