import Popup from "./Popup.js";

class PopupWithConfirmation extends Popup {
    constructor(popupSelector, handleButtonConfirm) {
        super(popupSelector);
        this._button = document.querySelector('.popup__input-button_type_confirmation');
        this._handleButtonConfirm = handleButtonConfirm;
        this._buttonDefaultText = this._button.textContent;
    }

setEventListeners() {
    super.setEventListeners();
    this._button.addEventListener('click', () => {
    this._handleButtonConfirm({ card: this._card, cardId: this._cardId });
    this._button.textContent = `Удаление...`
    })
};  

open = ({ card, cardId }) => {
    super.open();
    this._card = card;
    this._cardId = cardId
}

setDefaultButtonText() {
    this._button.textContent = this._buttonDefaultText;
}
}

export default PopupWithConfirmation;