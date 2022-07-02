import { Popup } from './Popup.js';

export class PopupConfirm extends Popup {
  constructor(commonSelector, elementPopup) {
    super(commonSelector, elementPopup);
    super._setEventListeners();
  }
}
