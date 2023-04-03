const openPopupBtn = document.querySelector ('.profile__edit-button');
const popup = document.querySelector ('.popup');
const closePopupBtn = document.querySelector ('.popup__close-btn');
const shadow = document.querySelector ('.popup_shadow');

function openPopup(){
  popup.classList.add('popup_opened');
  if (openPopup){
    popup.addEventListener(shadow);}
}

function closePopup(evt){
  const isOverlay = evt.target.classList.contains('popup');
  const isclosePopupBtn = evt.target.classList.contains('popup__close-btn');

  if (isOverlay || isclosePopupBtn){
    popup.classList.remove('popup_opened');
  }
}

openPopupBtn.addEventListener('click', openPopup);
popup.addEventListener('click', closePopup)

document.querySelector('.popup__save').onclick = btnSave;
function btnSave(){
const inputsName = document.querySelector ('.popup__name').value;
const inputsJob = document.querySelector ('.popup__description').value;
document.querySelector('.profile__title').innerHTML = inputsName;
document.querySelector('.profile__subtitle').innerHTML = inputsJob;
  if (btnSave){
    popup.classList.remove('popup_opened');
}
}



