export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }
  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }
  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }
  setEventListeners() {
    const closeButton = this._popupElement.querySelector('.popup__close-btn');
    closeButton.addEventListener('click', () => {
      this.close();
    });
    this._popupElement.addEventListener('click', (event) => {
      if (event.target === this._popupElement) {
        this.close();
      }
    });
  }
}
const popupNewPlace = new Popup('.popup_type_new-place');
const popupEditProfile = new Popup('.popup_type_edit-profile');
const closeBtnNewPlace = document.querySelector('.popup__close-btn_size_m');
const closeBtnEditProfilePopup = document.querySelector('.popup__close-btn_size_s');
closeBtnNewPlace.addEventListener('click', () => {
  popupNewPlace.close();
});
closeBtnEditProfilePopup.addEventListener('click', () => {
  popupEditProfile.close();
});
