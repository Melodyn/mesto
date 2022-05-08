document.addEventListener('DOMContentLoaded', () => {
  const popupEl = document.querySelector('.popup');
  const buttonEls = document.querySelectorAll('.button');
  const profileTitleEl = document.querySelector('.profile__title');
  const profileSubtitleEl = document.querySelector('.profile__subtitle');
  const formEl = popupEl.querySelector('.popup-form');

  const profileEditHandler = () => {
    formEl.title.value = profileTitleEl.textContent;
    formEl.subtitle.value = profileSubtitleEl.textContent;
    popupEl.classList.add('popup_opened');
    formEl.title.focus();
  };

  const closePopupHandler = () => {
    popupEl.classList.remove('popup_opened');
  };

  const likeHandler = (buttonEl) => () => {
    if (buttonEl.classList.contains('place__like_liked')) {
      buttonEl.classList.remove('place__like_liked');
    } else {
      buttonEl.classList.add('place__like_liked');
    }
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
          button.addEventListener('click', likeHandler(button));
          break;
        default:
          button.addEventListener('click', defaultClickHandler);
          break;
      }
    }
  });
});
