export const appConfig = {
  apiMestoBaseURL: 'https://mesto.nomoreparties.co/v1',
  apiMestoCohort: 'cohort-42',
  apiMestoToken: '622cedbc-a041-41b2-ac81-42db94da4679',
};

export const commonFormConfig = {
  selectorField: '.form__item',
  selectorSubmit: '.form__submit',
  classNameFieldInvalid: 'form__item_invalid',
  getSelectorErrorTextContainer: (fieldName) => `.form__item-error_field_${fieldName}`,
};

export const commonPopupConfig = {
  selectorCloseButton: '.popup__close',
  classNamePopupOpened: 'popup_opened',
  classNameContainer: 'popup__container',
};

export const keyboardKeyNameMap = {
  escape: ['escape', 'esc'],
};
