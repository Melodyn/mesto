import { Popup } from './Popup.js';

export class PopupWithConfirmation extends Popup {
  constructor(commonSelector, elementPopup, { selectorConfirm }) {
    super(commonSelector, elementPopup);
    this._element = {
      confirm: elementPopup.querySelector(selectorConfirm),
    };
    this._confirmAction = () => {};
    this._setEventListeners();
  }

  disableConfirmButton() {
    this._element.confirm.setAttribute('disabled', 'disabled');
  }

  enableConfirmButton() {
    this._element.confirm.removeAttribute('disabled');
  }

  _setEventListeners() {
    this._element.confirm.addEventListener('click', () => {
      this.disableConfirmButton();
      this._confirmAction();
    });
    super._setEventListeners();
  }

  open() {
    this.enableConfirmButton();
    super.open();
  }

  setConfirmAction(action) {
    this._confirmAction = action;
  }
}
