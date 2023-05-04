const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('popup__text_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__error_active');
};
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('popup__text_type_error');
  errorElement.classList.remove('popup__error_active');
  errorElement.textContent = '';
};
const checkInputValidity = (formElement, inputElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__text'));
  const submitButton = formElement.querySelector('.popup__save');
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
  if (inputList.every((input) => input.validity.valid)) {
    submitButton.disabled = false;
    submitButton.classList.remove('popup__save_disabled');
  } else {
    submitButton.disabled = true;
    submitButton.classList.add('popup__save_disabled');
  }
};
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__text'));
  const submitButton = formElement.querySelector('.popup__save');
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
    });
  });
  if (inputList.every((input) => input.validity.valid)) {
    submitButton.disabled = false;
    submitButton.classList.remove('popup__save_disabled');
  } else {
    submitButton.disabled = true;
    submitButton.classList.add('popup__save_disabled');
  }
};
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form-element'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
}
enableValidation({
  formSelector: '.popup__form-element',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__error_active'});
