import Popup from './Popup.js'

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imageItem = this._popupSelector.querySelector('.popup__image');
        this._imageInfo = this._popupSelector.querySelector('.popup__image-title');
    }

    open (items) {
        this._imageItem.src = items.link;
        this._imageItem.alt = items.name;
        this._imageInfo.textContent = items.name;
        super.open();
    }
}

export default PopupWithImage;