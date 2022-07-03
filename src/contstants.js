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

export const commonPlaceConfig = {
  selectorTemplate: '#place',
  selectorPlace: '.place',
  getSelectorImage() {
    return `${this.selectorPlace}__image`;
  },
  getSelectorLink() {
    return `${this.selectorPlace}__link`;
  },
  getSelectorLike() {
    return `${this.selectorPlace}__like`;
  },
  getClassNameLiked() {
    return `${this.selectorPlace.slice(1)}__like_liked`;
  },
  getSelectorLikeCount() {
    return `${this.selectorPlace}__like-count`;
  },
  getSelectorRemove() {
    return `${this.selectorPlace}__remove`;
  },
  // getSelectorImage: (classNamePlace) => `.${classNamePlace}__image`,
  // getSelectorLink: (classNamePlace) => `.${classNamePlace}__link`,
  // getSelectorLike: (classNamePlace) => `.${classNamePlace}__like`,
  // getSelectorLikeCount: (classNamePlace) => `.${classNamePlace}__like-count`,
  // getSelectorRemove: (classNamePlace) => `.${classNamePlace}__remove`,
};

export const keyboardKeyNameMap = {
  escape: ['escape', 'esc'],
};
