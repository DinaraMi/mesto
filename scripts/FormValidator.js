class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  }
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
  }
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }
  _toggleSubmitButtonState(inputList, submitButton) {
    if (inputList.every((input) => input.validity.valid)) {
      submitButton.disabled = false;
      submitButton.classList.remove(this._config.inactiveButtonClass);
    } else {
      submitButton.disabled = true;
      submitButton.classList.add(this._config.inactiveButtonClass);
    }
  }
  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    const submitButton = this._formElement.querySelector(this._config.submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleSubmitButtonState(inputList, submitButton);
      });
    });
    this._toggleSubmitButtonState(inputList, submitButton);
  }
  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const formValidator = new FormValidator(config, formElement);
    formValidator.enableValidation();
  });
};
const validationConfig = {
  formSelector: '.popup__form-element',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__error_active',
};
enableValidation(validationConfig);

const formElementEditProfile = document.querySelector('.popup__form-element_type_edit-profile');
const formValidatorEditProfile = new FormValidator(validationConfig, formElementEditProfile);
formValidatorEditProfile.enableValidation();
const formElementNewPlace = document.querySelector('.popup__form-element_type_new-place');
const formValidatorNewPlace = new FormValidator(validationConfig, formElementNewPlace);
formValidatorNewPlace.enableValidation();
