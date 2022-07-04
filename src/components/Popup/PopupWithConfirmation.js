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

  _setEventListeners() {
    this._element.confirm.addEventListener('click', () => {
      this._confirmAction();
    });
    super._setEventListeners();
  }

  setConfirmAction(action) {
    this._confirmAction = action;
  }
}
