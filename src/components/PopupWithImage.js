import Popup from './Popup.js'

class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._imageItem = this._popupElement.querySelector('.popup__image');
        this._imageInfo = this._popupElement.querySelector('.popup__image-title');
    }

    open (items) {
        super.open();
        this._imageItem.src = items.link;
        this._imageItem.alt = items.name;
        this._imageInfo.textContent = items.name;
    }
}

export default PopupWithImage;