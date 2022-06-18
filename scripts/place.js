export class Place {
  constructor(placeData, templateSelector) {
    this._place = placeData;
    this._templateSelector = templateSelector;
    this._template = this._getTemplate();
    this._element = this._createElement();
    this._setListeners();
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .firstElementChild;
  }

  _createElement() {
    const selector = this._templateSelector.slice(1);
    const { name, link } = this._place;
    const element = {
      container: null,
      place: null,
      image: null,
      link: null,
      like: null,
      remove: null,
    };

    element.container = this._template.cloneNode(true);
    element.place = element.container.querySelector(`.${selector}`);
    element.image = element.place.querySelector(`.${selector}__image`);
    element.link = element.place.querySelector(`.${selector}__link`);
    element.like = element.place.querySelector(`.${selector}__like`);
    element.remove = element.place.querySelector(`.${selector}__remove`);

    element.place.setAttribute('aria-label', name);
    element.image.setAttribute('alt', name);
    element.image.setAttribute('src', link);
    element.link.setAttribute('href', link);
    element.link.textContent = name;

    return element;
  }

  _setListeners() {
    this._element.like.addEventListener('click', () => {
      this._handlerLike();
    });

    this._element.remove.addEventListener('click', () => {
      this._handlerRemove();
    });
  }

  _handlerLike() {
    const selector = this._templateSelector.slice(1);
    this._element.like.classList.toggle(`.${selector}__like_liked`);
  }

  _handlerRemove() {
    this._element.container.remove();
  }

  toElement() {
    return this._element.container;
  }
}
