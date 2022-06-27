export const commonFormConfig = {
  selectorField: '.form__item',
  selectorSubmit: '.form__submit',
  classNameFieldInvalid: 'form__item_invalid',
  getSelectorErrorTextContainer: (fieldName) => `.form__item-error_field_${fieldName}`,
};

export const commonPopupConfig = {
  selectorCloseButton: '.popup__close',
  classNamePopupOpened: 'popup_opened',
};

export const keyboardKeyNameMap = {
  escape: ['escape', 'esc'],
};
