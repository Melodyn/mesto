document.addEventListener('DOMContentLoaded', () => {
  const elementProfileTitle = document.querySelector('.profile__title');
  const elementProfileSubtitle = document.querySelector('.profile__subtitle');

  const rootPopupAddPlace = document.querySelector('.popup_type_add-place');
  const rootPopupEditProfile = document.querySelector('.popup_type_edit-profile');
  const rootPopupPreviewImage = document.querySelector('.popup_type_preview');

  const buttonEditProfile = document.querySelector('.profile__edit');
  const buttonAddPlace = document.querySelector('.profile__place-add');

  const openPopup = (elementRootPopup) => elementRootPopup.classList.add('popup_opened');
  const closePopup = (elementRootPopup) => elementRootPopup.classList.remove('popup_opened');

  [
    rootPopupAddPlace,
    rootPopupEditProfile,
    rootPopupPreviewImage,
  ].forEach((popup) => {
    const buttonClosePopup = popup.querySelector('.popup__close');
    buttonClosePopup.addEventListener('click', () => closePopup(popup));
  });

  const focusHandler = ({ target }) => target.select();

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

  /* edit profile */
  const formEditProfile = rootPopupEditProfile.querySelector('.popup-form');

  const profileEditHandler = () => {
    formEditProfile.title.value = elementProfileTitle.textContent;
    formEditProfile.subtitle.value = elementProfileSubtitle.textContent;
    openPopup(rootPopupEditProfile);
    formEditProfile.title.focus();
  };

  const submitProfileHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formEditProfile.title.setAttribute('disabled', 'disabled');
    formEditProfile.subtitle.setAttribute('disabled', 'disabled');
    formEditProfile.submit.setAttribute('disabled', 'disabled');

    const title = formData.get('title');
    const subtitle = formData.get('subtitle');

    elementProfileTitle.textContent = title.trim();
    elementProfileSubtitle.textContent = subtitle.trim();

    closePopup(rootPopupEditProfile);

    formEditProfile.title.removeAttribute('disabled');
    formEditProfile.subtitle.removeAttribute('disabled');
    formEditProfile.submit.removeAttribute('disabled');
  };

  formEditProfile.title.addEventListener('focus', focusHandler);
  formEditProfile.subtitle.addEventListener('focus', focusHandler);
  formEditProfile.addEventListener('submit', submitProfileHandler);
  buttonEditProfile.addEventListener('click', profileEditHandler);

  /* add place */
  const formAddPlace = document.querySelector('.popup-form');

  const addPlaceHandler = () => {
    formAddPlace.name.value = '';
    formAddPlace.link.value = '';
    openPopup(rootPopupAddPlace);
    formAddPlace.name.focus();
  };

  const submitPlaceHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formAddPlace.name.setAttribute('disabled', 'disabled');
    formAddPlace.link.setAttribute('disabled', 'disabled');
    formAddPlace.submit.setAttribute('disabled', 'disabled');

    const name = formData.get('name').trim();
    const link = formData.get('link').trim();

    closePopup(rootPopupAddPlace);
    addPlace({ name, link });

    formAddPlace.name.removeAttribute('disabled');
    formAddPlace.link.removeAttribute('disabled');
    formAddPlace.submit.removeAttribute('disabled');
  };

  formAddPlace.name.addEventListener('focus', focusHandler);
  formAddPlace.link.addEventListener('focus', focusHandler);
  formAddPlace.addEventListener('submit', submitPlaceHandler);
  buttonAddPlace.addEventListener('click', addPlaceHandler);

  /* run */
  initCards.forEach(addPlace);
});
