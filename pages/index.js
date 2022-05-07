document.addEventListener('DOMContentLoaded', () => {
  const popupEl = document.querySelector('.popup');
  const buttonEls = document.querySelectorAll('.button');
  const getProfileTitleEl = () => document.querySelector('.profile__title-text');
  const getProfileSubtitleEl = () => document.querySelector('.profile__subtitle');
  const formEl = popupEl.querySelector('.popup-form');

  const profileEditHandler = () => {
    const profileTitleEl = getProfileTitleEl();
    const profileSubtitleEl = getProfileSubtitleEl();
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

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const subtitle = formData.get('subtitle');

    const profileTitleEl = getProfileTitleEl();
    const profileSubtitleEl = getProfileSubtitleEl();
    profileTitleEl.textContent = title;
    profileSubtitleEl.textContent = subtitle;

    popupEl.classList.remove('popup_opened');
  });

  buttonEls.forEach((button) => {
    const { classList, type } = button;
    switch (type !== 'submit') {
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
        button.addEventListener('click', (e) => {
          e.preventDefault();
          alert('Папався! 🦀');
        });
        break;
    }
  });
});
