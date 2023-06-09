import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
  constructor(popupSelector){
    super(popupSelector);
    this._popupImage = this._popupElement.querySelector('.popup__image');
    this._popupCaption = this._popupElement.querySelector('.popup__title_type_images');
}
handleCardClick({name, link}) {
  this._popupImage.src = link;
  this._popupImage.alt = name;
  this._popupCaption.textContent = name;
  super.open();
}
}
const popupWithImage = new PopupWithImage('.popup_type_images');
const closeBtnPopupImages = document.querySelector('.popup__close-btn_size_l');
closeBtnPopupImages.addEventListener('click', () => {
  popupWithImage.close();
});
