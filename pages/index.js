const initCards = [
  {
    name: 'Алматы',
    link: 'images/almaty.jpg',
  },
  {
    name: 'Алтай',
    link: 'images/altai.jpg',
  },
  {
    name: 'Челябинск',
    link: 'images/chelyabynsk.jpg',
  },
  {
    name: 'Ленинградская область',
    link: 'images/leningrad.jpg',
  },
  {
    name: 'Мурманск',
    link: 'images/murmansk.jpg',
  },
  {
    name: 'Тобольск',
    link: 'images/tobolsk.jpg',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const popupEl = document.querySelector('.popup');
  const popupContainerEl = popupEl.querySelector('.popup__container');
  const buttonEls = document.querySelectorAll('.button');
  const profileTitleEl = document.querySelector('.profile__title');
  const profileSubtitleEl = document.querySelector('.profile__subtitle');

  const fillPopup = (...elements) => popupContainerEl.append(...elements);
  const openPopup = () => popupEl.classList.add('popup_opened');
  const closePopup = () => {
    popupEl.classList.remove('popup_opened');
    const contentEl = popupEl.querySelector('.popup__content');
    contentEl.remove();
  };

  const focusHandler = ({ target }) => target.select();

  const defaultClickHandler = (e) => {
    e.preventDefault();
    alert('Папався! 🦀');
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
    const title = formData.get('title');
    const subtitle = formData.get('subtitle');

    profileTitleEl.textContent = title.trim();
    profileSubtitleEl.textContent = subtitle.trim();

    closePopup();
  };

  editProfileFormEl.title.addEventListener('focus', focusHandler);
  editProfileFormEl.subtitle.addEventListener('focus', focusHandler);
  editProfileFormEl.addEventListener('submit', submitProfileHandler);

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
    placesListEl.append(liEl);
  };

  /* run */
  initCards.forEach(addPlace);

  buttonEls.forEach((button) => {
    const { classList, type } = button;
    if (type !== 'submit') {
      switch (true) {
        case classList.contains('profile__edit'):
          button.addEventListener('click', profileEditHandler);
          break;
        case classList.contains('popup__close'):
          button.addEventListener('click', closePopup);
          break;
        case classList.contains('place__like'):
          break;
        default:
          button.addEventListener('click', defaultClickHandler);
          break;
      }
    }
  });
});
