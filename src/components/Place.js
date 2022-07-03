export class Place {
  constructor(placeData, config, handler) {
    this._place = placeData;
    this._config = config;
    this._imageClickHandler = handler.onClick;
    this._placeRemoveHandler = handler.onRemove;
    this._template = this._getTemplate();
    this._element = this._createElement();
    this._setListeners();
  }

  _getTemplate() {
    return document
      .querySelector(this._config.selectorTemplate)
      .content
      .firstElementChild;
  }

  _createElement() {
    const { name, link, likeCount } = this._place;
    const config = this._config;
    const element = {
      container: null,
      place: null,
      image: null,
      link: null,
      like: null,
      remove: null,
      likeCount: null,
    };

    element.container = this._template.cloneNode(true);
    element.place = element.container.querySelector(config.selectorPlace);
    element.image = element.place.querySelector(config.getSelectorImage());
    element.link = element.place.querySelector(config.getSelectorLink());
    element.like = element.place.querySelector(config.getSelectorLike());
    element.likeCount = element.place.querySelector(config.getSelectorLikeCount());
    element.remove = element.place.querySelector(config.getSelectorRemove());

    element.place.setAttribute('aria-label', name);
    element.image.setAttribute('alt', name);
    element.image.setAttribute('src', link);
    element.link.setAttribute('href', link);
    element.link.textContent = name;
    element.likeCount.textContent = likeCount;

    return element;
  }

  _setListeners() {
    this._element.like.addEventListener('click', () => {
      this._handlerLike();
    });

    this._element.remove.addEventListener('click', () => {
      this._placeRemoveHandler(() => this._handlerRemove());
    });

    this._element.image.addEventListener('click', () => {
      this._imageClickHandler(this._place);
    });
  }

  _incrementLikeCount() {
    this._place.likeCount += 1;
    this._element.likeCount.textContent = this._place.likeCount;
  }

  _handlerLike() {
    const classNameLiked = this._config.getClassNameLiked();
    this._element.like.classList.toggle(classNameLiked);
    if (this._element.like.classList.contains(classNameLiked)) {
      this._incrementLikeCount();
    }
  }

  _handlerRemove() {
    this._element.container.remove();
    this._element = {};
  }

  toElement() {
    return this._element.container;
  }
}
