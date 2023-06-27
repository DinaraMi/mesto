import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._formElement = this._popupElement.querySelector('.popup__form-element');
    this._inputList = this._formElement.querySelectorAll('.popup__text');
    this._submitButton = this._formElement.querySelector('.popup__save');
    this._defaultButtonText = this._submitButton.textContent;
  }
  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }
  close() {
    super.close();
    this._formElement.reset();
  }
  editDefaultText(){
    this._submitButton.textContent = this._defaultButtonText
  }
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitButton.textContent = `${this._submitButton.textContent}...`
      this._submitHandler(this._getInputValues());
    });
  }
}
