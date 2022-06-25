import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(commonSelector, elementPopup, commonSelectorForm, form, handler) {
    super(commonSelector, elementPopup);

    this._form = form;
    this._elementForm = form.toElement();
    this._elementFields = Array.from(this
      ._elementForm
      .querySelectorAll(commonSelectorForm.selectorField));

    this._onOpenHandler = handler.onOpen || (() => {});
    this._onCloseHandler = handler.onClose || (() => {});
    this._onSubmitHandler = handler.onSubmit || (() => {});

    this._setEventListeners();
  }

  _getInputValues() {
    return this._elementFields.reduce((acc, elementField) => {
      acc[elementField.name] = elementField.value;
      return acc;
    }, {});
  }

  _setEventListeners() {
    this._elementForm.addEventListener('submit', () => {
      this._onSubmitHandler(this._getInputValues());
      this.close();
    });
    super._setEventListeners();
  }

  close() {
    this._form.reset();
    this._onCloseHandler();
    super.close();
  }

  open() {
    this._onOpenHandler();
    super.open();
  }
}
