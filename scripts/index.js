import { initPlaces } from '../vendor/places.js';
import { Place } from './place.js';
import { enableValidation, resetForm } from './validate.js';

/* forms */
const formsConfig = {
  formSelector: '.form',
  fieldSelector: '.form__item',
  submitSelector: '.form__submit',
  invalidFieldClass: 'form__item_invalid',
  errorTextContainerSelector: (fieldName) => `.form__item-error_field_${fieldName}`,
};

/* popups */
const openPopup = (rootPopup, keyHandler, clickHandler) => {
  document.addEventListener('keydown', (e) => {
    keyHandler(e, rootPopup, keyHandler, clickHandler);
  });
  rootPopup.addEventListener('click', clickHandler);
  rootPopup.classList.add('popup_opened');
};
const closePopup = (rootPopup, keyHandler, clickHandler) => {
  document.removeEventListener('keydown', keyHandler);
  rootPopup.removeEventListener('click', clickHandler);
  rootPopup.classList.remove('popup_opened');
};
const closePopupByClick = (e, popup, ...handlers) => {
  const targetClassList = e.target.classList;
  if (targetClassList.contains('popup') || targetClassList.contains('popup__container')) {
    closePopup(popup, ...handlers);
  }
};
const closePopupByKey = (e, popup, ...handlers) => {
  if (e.key === 'Escape' || e.key === 'Escape') {
    closePopup(popup, ...handlers);
  }
};

/* app */
document.addEventListener('DOMContentLoaded', () => {
  /* forms */
  enableValidation(formsConfig);

  /* popups */
  const allPopups = Array.from(document.querySelectorAll('.popup'));
  allPopups.forEach((popup) => {
    const buttonClosePopup = popup.querySelector('.popup__close');
    buttonClosePopup.addEventListener('click', () => {
      closePopup(popup, closePopupByKey, closePopupByClick);
    });
    popup.addEventListener('click', (e) => {
      closePopupByClick(e, popup, closePopupByKey, closePopupByClick);
    });
  });

  const rootPopupAddPlace = document.querySelector('.popup_type_add-place');
  const rootPopupEditProfile = document.querySelector('.popup_type_edit-profile');
  const rootPopupPreviewImage = document.querySelector('.popup_type_preview');

  /* place */
  const containerImagePreview = rootPopupPreviewImage.querySelector('.popup-preview');
  const elementPreviewImage = containerImagePreview.querySelector('.popup-preview__image');
  const elementPreviewText = containerImagePreview.querySelector('.popup-preview__text');

  const elementPlacesList = document.querySelector('.places__list');
  const previewPlace = (place) => () => {
    elementPreviewImage.setAttribute('src', place.link);
    elementPreviewImage.setAttribute('alt', place.name);
    elementPreviewText.textContent = place.name;
    openPopup(rootPopupPreviewImage, closePopupByKey, closePopupByClick);
  };

  const createPlace = (placeData) => {
    const place = new Place(placeData, '#place');
    const elementPlace = place.toElement();

    const elementPlaceImage = elementPlace.querySelector('.place__image');
    elementPlaceImage.addEventListener('click', previewPlace(placeData));

    return elementPlace;
  };

  const addPlace = (place) => elementPlacesList.prepend(createPlace(place));

  /* add place */
  const formAddPlace = document.forms.place;
  const buttonAddPlace = document.querySelector('.profile__add-place');

  const addPlaceHandler = () => {
    resetForm(formsConfig, formAddPlace);
    formAddPlace.submit.setAttribute('disabled', 'disabled');
    openPopup(rootPopupAddPlace, closePopupByKey, closePopupByClick);
    formAddPlace.name.focus();
  };

  const submitPlaceHandler = () => {
    const name = formAddPlace.name.value;
    const link = formAddPlace.link.value;

    closePopup(rootPopupAddPlace);
    addPlace({ name, link });
  };

  formAddPlace.addEventListener('submit', submitPlaceHandler);
  buttonAddPlace.addEventListener('click', addPlaceHandler);

  /* edit profile */
  const formEditProfile = document.forms.profile;
  const buttonEditProfile = document.querySelector('.profile__edit');
  const elementProfileTitle = document.querySelector('.profile__title');
  const elementProfileSubtitle = document.querySelector('.profile__subtitle');

  const profileEditHandler = () => {
    resetForm(formsConfig, formEditProfile);
    formEditProfile.title.value = elementProfileTitle.textContent;
    formEditProfile.subtitle.value = elementProfileSubtitle.textContent;
    openPopup(rootPopupEditProfile, closePopupByKey, closePopupByClick);
    formEditProfile.title.focus();
  };

  const submitProfileHandler = () => {
    const title = formEditProfile.title.value;
    const subtitle = formEditProfile.subtitle.value;

    elementProfileTitle.textContent = title.trim();
    elementProfileSubtitle.textContent = subtitle.trim();

    closePopup(rootPopupEditProfile);
  };

  formEditProfile.addEventListener('submit', submitProfileHandler);
  buttonEditProfile.addEventListener('click', profileEditHandler);

  /* run */
  initPlaces.forEach(addPlace);
});
