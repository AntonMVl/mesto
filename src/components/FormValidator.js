class FormValidator {
    constructor (config, form) {
        this._config = config;
        this._form = form;
        this._inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        this._submitButton = this._form.querySelector(this._config.submitButtonSelector);
    }

    enableValidation() {
        this._inputs.forEach((input) => {this._setEventListeners(input)})
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
        })
}

    _setEventListeners(input) {
        input.addEventListener('input', () => {
            this._checkInputValidation(input);
            this._toggleButtonValidity();
        });
        
    }

    _checkInputValidation(input) {
        const errorElementPopup = document.querySelector(`#error-${input.id}`)
        if (input.checkValidity()) {
            input.classList.remove(this._config.inputErrorClass);
            errorElementPopup.classList.remove(this._config.errorClass)
            errorElementPopup.textContent = ''
        }
        else {
            input.classList.add(this._config.inputErrorClass);
            errorElementPopup.textContent = input.validationMessage;
            errorElementPopup.classList.add(this._config.errorClass)
        }
    }

    _toggleButtonValidity() {
        if (this._form.checkValidity()) {
            this.enableButton();
        } else {
            this.disableButton();
        }
    }

    disableButton() {
        this._submitButton.setAttribute('disabled', '');
        this._submitButton.classList.add(this._config.inactiveButtonClass)
    };

    enableButton() {
        this._submitButton.removeAttribute('disabled');
        this._submitButton.classList.remove(this._config.inactiveButtonClass)
    };
};

export default FormValidator;





