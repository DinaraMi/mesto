// const showInputError = (formElement, inputElement, errorMessage, config) => {
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.add(config.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(config.errorClass);
// };
// const hideInputError = (formElement, inputElement, config) => {
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.remove(config.inputErrorClass);
//   errorElement.classList.remove(config.errorClass);
//   errorElement.textContent = '';
// };
// const checkInputValidity = (formElement, inputElement, config) => {
//   const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
//   const submitButton = formElement.querySelector(config.submitButtonSelector);
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, config);
//   } else {
//     hideInputError(formElement, inputElement, config);
//   }
//   if (inputList.every((input) => input.validity.valid)) {
//     submitButton.disabled = false;
//     submitButton.classList.remove(config.inactiveButtonClass);
//   } else {
//     submitButton.disabled = true;
//     submitButton.classList.add(config.inactiveButtonClass);
//   }
// };
// const setEventListeners = (formElement, config) => {
//   const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
//   const submitButton = formElement.querySelector(config.submitButtonSelector);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkInputValidity(formElement, inputElement, config);
//     });
//   });
//   if (inputList.every((input) => input.validity.valid)) {
//     submitButton.disabled = false;
//     submitButton.classList.remove(config.inactiveButtonClass);
//   } else {
//     submitButton.disabled = true;
//     submitButton.classList.add(config.inactiveButtonClass);
//   }
// };
// const enableValidation = (config) => {
//   const formList = Array.from(document.querySelectorAll(config.formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//     setEventListeners(formElement, config);
//   });
// };
// const validationConfig = {
//   formSelector: '.popup__form-element',
//   inputSelector: '.popup__text',
//   submitButtonSelector: '.popup__save',
//   inactiveButtonClass: 'popup__save_disabled',
//   inputErrorClass: 'popup__text_type_error',
//   errorClass: 'popup__error_active'
// };
// enableValidation(validationConfig);
