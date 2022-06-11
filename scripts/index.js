/* forms */
const formsConfig = {
  formSelector: '.form',
  fieldSelector: '.form__item',
  submitSelector: '.form__submit',
  invalidFieldClass: 'form__item_invalid',
  errorTextContainerSelector: (fieldName) => `.form__item-error_field_${fieldName}`,
};
const resetForm = (form) => {
  form.reset();

  const formFields = form.querySelectorAll(formsConfig.fieldSelector);
  formFields.forEach((field) => {
    const errorTextContainerSelector = formsConfig.errorTextContainerSelector(field.name);
    const containerErrorText = form.querySelector(errorTextContainerSelector);

    field.removeAttribute('disabled');
    field.classList.remove(formsConfig.invalidFieldClass);
    containerErrorText.textContent = '';
  });

  form.submit.removeAttribute('disabled');
};

/* popups */
let openedPopup = null;
const openPopup = (rootPopup) => {
  rootPopup.classList.add('popup_opened');
  openedPopup = rootPopup;
};
const closePopup = (rootPopup) => {
  rootPopup.classList.remove('popup_opened');
  openedPopup = null;
};
const closePopupByClick = (popup) => (e) => {
  const targetClassList = e.target.classList;
  if (targetClassList.contains('popup') || targetClassList.contains('popup__container')) {
    closePopup(popup);
  }
};
const closePopupByKey = (e) => {
  if (openedPopup && (e.key === 'Escape' || e.key === 'Escape')) {
    closePopup(openedPopup);
  }
};
const findPopup = (allPopups, className) => allPopups
  .find(({ classList }) => classList.contains(className));

/* app */
document.addEventListener('DOMContentLoaded', () => {
  /* forms */
  enableValidation(formsConfig);

  /* popups */
  const allPopups = Array.from(document.querySelectorAll('.popup'));
  allPopups.forEach((popup) => {
    const buttonClosePopup = popup.querySelector('.popup__close');
    buttonClosePopup.addEventListener('click', () => closePopup(popup));
    popup.addEventListener('click', closePopupByClick(popup));
  });
  document.addEventListener('keydown', closePopupByKey);

  const rootPopupAddPlace = findPopup(allPopups, 'popup_type_add-place');
  const rootPopupEditProfile = findPopup(allPopups, 'popup_type_edit-profile');
  const rootPopupPreviewImage = findPopup(allPopups, 'popup_type_preview');

  /* place */
  const containerImagePreview = rootPopupPreviewImage.querySelector('.popup-preview');
  const elementPreviewImage = containerImagePreview.querySelector('.popup-preview__image');
  const elementPreviewText = containerImagePreview.querySelector('.popup-preview__text');

  const elementPlacesList = document.querySelector('.places__list');
  const elementPlaceTemplate = document
    .querySelector('#place')
    .content
    .querySelector('.place');

  const likeCard = (buttonLike) => () => buttonLike.classList.toggle('place__like_liked');
  const removeCard = (elementCard) => () => elementCard.remove();
  const previewCard = (place) => () => {
    elementPreviewImage.setAttribute('src', place.link);
    elementPreviewImage.setAttribute('alt', place.name);
    elementPreviewText.textContent = place.name;
    openPopup(rootPopupPreviewImage);
  };

  const createPlace = (place) => {
    const elementListItem = document.createElement('li');
    const elementContainer = elementPlaceTemplate.cloneNode(true);
    const elementImg = elementContainer.querySelector('.place__image');
    const elementLink = elementContainer.querySelector('.place__link');
    const buttonLike = elementContainer.querySelector('.place__like');
    const buttonRemove = elementContainer.querySelector('.place__remove');

    elementContainer.setAttribute('aria-label', place.name);
    elementListItem.append(elementContainer);

    elementImg.setAttribute('alt', place.name);
    elementImg.setAttribute('src', place.link);

    elementLink.setAttribute('href', place.link);
    elementLink.textContent = place.name;

    elementImg.addEventListener('click', previewCard(place));
    buttonLike.addEventListener('click', likeCard(buttonLike));
    buttonRemove.addEventListener('click', removeCard(elementListItem));

    return elementListItem;
  };

  const addPlace = (place) => elementPlacesList.prepend(createPlace(place));

  /* add place */
  const formAddPlace = document.forms.place;
  const buttonAddPlace = document.querySelector('.profile__add-place');

  const addPlaceHandler = () => {
    resetForm(formAddPlace);
    formAddPlace.submit.setAttribute('disabled', 'disabled');
    openPopup(rootPopupAddPlace);
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
    resetForm(formEditProfile);
    formEditProfile.title.value = elementProfileTitle.textContent;
    formEditProfile.subtitle.value = elementProfileSubtitle.textContent;
    openPopup(rootPopupEditProfile);
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
  initCards.forEach(addPlace);
});
