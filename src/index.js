import './pages/index.css';
import Card from './components/Card.js';
import Section from './components/Section.js';
import UserInfo from './components/UserInfo.js';
import { initialCards } from './components/constants.js';
import { FormValidator } from './components/FormValidator.js';
import Popup from './components/Popup.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
const popupEditProfile = new Popup('.popup_type_edit-profile');
const openBtnEditProfilePopup = document.querySelector('.profile__edit-button');
const formElementEditProfile = document.querySelector('.popup__form-element_type_edit-profile');
const editProfileNameInput = formElementEditProfile.querySelector('.popup__text_type_name');
const editProfileJobInput = formElementEditProfile.querySelector('.popup__text_type_job');
const closeBtnEditProfilePopup = document.querySelector('.popup__close-btn_size_s');
const popupNewPlace = new Popup('.popup_type_new-place');
const openBtnPopupNewPlace = document.querySelector('.profile__add-button');
const closeBtnNewPlace = document.querySelector('.popup__close-btn_size_m');
const formElementNewPlace = document.querySelector('.popup__form-element_type_new-place');
const inputNewPlaceTitle = formElementNewPlace.querySelector('.popup__text_type_title');
const inputNewPlaceLink = formElementNewPlace.querySelector('.popup__text_type_link');
const popupWithImage = new PopupWithImage('.popup_type_images');
const closeBtnPopupImages = document.querySelector('.popup__close-btn_size_l');
const templateSelector = '#group-template';
const groupsContainer = document.querySelector('.group');
const createNewCard = (cardData) => {
  const handleCardClick = ({ name, link }) => {
    popupWithImage.handleCardClick({ name, link });
  };
  const card = new Card(cardData, templateSelector, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
};
const popupWithForm = new PopupWithForm('.popup_type_new-place', (inputValues) => {
  const cardData = {
    name: inputValues.title,
    link: inputValues.link
  };
    const newCard = createNewCard(cardData);
    groupsContainer.prepend(newCard);
    popupWithForm.close();
});
popupWithForm.setEventListeners();
const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  infoSelector: '.profile__subtitle'
});
const section = new Section({
  items: initialCards,
  renderer: (cardData) => {
    const cardElement = createNewCard(cardData);
    section.addItem(cardElement);
  }
}, '.group');
section.render();
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const name = editProfileNameInput.value;
  const info = editProfileJobInput.value;
  userInfo.setUserInfo({ name, info });
  popupEditProfile.close();
}
const resetFormInputs = () => {
  inputNewPlaceTitle.value = '';
  inputNewPlaceLink.value = '';
}
openBtnEditProfilePopup.addEventListener('click', () => {
  const { name, info } = userInfo.getUserInfo();
  editProfileNameInput.value = name;
  editProfileJobInput.value = info;
  popupEditProfile.open();
  formValidatorEditProfile.resetValidation();
});
closeBtnEditProfilePopup.addEventListener('click', () => {
  popupEditProfile.close();
});
formElementEditProfile.addEventListener('submit', handleProfileFormSubmit);
popupEditProfile.setEventListeners();
openBtnPopupNewPlace.addEventListener('click', () => {
  popupNewPlace.open();
  resetFormInputs();
  formValidatorNewPlace.resetValidation();
});
closeBtnNewPlace.addEventListener('click', () => {
  popupNewPlace.close();
});
popupNewPlace.setEventListeners();
closeBtnPopupImages.addEventListener('click', () => {
  popupWithImage.close();
});
popupWithImage.setEventListeners();
const validationConfig = {
  formSelector: '.popup__form-element',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__error_active',
};
const formValidatorEditProfile = new FormValidator(validationConfig, formElementEditProfile);
const formValidatorNewPlace = new FormValidator(validationConfig, formElementNewPlace);
formValidatorEditProfile.enableValidation();
formValidatorNewPlace.enableValidation();
import one from './images/1.jpg';
import two from './images/2.jpg';
import thre from './images/3.jpg';
import avatar from './images/avatar.jpg';
import CloseIcon from './images/CloseIcon.svg';
import CloseIconpopupimg from './images/CloseIconpopupimg.svg';
import delite1 from './images/delite1.png';
import delite2 from './images/delite2.png';
import Line from './images/Line.svg';
import Rectangle from './images/Rectangle.png';
import Rectangle1 from './images/Rectangle.svg';
import Trash from './images/Trash.png';
import Union from './images/Union.svg';
import Vector from './images/Vector.png';
import Vector1 from './images/Vector.svg';
import VectorAddbutton from './images/VectorAddbutton.svg';
import vectorButton from './images/vectorButton.svg';
import VectorGroup from './images/VectorGroup.svg';
const whoIsTheGoat = [
  { name: 'one', link: one },
  { name: 'two', link: two },
  { name: 'thre', link: thre },
  { name: 'avatar', link: avatar },
  { name: 'CloseIcon', link: CloseIcon },
  { name: 'CloseIconpopupimg', link: CloseIconpopupimg },
  { name: 'delite1', link: delite1 },
  { name: 'delite2', link: delite2 },
  { name: 'Line', link: Line },
  { name: 'Rectangle', link: Rectangle },
  { name: 'Rectangle1', link: Rectangle1 },
  { name: 'Trash', link: Trash },
  { name: 'Union', link: Union },
  { name: 'Vector', link: Vector },
  { name: 'Vector1', link: Vector1 },
  { name: 'VectorAddbutton', link: VectorAddbutton },
  { name: 'vectorButton', link: vectorButton },
  { name: 'VectorGroup', link: VectorGroup },
];
