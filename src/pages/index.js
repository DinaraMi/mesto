import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { initialCards, validationConfig } from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
const popupEditProfile = new Popup('.popup_type_edit-profile');
const openBtnEditProfilePopup = document.querySelector('.profile__edit-button');
const formElementEditProfile = document.querySelector('.popup__form-element_type_edit-profile');
const editProfileNameInput = formElementEditProfile.querySelector('.popup__text_type_name');
const editProfileJobInput = formElementEditProfile.querySelector('.popup__text_type_job');
const popupNewPlace = new Popup('.popup_type_new-place');
const openBtnPopupNewPlace = document.querySelector('.profile__add-button');
const formElementNewPlace = document.querySelector('.popup__form-element_type_new-place');
const inputNewPlaceTitle = formElementNewPlace.querySelector('.popup__text_type_title');
const inputNewPlaceLink = formElementNewPlace.querySelector('.popup__text_type_link');
const popupWithImage = new PopupWithImage('.popup_type_images');
const templateSelector = '#group-template';
const createNewCard = (cardData) => {
  const handleCardClick = (data) => {
    popupWithImage.handleCardClick(data);
  };
  const card = new Card(cardData, templateSelector, handleCardClick);
  return card.generateCard();;
};
const popupWithForm = new PopupWithForm('.popup_type_new-place', (inputValues) => {
  const cardData = {
    name: inputValues.title,
    link: inputValues.link
  };
    const newCard = createNewCard(cardData);
    section.addItem(newCard);
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
section.renderInitialItems();
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
formElementEditProfile.addEventListener('submit', handleProfileFormSubmit);
popupEditProfile.setEventListeners();
openBtnPopupNewPlace.addEventListener('click', () => {
  popupNewPlace.open();
  resetFormInputs();
  formValidatorNewPlace.resetValidation();
});
popupNewPlace.setEventListeners();
popupWithImage.setEventListeners();
const formValidatorEditProfile = new FormValidator(validationConfig, formElementEditProfile);
const formValidatorNewPlace = new FormValidator(validationConfig, formElementNewPlace);
formValidatorEditProfile.enableValidation();
formValidatorNewPlace.enableValidation();
