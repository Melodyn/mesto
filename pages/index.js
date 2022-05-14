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
  const formEl = popupEl.querySelector('.popup-form');
  const buttonEls = document.querySelectorAll('.button');
  const profileTitleEl = document.querySelector('.profile__title');
  const profileSubtitleEl = document.querySelector('.profile__subtitle');

  const profileEditHandler = () => {
    formEl.title.value = profileTitleEl.textContent;
    formEl.subtitle.value = profileSubtitleEl.textContent;
    popupEl.classList.add('popup_opened');
    formEl.title.focus();
  };

  const closePopupHandler = () => {
    popupEl.classList.remove('popup_opened');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const subtitle = formData.get('subtitle');

    profileTitleEl.textContent = title.trim();
    profileSubtitleEl.textContent = subtitle.trim();

    popupEl.classList.remove('popup_opened');
  };

  const focusHandler = ({ target }) => target.select();

  const defaultClickHandler = (e) => {
    e.preventDefault();
    alert('Папався! 🦀');
  };

  formEl.title.addEventListener('focus', focusHandler);
  formEl.subtitle.addEventListener('focus', focusHandler);
  formEl.addEventListener('submit', submitHandler);

  buttonEls.forEach((button) => {
    const { classList, type } = button;
    if (type !== 'submit') {
      switch (true) {
        case classList.contains('profile__edit'):
          button.addEventListener('click', profileEditHandler);
          break;
        case classList.contains('popup__close'):
          button.addEventListener('click', closePopupHandler);
          break;
        case classList.contains('place__like'):
          // button.addEventListener('click', likeHandler(button));
          break;
        default:
          button.addEventListener('click', defaultClickHandler);
          break;
      }
    }
  });

  /* place */
  const placesListEl = document.querySelector('.places__list');
  const placeTemplateEl = document
    .querySelector('#place')
    .content
    .querySelector('.place');

  const likeHandler = (likeEl) => () => {
    if (likeEl.classList.contains('place__like_liked')) {
      likeEl.classList.remove('place__like_liked');
    } else {
      likeEl.classList.add('place__like_liked');
    }
  };

  const removeHandler = (cardEl) => () => {
    cardEl.remove();
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

    likeEl.addEventListener('click', likeHandler(likeEl));
    removeEl.addEventListener('click', removeHandler(containerEl));
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
});
