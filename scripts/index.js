const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const openBtnEditProfilePopup = document.querySelector('.profile__edit-button');
const editProfileNameInput = editProfilePopup.querySelector('.popup__text_type_name');
const editProfileJobInput = editProfilePopup.querySelector('.popup__text_type_job');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const closeBtnEditProfilePopup = editProfilePopup.querySelector('.popup__close-btn_size_s');
const formElementEditProfile = editProfilePopup.querySelector('.popup__form-element_type_edit-profile');
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
openBtnEditProfilePopup.addEventListener('click', openPopupEditProfile);
closeBtnEditProfilePopup.addEventListener('click', closePopupEditProfile);
formElementEditProfile.addEventListener('submit', handleProfileFormSubmit);

const popupNewPlace = document.querySelector ('.popup_type_new-place');
const openBtnPopupNewPlace = document.querySelector ('.profile__add-button');
const closeBtnNewPlace = popupNewPlace.querySelector ('.popup__close-btn_size_m');
const inputNewPlaceTitle = popupNewPlace.querySelector ('.popup__text_type_title');
const inputNewPlaceLink = popupNewPlace.querySelector ('.popup__text_type_link');
const createCardForm = popupNewPlace.querySelector ('.popup__form-element_type_new-place');
const createCardBtn = popupNewPlace.querySelector('.popup__save_type_new-place');
const groupTemplate = document.getElementById ('group-template');
const groups = document.querySelector ('.group');
const openPopupNewPlace = () => {
  openPopup(popupNewPlace);
  createCardBtn.classList.add('popup__save_disabled');
  createCardBtn.setAttribute('disabled', true);
};
const closeNewPlace = () => {
  closePopup(popupNewPlace);
  createCardBtn.removeAttribute('disabled');
};
const resetFormInputs = () =>{
  inputNewPlaceTitle.value = '';
  inputNewPlaceLink.value = '';
}
const createNewCards = (card) => {
  const groupElement = groupTemplate.content.querySelector('.group__element').cloneNode(true);
  const groupImage = groupElement.querySelector('.group__mask');
  const groupTitle = groupElement.querySelector('.group__paragraph');
  const groupDeletionBtn = groupElement.querySelector ('.group__delite');
  const likeBtn = groupElement.querySelector('.group__vector');
  groupTitle.textContent = card.name;
  groupImage.src = card.link;
  groupImage.alt = card.name;
  const deleteHandler = () => {
    groupElement.remove();
  };
  const likeHandler = () => {
    likeBtn.classList.toggle('group__vector_active');
  }
  groupDeletionBtn.addEventListener('click', deleteHandler);
  likeBtn.addEventListener('click', likeHandler);
  groupImage.addEventListener('click', () => {
    openPopupImage(card);
  });
  resetFormInputs();
  return groupElement;
}
initialCards.forEach((card) =>{
  const element = createNewCards(card);
  groups.appendChild(element);
});
openBtnPopupNewPlace.addEventListener('click', openPopupNewPlace);
closeBtnNewPlace.addEventListener('click', closeNewPlace);

const popupImages = document.querySelector('.popup_type_images');
const closeBtnPopupImages = popupImages.querySelector('.popup__close-btn_size_l');
const popupImagesContent = popupImages.querySelector('.popup__image');
const popupImagesParagraph = popupImages.querySelector('.popup__title_type_images');
const openPopupImage = (card) => {
  popupImagesContent.src = card.link;
  popupImagesContent.alt = card.name;
  popupImagesParagraph.textContent = card.name;
  openPopup(popupImages);
};
const closePopupImage = () => {
  closePopup(popupImages);
}
closeBtnPopupImages.addEventListener('click', closePopupImage);
createCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const groupCard = { name: inputNewPlaceTitle.value, link: inputNewPlaceLink.value };
  const element = createNewCards(groupCard);
  groups.prepend(element);
  closeNewPlace();
});
