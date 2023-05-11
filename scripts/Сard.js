class Card {
    constructor(data, template, openImage) {
        this._data = data;
        this._template = template;
        this._imageItem = this._template.querySelector('.content__box').cloneNode(true);
        this._likeButton = this._imageItem.querySelector('.content__like-img');
        this._deleteButton = this._imageItem.querySelector('.content__delete-button-icon');
        this._imageCardPicture = this._imageItem.querySelector('.content__image');
        this._imageTitle = this._imageItem.querySelector('.content__title');
        this._image = this._imageItem.querySelector('.content__image');
        this._openImage = openImage;
    }

    createCard() {
        this._insertCardContent();
        this._setEventListeners();
        return this._imageItem;
    }

    _insertCardContent(){
        this._imageTitle.textContent = this._data.name;
        this._image.src = this._data.link;
        this._image.alt = this._data.name;
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => this._addLikeButton(this._likeButton));
        this._deleteButton.addEventListener('click', () => this._addDeleteButton());
        this._imageCardPicture.addEventListener('click', () => this._openImagePopup());
    }
    
    _addLikeButton(likeButton) {
        likeButton.classList.toggle('content__like-img_type_active');
    }

    _addDeleteButton() {
        this._imageItem.remove();
    }

    _openImagePopup() {
        this._openImage(this._data)
    }
}

export default Card;



