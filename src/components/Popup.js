export class Popup {
  constructor({ selectorCloseButton, classNamePopupOpened }, elementPopup) {
    this._elementPopup = elementPopup;
    this._classNamePopupOpened = classNamePopupOpened;
    this._buttonClosePopup = this._elementPopup.querySelector(selectorCloseButton);
    this._bindedHandlerEscClose = this._handleEscClose.bind(this);
    this._bindedHandlerOverlayClose = this._handleOverlayClose.bind(this);
    this._elementPopup.removeAttribute('style'); // хак, чтобы попапы не показывались при открытии страницы
  }

  _handleEscClose(e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      this.close();
    }
  }

  _handleOverlayClose(e) {
    if (e.currentTarget === e.target) {
      this.close();
    }
  }

  _setEventListeners() {
    this._buttonClosePopup.addEventListener('click', this.close.bind(this));
  }

  close() {
    document.removeEventListener('keydown', this._bindedHandlerEscClose);
    this._elementPopup.removeEventListener('click', this._bindedHandlerOverlayClose);
    this._elementPopup.classList.remove(this._classNamePopupOpened);
  }

  open() {
    document.addEventListener('keydown', this._bindedHandlerEscClose);
    this._elementPopup.addEventListener('click', this._bindedHandlerOverlayClose);
    this._elementPopup.classList.add(this._classNamePopupOpened);
  }

  toElement() {
    return this._elementPopup;
  }
}
