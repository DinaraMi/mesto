export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  addItem(element) {
    this._container.prepend(element);
  }
  renderInitialItems(items) {
    items.forEach(item => {
      const cardElement = this._renderer(item);
      this.addItem(cardElement);
    });
  }
}
