import {openPopupImage} from './index.js';
import {initialCards} from './constants.js';
export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }
  _getTemplate() {
    const templateElement = document.querySelector(this._templateSelector);
    const cardElement = templateElement.content.querySelector('.group__element').cloneNode(true);
    return cardElement;
  }
  _setEventListeners() {
    const deleteButton = this._element.querySelector('.group__delite');
    const likeButton = this._element.querySelector('.group__vector');
    const image = this._element.querySelector('.group__mask');
    deleteButton.addEventListener('click', () => {
      this._handleDeleteClick();
    });
    likeButton.addEventListener('click', () => {
      this._handleLikeClick();
    });
    image.addEventListener('click', () => {
      this._handleImageClick();
    });
  }
  _handleDeleteClick() {
    this._element.remove();
  }
  _handleLikeClick() {
    const likeButton = this._element.querySelector('.group__vector');
    likeButton.classList.toggle('group__vector_active');
  }
  _handleImageClick() {
    openPopupImage({ name: this._name, link: this._link });
  }
  generateCard() {
    this._element = this._getTemplate();
    const image = this._element.querySelector('.group__mask');
    const title = this._element.querySelector('.group__paragraph');
    image.src = this._link;
    image.alt = this._name;
    title.textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}
const templateSelector = '#group-template';
const groups = document.querySelector ('.group');
const createNewCard = (cardData) => {
  const card = new Card(cardData, templateSelector);
  const cardElement = card.generateCard();
  cardElement.querySelector('.group__mask').addEventListener('click', () => {
    openPopupImage(cardData);
  });
  return cardElement;
};
export const addCard = (cardData) => {
  const newCard = createNewCard(cardData);
  groups.prepend(newCard);
};
initialCards.forEach((cardData) => {
  addCard(cardData);
});
