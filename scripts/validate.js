const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__input-button',
    inactiveButtonClass: 'popup__input-button_disabled',
    inputErrorClass: 'popup__form-input_type_error',
    errorClass: 'popup__error'
};

function enableValidation(validationConfig) {
    const forms = Array.from(document.querySelectorAll(validationConfig.formSelector));
    forms.forEach(form => {
        getInputEvent(form, validationConfig)
    })
}

function checkInputValidation(input, validationConfig) {
    const errorElementPopup = document.querySelector(`#error-${input.id}`)
    if (input.checkValidity()) {
        input.classList.remove(validationConfig.inputErrorClass);
        errorElementPopup.textContent = ''
    }
    else {
        input.classList.add(validationConfig.inputErrorClass);
        errorElementPopup.textContent = input.validationMessage;
    }
}

function disableButton(button, validationConfig) {
    button.setAttribute('disabled', '');
    button.classList.add(validationConfig.inactiveButtonClass)
};

function enableButton(button, validationConfig) {
    button.removeAttribute('disabled');
    button.classList.remove(validationConfig.inactiveButtonClass)

};

function toggleButtonValidity(form, validationConfig) {
    const submitButton = form.querySelector(validationConfig.submitButtonSelector);
    if (form.checkValidity()) {
        enableButton(submitButton, validationConfig);
    } else {
        disableButton(submitButton, validationConfig);
    }
}

function getInputEvent(form, validationConfig) {
const inputs = Array.from(form.querySelectorAll(validationConfig.inputSelector));

inputs.forEach((input) => {
    input.addEventListener('input', () => {
        checkInputValidation(input, validationConfig);
        toggleButtonValidity(form, validationConfig);
    });
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
});
};

enableValidation(validationConfig); 





