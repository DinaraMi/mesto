const openPopupBtn = document.querySelector ('.profile__edit-button');
const popup = document.querySelector ('.popup');
const inputsName = document.querySelector ('.popup__name_name');
const inputsJob = document.querySelector ('.popup__name_job');
const profileName = document.querySelector ('.profile__title');
const profileJob = document.querySelector ('.profile__subtitle');
const btnClose = document.querySelector('.popup__close-btn');
const btnSave = document.querySelector('.popup__save');
const formElement = document.querySelector('.popap__formElement');

function openPopup(){
  popup.classList.add('popup_opened');
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
  if (btnSave){
    popup.classList.remove('popup_opened');
  }
}
formElement.addEventListener('submit', handleFormSubmit);
