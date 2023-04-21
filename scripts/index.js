const openPopupBtn = document.querySelector ('.profile__edit-button');
const popup = document.querySelector ('.popup');
const inputsName = document.querySelector ('.popup__text_type_name');
const inputsJob = document.querySelector ('.popup__text_type_job');
const profileName = document.querySelector ('.profile__title');
const profileJob = document.querySelector ('.profile__subtitle');
const btnClose = document.querySelector('.popup__close-btn');
const formElement = document.querySelector('.popup__form-element');

function openPopup(){
  popup.classList.add('popup_opened');
  inputsName.value = profileName.textContent;
  inputsJob.value = profileJob.textContent;
}
openPopupBtn.addEventListener('click', openPopup);

function closePopup (){
    popup.classList.remove('popup_opened');
  }
btnClose.addEventListener('click', closePopup)

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = inputsName.value;
  profileJob.textContent = inputsJob.value;
  closePopup ();
}
formElement.addEventListener('submit', handleFormSubmit);

const openBtnPopupNewPlace = document.querySelector ('.profile__add-button');
const popupNewPlace = document.querySelector ('.popup-newplace');
const closeBtnNewPlace = document.querySelector ('.popup-newplace__close-btn');

function openPopupNewPlace(){
  popupNewPlace.classList.add('popup-newplace_open');
}
openBtnPopupNewPlace.addEventListener('click', openPopupNewPlace);

function closeNewPlace(){
  popupNewPlace.classList.remove('popup-newplace_open');
}
closeBtnNewPlace.addEventListener('click', closeNewPlace);

const inputsTitle = document.querySelector ('.popup-newplace__text_type_title');
const inputsLink = document.querySelector ('.popup-newplace__text_type_link');
const formElements = document.querySelector ('.popup-newplace__form-element');
const groupTemplate = document.getElementById ('group-template');
const groups = document.querySelector ('.group');

const popupImages = document.querySelector('.popup-images');
const popupImagesCloseButton = popupImages.querySelector('.popup-images__close-btn');
const popupImagesContent = popupImages.querySelector('.popup-images__content');
const popupImagesParagraph = popupImages.querySelector('.popup-images__paragraph');

function openPopupImage(card) {
  popupImagesContent.src = card.link;
  popupImagesContent.alt = card.name;
  popupImagesParagraph.textContent = card.name;
  popupImages.classList.add('popup-images_open');
}

popupImagesCloseButton.addEventListener('click', () => {
  popupImages.classList.remove('popup-images_open');
});

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const createNewCards = (card) => {
  const groupElement = groupTemplate.content.querySelector('.group__element').cloneNode(true);
  const groupImage = groupElement.querySelector('.group__mask');
  const groupTitle = groupElement.querySelector('.group__paragraph');
  const deliteBtn = groupElement.querySelector ('.group__delite');
  const likeBtn = groupElement.querySelector('.group__vector');

  groupTitle.textContent = card.name;
  groupImage.src = card.link;
  groupImage.alt = card.name;

  const handDelite = () => {
    groupElement.remove();
  }
  deliteBtn.addEventListener('click', handDelite);

  const handLike = () => {
    likeBtn.classList.toggle('group__vector_active');
  }
  likeBtn.addEventListener('click', handLike);

  groupImage.addEventListener('click', () => {
    openPopupImage(card);
  });

  return groupElement;
}

initialCards.forEach((card) =>{
  const element = createNewCards(card);
  groups.appendChild(element);
})

formElements.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const groupCard = { name: inputsTitle.value, link: inputsLink.value };
  const element = createNewCards(groupCard);
  groups.prepend(element);
  closeNewPlace();
});





