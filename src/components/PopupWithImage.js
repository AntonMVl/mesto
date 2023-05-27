import Popup from './Popup.js'

class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._imageItem = this._popupElement.querySelector('.popup__image');
        this._imageInfo = this._popupElement.querySelector('.popup__image-title');
    }

    open (items) {
        this._imageItem.src = items.link;
        this._imageItem.alt = items.name;
        this._imageInfo.textContent = items.name;
        super.open();
    }
}

export default PopupWithImage;