import Popup from './Popup.js'

class PopupWithForm extends Popup {
    constructor(popupElement, submitCallbackFunction) {
        super(popupElement);
        this._form = this._popupElement.querySelector('.popup__form');
        this._submitCallbackFunction = submitCallbackFunction;
        this._inputs = Array.from(this._form.querySelectorAll('.popup__form-input'));
    }

    _getInputValues() {
        const inputValues = {};
        this._inputs.forEach((input) => {
            inputValues[input.name] = input.value
        });
            return inputValues;
            
    };

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (event)=> {
            event.preventDefault();
            this._submitCallbackFunction(this._getInputValues());
            this.close();
        });
        
    };

    close() {
        super.close();
        this._form.reset();
    };
}

export default PopupWithForm;
