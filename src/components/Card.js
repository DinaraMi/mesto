export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }
  _getTemplate() {
    const templateElement = document.querySelector(this._templateSelector);
    const cardElement = templateElement.content.querySelector('.group__element').cloneNode(true);
    return cardElement;
  }
  _handleDeleteClick() {
    this._element.remove();
  }
  _handleLikeClick() {
    this._likeButton.classList.toggle('group__vector_active');
  }
  _handleImageClick() {
    this._handleCardClick({ name: this._name, link: this._link });
  }
  _setEventListeners() {
    const deleteButton = this._element.querySelector('.group__delite');
    deleteButton.addEventListener('click', () => {
      this._handleDeleteClick();
    });
    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._cardImage.addEventListener('click', () => {
      this._handleImageClick();
    });
  }
  generateCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.group__vector');
    this._cardImage = this._element.querySelector('.group__mask');
    const title = this._element.querySelector('.group__paragraph');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    title.textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}
