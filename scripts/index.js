import { Card, addCard } from './card.js';
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const openBtnEditProfilePopup = document.querySelector('.profile__edit-button');
const editProfileNameInput = editProfilePopup.querySelector('.popup__text_type_name');
const editProfileJobInput = editProfilePopup.querySelector('.popup__text_type_job');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const closeBtnEditProfilePopup = editProfilePopup.querySelector('.popup__close-btn_size_s');
const formElementEditProfile = editProfilePopup.querySelector('.popup__form-element_type_edit-profile');
const popupNewPlace = document.querySelector('.popup_type_new-place');
const openBtnPopupNewPlace = document.querySelector('.profile__add-button');
const closeBtnNewPlace = popupNewPlace.querySelector('.popup__close-btn_size_m');
const inputNewPlaceTitle = popupNewPlace.querySelector('.popup__text_type_title');
const inputNewPlaceLink = popupNewPlace.querySelector('.popup__text_type_link');
const createCardForm = popupNewPlace.querySelector('.popup__form-element_type_new-place');
const createCardBtn = popupNewPlace.querySelector('.popup__save_type_new-place');
const popupImages = document.querySelector('.popup_type_images');
const closeBtnPopupImages = popupImages.querySelector('.popup__close-btn_size_l');
const popupImagesContent = popupImages.querySelector('.popup__image');
const popupImagesParagraph = popupImages.querySelector('.popup__title_type_images');

const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');
  popupElement.addEventListener('click', handlePopupClick);
  document.addEventListener('keydown', handleEscPress);
};
const handlePopupClick = (evt) => {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.target === openedPopup) {
    closePopup(openedPopup);
  }
};
const handleEscPress = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};
const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_opened');
  popupElement.removeEventListener('click', handlePopupClick);
  document.removeEventListener('keydown', handleEscPress);
};
const openPopupEditProfile = () => {
  openPopup(editProfilePopup);
  editProfileNameInput.value = profileName.textContent;
  editProfileJobInput.value = profileJob.textContent;
};
const closePopupEditProfile = () => {
  closePopup(editProfilePopup);
};
const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = editProfileNameInput.value;
  profileJob.textContent = editProfileJobInput.value;
  closePopupEditProfile();
};
const openPopupNewPlace = () => {
  openPopup(popupNewPlace);
  createCardBtn.classList.add('popup__save_disabled');
  createCardBtn.setAttribute('disabled', true);
};
const closeNewPlace = () => {
  closePopup(popupNewPlace);
  createCardBtn.removeAttribute('disabled');
};
export const openPopupImage = (card) => {
  popupImagesContent.src = card.link;
  popupImagesContent.alt = card.name;
  popupImagesParagraph.textContent = card.name;
  openPopup(popupImages);
};
const closePopupImage = () => {
  closePopup(popupImages);
};
const resetFormInputs = () => {
  inputNewPlaceTitle.value = '';
  inputNewPlaceLink.value = '';
};

openBtnEditProfilePopup.addEventListener('click', openPopupEditProfile);
closeBtnEditProfilePopup.addEventListener('click', closePopupEditProfile);
formElementEditProfile.addEventListener('submit', handleProfileFormSubmit);
openBtnPopupNewPlace.addEventListener('click', openPopupNewPlace);
closeBtnNewPlace.addEventListener('click', closeNewPlace);
closeBtnPopupImages.addEventListener('click', closePopupImage);
createCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const inputNewPlaceTitle = popupNewPlace.querySelector('.popup__text_type_title');
  const inputNewPlaceLink = popupNewPlace.querySelector('.popup__text_type_link');
  const cardData = {
    name: inputNewPlaceTitle.value,
    link: inputNewPlaceLink.value
  };
  addCard(cardData);
  resetFormInputs();
  closeNewPlace();
});
