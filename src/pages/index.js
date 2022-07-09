import './index.css';
// eslint-disable-next-line
import avatarImage from '../images/avatar.jpg';
// eslint-disable-next-line
import faviconImage from '../images/favicon.ico';

// helpers
import {
  commonFormConfig,
  commonPopupConfig,
  commonPlaceConfig,
  appConfig,
  // eslint-disable-next-line
  dataJSON,
} from '../utils/constants.js';
import { Api } from '../components/Api.js';

// components
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/Popup/PopupWithImage.js';
import { PopupWithForm } from '../components/Popup/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/Popup/PopupWithConfirmation.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';

const catchError = (err) => {
  alert(err.message);
};
const catchFormError = (form) => (err) => {
  form.enableForm();
  catchError(err);
};

/* app */
const run = (appData, serviceApiMesto) => {
  /* popups */
  const elementPopupAddPlace = document.querySelector('.popup_type_add-place');
  const elementPopupEditProfile = document.querySelector('.popup_type_edit-profile');
  const elementPopupEditAvatar = document.querySelector('.popup_type_edit-avatar');
  const elementPopupPreviewImage = document.querySelector('.popup_type_preview');
  const elementPopupConfirm = document.querySelector('.popup_type_confirm');

  /* place */
  const elementPlacesList = document.querySelector('.places__list');
  const formConfirm = new FormValidator(commonFormConfig, document.forms.confirm);
  formConfirm.enableValidation();

  const popupConfirmRemovePlace = new PopupWithConfirmation(
    commonPopupConfig,
    elementPopupConfirm,
    commonFormConfig,
    {
      onOpen: () => {
        formConfirm.enableSubmitButton();
      },
    },
  );
  const popupPreviewImage = new PopupWithImage(
    commonPopupConfig,
    elementPopupPreviewImage,
    {
      selectorImageContainer: '.popup-preview__image',
      selectorTextContainer: '.popup-preview__text',
    },
  );

  const createPlace = (placeData) => {
    placeData.removable = placeData.owner._id === appData.profile._id;
    placeData.liked = placeData.likes
      .some((liker) => liker._id === appData.profile._id);

    const place = new Card(placeData, commonPlaceConfig, {
      onClick: (currentPlaceData) => {
        popupPreviewImage.open(currentPlaceData);
      },
      onRemove: (currentPlaceData, removeCallback) => {
        const sendRemoveRequest = () => serviceApiMesto
          .removePlace({
            cardId: currentPlaceData._id,
          })
          .then(() => {
            popupConfirmRemovePlace.close();
            removeCallback();
          })
          .catch(catchFormError(formConfirm));

        popupConfirmRemovePlace.setConfirmAction(sendRemoveRequest);
        popupConfirmRemovePlace.open();
      },
      onLike: (currentPlaceData, likeCallback) => {
        serviceApiMesto
          .likePlace({
            cardId: currentPlaceData._id,
            liked: currentPlaceData.liked,
          })
          .then((updatedPlace) => likeCallback(updatedPlace.likes))
          .catch(catchError);
      },
    });
    return place.getElement();
  };
  const placesList = new Section({
    items: appData.places,
    renderer: (placeData) => placesList.addItem(createPlace(placeData)),
  }, elementPlacesList);

  /* add place */
  const buttonAddPlace = document.querySelector('.profile__add-place');
  const formAddPlace = new FormValidator(commonFormConfig, document.forms.place);
  formAddPlace.enableValidation();

  const popupAddPlace = new PopupWithForm(
    commonPopupConfig,
    elementPopupAddPlace,
    commonFormConfig,
    {
      onOpen: () => {
        formAddPlace.resetForm();
        formAddPlace.disableSubmitButton('');
      },
      onSubmit: (placeSourceData) => serviceApiMesto
        .createPlace(placeSourceData)
        .then((placeData) => {
          popupAddPlace.close();
          placesList.addItem(createPlace(placeData));
          formAddPlace.resetForm();
        })
        .catch(catchFormError(formAddPlace)),
    },
  );

  buttonAddPlace.addEventListener('click', () => {
    popupAddPlace.open();
  });

  /* edit profile */
  const buttonEditProfile = document.querySelector('.profile__edit');
  const elementPageTitle = document.querySelector('head > title');
  const elementProfileTitle = document.querySelector('.profile__title');
  const elementProfileSubtitle = document.querySelector('.profile__subtitle');
  const elementProfileAvatar = document.querySelector('.profile__avatar');
  const elementProfileAvatarContainer = document.querySelector('.profile__avatar-container');
  const profile = new UserInfo(
    elementProfileTitle,
    elementProfileSubtitle,
    elementProfileAvatar,
    elementPageTitle,
  );

  const formEditProfile = new FormValidator(commonFormConfig, document.forms.profile);
  formEditProfile.enableValidation();

  const formEditAvatar = new FormValidator(commonFormConfig, document.forms.avatar);
  formEditAvatar.enableValidation();

  const elementFormEditProfile = formEditProfile.getElement();
  const elementFormEditAvatar = formEditAvatar.getElement();

  const popupEditProfile = new PopupWithForm(
    commonPopupConfig,
    elementPopupEditProfile,
    commonFormConfig,
    {
      onSubmit: (data) => serviceApiMesto
        .setInfo({
          name: data.title,
          about: data.subtitle,
        })
        .then(() => {
          popupEditProfile.close();
          profile.setInfo(data);
        })
        .catch(catchFormError(formEditProfile)),
      onOpen: () => {
        formEditProfile.resetForm();
        const { title, subtitle } = profile.getFullInfo();
        elementFormEditProfile.title.value = title;
        elementFormEditProfile.subtitle.value = subtitle;
      },
    },
  );
  const popupEditAvatar = new PopupWithForm(
    commonPopupConfig,
    elementPopupEditAvatar,
    commonFormConfig,
    {
      onSubmit: (data) => serviceApiMesto
        .setAvatar(data)
        .then(() => {
          popupEditAvatar.close();
          profile.setAvatar(data);
        })
        .catch(catchFormError(formEditAvatar)),
      onOpen: () => {
        formEditAvatar.resetForm();
        const { avatar } = profile.getFullInfo();
        elementFormEditAvatar.avatar.value = avatar;
      },
    },
  );

  buttonEditProfile.addEventListener('click', () => {
    popupEditProfile.open();
  });
  elementProfileAvatarContainer.addEventListener('click', () => {
    popupEditAvatar.open();
  });

  /* run */
  profile.setInfo({
    title: appData.profile.name,
    subtitle: appData.profile.about,
  });
  profile.setAvatar({
    avatar: appData.profile.avatar,
  });
  placesList.render();
};

document.addEventListener('DOMContentLoaded', () => {
  const serviceApiMesto = new Api(appConfig);
  // run(dataJSON, serviceApiMesto); // Фикстура для локальной разработки
  const promises = Promise.all([
    serviceApiMesto.getProfile(),
    serviceApiMesto.getPlaces(),
  ]);
  promises
    .then(([profile, places]) => run({ profile, places }, serviceApiMesto))
    // eslint-disable-next-line
    .catch(catchError);
});
