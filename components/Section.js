export class Section {
  constructor({ items, renderer }, selectorContainer) {
    this._items = items;
    this._renderer = renderer;
    this._elementContainer = document.querySelector(selectorContainer);
  }

  clear() {
    this._elementContainer.innerHTML = '';
  }

  render() {
    this.clear();
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._elementContainer.append(element);
  }
}
