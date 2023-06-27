export default class Card {
  constructor(data, templateSelector, handleCardClick, handleDeleteCard, changeLikes) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._myId = data.myId;
    this._cardId = data._id;
    this._likes = data.likes;
    this._likesLength = data.likes.length;
    this._ownerId = data.owner && data.owner._id ? data.owner._id : null;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick.bind(this);
    this._handleDeleteCard = handleDeleteCard.bind(this);
    this._changeLikes = changeLikes.bind(this);
  }
  _getTemplate() {
    const templateElement = document.querySelector(this._templateSelector);
    const cardElement = templateElement.content.querySelector('.group__element').cloneNode(true);
    this._cardElement = cardElement;
    return cardElement;
  }
  _handleDeleteClick() {
    this._handleDeleteCard({ card: this, cardId: this._cardId });
  }
  _handleLikeClick() {
    const isLiked = this._likeButton.classList.contains('group__vector_active');
    this._changeLikes(isLiked, this._cardId);
  }
  _handleImageClick() {
    this._handleCardClick({ name: this._name, link: this._link });
  }
  _deleteBtn() {
    if (this._myId !== this._ownerId) {
      this._deleteButton.remove();
    }
  }
  _checkStatusLikes() {
    if (this._likes.some(item => item._id === this._myId)) {
      this._likeButton.classList.add('group__vector_active');
    }
    this._counterLikes.textContent = this._likesLength;
  }
  toggleLikes(likes) {
    this._likeButton.classList.toggle('group__vector_active');
    this._counterLikes.textContent = likes.length;
  }
  removeCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }
  _setEventListeners() {
    this._deleteButton.addEventListener('click', () => {
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
    this._deleteButton = this._element.querySelector('.group__delite');
    this._counterLikes = this._element.querySelector('.group__counter_likes');
    const title = this._element.querySelector('.group__paragraph');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    title.textContent = this._name;
    this._cardImage.style.cursor = 'pointer';
    this._deleteBtn();
    this._checkStatusLikes();
    this._setEventListeners();
    return this._element;
  }
}
