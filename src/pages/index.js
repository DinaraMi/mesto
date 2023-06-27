import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { validationConfig } from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupDeleteCard from '../components/PopupDeleteCard.js';
import Api from '../components/Api';
const openBtnEditProfilePopup = document.querySelector('.profile__edit-button');
const formElementEditProfile = document.querySelector('.popup__form-element_type_edit-profile');
const editProfileNameInput = formElementEditProfile.querySelector('.popup__text_type_name');
const editProfileJobInput = formElementEditProfile.querySelector('.popup__text_type_job');
const openBtnPopupNewPlace = document.querySelector('.profile__add-button');
const formElementNewPlace = document.querySelector('.popup__form-element_type_new-place');
const popupWithImage = new PopupWithImage('.popup_type_images');
const templateSelector = '#group-template';
const openBtnAvatarPopup = document.querySelector('.profile__avatar-button');
const formAvatar = document.querySelector('.popup__form-element_type_avatar');
const avatarElement = document.querySelector('.profile__avatar-button');
const editIconElement = document.querySelector('.profile__avatar-edit-icon');
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
    headers: {
      authorization: '86b65609-2127-4100-b7d2-3912cfe7a894',
      'Content-Type': 'application/json'
    }
  });
  const createNewCard = (cardData) => {
    const handleCardClick = (data) => {
      popupWithImage.open(data);
    };
    const handleDeleteCard = function(card, cardId) {
      popupDeleteCard.open(card, cardId);
    };
    const card = new Card(cardData, templateSelector, handleCardClick, handleDeleteCard, (isLiked, myId) => {
      if (isLiked) {
        api.deleteLike(myId)
          .then(res => {
            card.toggleLikes(res.likes);
          })
          .catch((error) => console.error(`Ошибка ${error}`));
      } else {
        api.addLike(myId)
          .then(res => {
            card.toggleLikes(res.likes);
          })
          .catch((error) => console.error(`Ошибка ${error}`));
      }
    });
    return card.generateCard();
  };
const popupDeleteCard = new PopupDeleteCard('.popup_type_delite-card', ({ card, cardId }) => {
  api.deleteCard(cardId)
    .then(() => {
      card.removeCard();
      popupDeleteCard.close();
    })
    .catch((error) => console.error(`Ошибка ${error}`));
});
const popupNewPlace = new PopupWithForm('.popup_type_new-place', (data) => {
  api.addCard(data)
    .then((dataCard) => {
      const updatedDataCard = { ...dataCard, myId: dataCard.owner._id };
      section.addItem(createNewCard(updatedDataCard));
      popupNewPlace.close();
    })
    .catch((error) => console.error(`Ошибка ${error}`))
    .finally(() => popupNewPlace.editDefaultText());
});
const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  infoSelector: '.profile__subtitle',
  avatarSelector: '.profile__avatar',
});
const section = new Section({
  renderer: (dataCard) => {
    const cardElement = createNewCard(dataCard);
    return cardElement;
  }
}, '.group');
const popupEditProfile = new PopupWithForm('.popup_type_edit-profile', (inputValues) => {
  const name = inputValues.firstname;
  const info = inputValues.job;
  api.editUserInformation({ name, info, avatar })
    .then(res => {
      userInfo.setUserInfo({ name: res.name, info: res.about, avatar: res.avatar });
      popupEditProfile.close();
    })
    .catch((error) => console.error(`Ошибка ${error}`))
    .finally(() => popupEditProfile.editDefaultText());
});
const popupAvatar = new PopupWithForm('.popup_type_avatar', (data) => {
  api.editUserAvatar(data)
    .then(res => {
      userInfo.setUserInfo({ name: res.name, info: res.about, avatar: res.avatar });
      popupAvatar.close();
    })
    .catch((error) => console.error(`Ошибка ${error}`))
    .finally();
});
openBtnEditProfilePopup.addEventListener('click', () => {
  const { name, info } = userInfo.getUserInfo();
  editProfileNameInput.value = name;
  editProfileJobInput.value = info;
  popupEditProfile.open();
  formValidatorEditProfile.resetValidation();
});
openBtnPopupNewPlace.addEventListener('click', () => {
  popupNewPlace.open();
  formValidatorNewPlace.resetValidation();
});
openBtnAvatarPopup.addEventListener('click', () => {
  popupAvatar.open();
  formValidatorAvatar.resetValidation();
});
avatarElement.addEventListener('mouseenter', () => {
  editIconElement.classList.add('profile__avatar-edit-icon_active');
});
avatarElement.addEventListener('mouseleave', () => {
  editIconElement.classList.remove('profile__avatar-edit-icon_active');
});
popupEditProfile.setEventListeners();
popupNewPlace.setEventListeners();
popupWithImage.setEventListeners();
popupAvatar.setEventListeners();
popupDeleteCard.setEventListeners();
const formValidatorEditProfile = new FormValidator(validationConfig, formElementEditProfile);
const formValidatorNewPlace = new FormValidator(validationConfig, formElementNewPlace);
const formValidatorAvatar = new FormValidator(validationConfig, formAvatar);
formValidatorEditProfile.enableValidation();
formValidatorNewPlace.enableValidation();
formValidatorAvatar.enableValidation();
Promise.all([api.getUserInformation(), api.getInitialCards()])
  .then(([dataUser, dataCard]) => {
    const updatedDataCard = dataCard.map(element => ({ ...element, myId: dataUser._id }));
    userInfo.setUserInfo({ name: dataUser.name, info: dataUser.about, avatar: dataUser.avatar });
    section.renderInitialItems(updatedDataCard);
  })
  .catch((error) => console.error(`Ошибка ${error}`))
