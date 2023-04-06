const openPopupBtn = document.querySelector ('.profile__edit-button');
const popup = document.querySelector ('.popup');
const inputsName = document.querySelector ('.popup__type_name');
const inputsJob = document.querySelector ('.popup__type_job');
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
