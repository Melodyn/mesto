const initCards = [
  {
    name: 'Тобольск',
    link: 'images/tobolsk.jpg',
  },
  {
    name: 'Мурманск',
    link: 'images/murmansk.jpg',
  },
  {
    name: 'Ленинградская область',
    link: 'images/leningrad.jpg',
  },
  {
    name: 'Челябинск',
    link: 'images/chelyabynsk.jpg',
  },
  {
    name: 'Алтай',
    link: 'images/altai.jpg',
  },
  {
    name: 'Алматы',
    link: 'images/almaty.jpg',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const popupEl = document.querySelector('.popup');
  const popupContainerEl = popupEl.querySelector('.popup__container');
  const profileTitleEl = document.querySelector('.profile__title');
  const profileSubtitleEl = document.querySelector('.profile__subtitle');

  const closePopupButtonEl = document.querySelector('.popup__close');
  const addPlaceButtonEl = document.querySelector('.profile__place-add');
  const editProfileButtonEl = document.querySelector('.profile__edit');

  const fillPopup = (...elements) => popupContainerEl.append(...elements);
  const openPopup = () => popupEl.classList.add('popup_opened');
  const closePopup = () => {
    popupEl.classList.remove('popup_opened');
    const contentEl = popupEl.querySelector('.popup__content');
    contentEl.remove();
  };
  closePopupButtonEl.addEventListener('click', closePopup);

  const focusHandler = ({ target }) => target.select();

  /* place */
  const previewEl = document
    .querySelector('#popup-preview-image')
    .content
    .querySelector('.popup-preview');
  const previewImageEl = previewEl.querySelector('.popup-preview__image');
  const previewTextEl = previewEl.querySelector('.popup-preview__text');

  const placesListEl = document.querySelector('.places__list');
  const placeTemplateEl = document
    .querySelector('#place')
    .content
    .querySelector('.place');

  const likeCard = (likeEl) => () => {
    if (likeEl.classList.contains('place__like_liked')) {
      likeEl.classList.remove('place__like_liked');
    } else {
      likeEl.classList.add('place__like_liked');
    }
  };

  const removeCard = (cardEl) => () => {
    cardEl.remove();
  };

  const previewCard = (place) => () => {
    previewImageEl.setAttribute('src', place.link);
    previewImageEl.setAttribute('alt', place.name);
    previewTextEl.textContent = place.name;
    fillPopup(previewEl);
    openPopup();
  };

  const createPlace = (containerEl, place) => {
    const placeContainerEl = containerEl.querySelector('.place');
    const imgEl = placeContainerEl.querySelector('.place__image');
    const linkEl = placeContainerEl.querySelector('.place__link');
    const likeEl = placeContainerEl.querySelector('.place__like');
    const removeEl = placeContainerEl.querySelector('.place__remove');

    placeContainerEl.setAttribute('aria-label', place.name);

    imgEl.setAttribute('alt', place.name);
    imgEl.setAttribute('src', place.link);

    linkEl.setAttribute('href', place.link);
    linkEl.textContent = place.name;

    imgEl.addEventListener('click', previewCard(place));
    likeEl.addEventListener('click', likeCard(likeEl));
    removeEl.addEventListener('click', removeCard(containerEl));
  };

  const addPlace = (place) => {
    const liEl = document.createElement('li');
    const placeEl = placeTemplateEl.cloneNode(true);
    liEl.append(placeEl);
    createPlace(liEl, place);
    placesListEl.prepend(liEl);
  };

  /* edit profile */
  const editProfileFormEl = document
    .querySelector('#popup-form-edit-profile')
    .content
    .querySelector('.popup-form');

  const profileEditHandler = () => {
    editProfileFormEl.title.value = profileTitleEl.textContent;
    editProfileFormEl.subtitle.value = profileSubtitleEl.textContent;
    fillPopup(editProfileFormEl);
    openPopup();
    editProfileFormEl.title.focus();
  };

  const submitProfileHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    editProfileFormEl.title.setAttribute('disabled', 'disabled');
    editProfileFormEl.subtitle.setAttribute('disabled', 'disabled');
    editProfileFormEl.submit.setAttribute('disabled', 'disabled');

    const title = formData.get('title');
    const subtitle = formData.get('subtitle');

    profileTitleEl.textContent = title.trim();
    profileSubtitleEl.textContent = subtitle.trim();

    closePopup();

    editProfileFormEl.title.removeAttribute('disabled');
    editProfileFormEl.subtitle.removeAttribute('disabled');
    editProfileFormEl.submit.removeAttribute('disabled');
  };

  editProfileFormEl.title.addEventListener('focus', focusHandler);
  editProfileFormEl.subtitle.addEventListener('focus', focusHandler);
  editProfileFormEl.addEventListener('submit', submitProfileHandler);
  editProfileButtonEl.addEventListener('click', profileEditHandler);

  /* add place */
  const addPlaceFormEl = document
    .querySelector('#popup-form-add-place')
    .content
    .querySelector('.popup-form');

  const addPlaceHandler = () => {
    addPlaceFormEl.name.value = '';
    addPlaceFormEl.link.value = '';
    fillPopup(addPlaceFormEl);
    openPopup();
    addPlaceFormEl.name.focus();
  };

  const submitPlaceHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    addPlaceFormEl.name.setAttribute('disabled', 'disabled');
    addPlaceFormEl.link.setAttribute('disabled', 'disabled');
    addPlaceFormEl.submit.setAttribute('disabled', 'disabled');

    const name = formData.get('name').trim();
    const link = formData.get('link').trim();

    closePopup();
    addPlace({ name, link });

    addPlaceFormEl.name.removeAttribute('disabled');
    addPlaceFormEl.link.removeAttribute('disabled');
    addPlaceFormEl.submit.removeAttribute('disabled');
  };

  addPlaceFormEl.name.addEventListener('focus', focusHandler);
  addPlaceFormEl.link.addEventListener('focus', focusHandler);
  addPlaceFormEl.addEventListener('submit', submitPlaceHandler);
  addPlaceButtonEl.addEventListener('click', addPlaceHandler);

  /* run */
  initCards.forEach(addPlace);
});
