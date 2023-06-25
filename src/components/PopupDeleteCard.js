import Popup from "./Popup";

export default class PopupDeleteCard extends Popup{
  constructor(popupSelector, submitHandler){
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._formElement = this._popupElement.querySelector('.popup__form-element');
  }
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitHandler({card: this._element, cardId: this._cardId})
      //this._close();
  })}
  open = ({card, cardId}) =>{
    super.open();
    this._element = card
    this._cardId = cardId;
  }
}
