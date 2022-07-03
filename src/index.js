import './pages/index.css';
import {
  commonFormConfig,
  commonPopupConfig,
  commonPlaceConfig,
  appConfig,
  // eslint-disable-next-line
  dataJSON,
} from './utils/contstants.js';
import { FormValidator } from './components/FormValidator.js';
import { Place } from './components/Place.js';
import { PopupWithImage } from './components/Popup/PopupWithImage.js';
import { PopupWithForm } from './components/Popup/PopupWithForm.js';
import { PopupConfirm } from './components/Popup/PopupConfirm.js';
import { Profile } from './components/Profile.js';
import { Section } from './components/Section.js';
import { ApiMesto } from './utils/ApiMesto.js';

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
  const popupConfirmRemovePlace = new PopupConfirm(
    commonPopupConfig,
    elementPopupConfirm,
    {
      selectorConfirm: '.popup-confirm__button_action_confirm',
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
    const place = new Place(placeData, commonPlaceConfig, {
      onClick: (currentPlaceData) => {
        popupPreviewImage.open(currentPlaceData);
      },
      onRemove: (removeCallback) => {
        popupConfirmRemovePlace.setConfirmAction(removeCallback);
        popupConfirmRemovePlace.open();
      },
      onLike: (currentPlaceData, likeCallback) => {
        serviceApiMesto
          .like({
            cardId: currentPlaceData._id,
            liked: currentPlaceData.liked,
          })
          .then((updatedPlace) => likeCallback(updatedPlace.likes));
      },
    });
    return place.toElement();
  };
  const placesList = new Section({
    items: appData.places.map((place) => {
      place.removable = place.owner._id === appData.profile._id;
      place.liked = place.likes
        .some((liker) => liker._id === appData.profile._id);
      return place;
    }),
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
    formAddPlace,
    {
      onSubmit: (placeData) => placesList.addItem(createPlace(placeData)),
      onClose: () => formAddPlace.disableSubmitButton(),
    },
  );

  buttonAddPlace.addEventListener('click', () => {
    popupAddPlace.open();
  });

  /* edit profile */
  const buttonEditProfile = document.querySelector('.profile__edit');
  const elementProfileTitle = document.querySelector('.profile__title');
  const elementProfileSubtitle = document.querySelector('.profile__subtitle');
  const elementProfileAvatar = document.querySelector('.profile__avatar');
  const elementProfileAvatarContainer = document.querySelector('.profile__avatar-container');
  const profile = new Profile(elementProfileTitle, elementProfileSubtitle, elementProfileAvatar);

  const formEditProfile = new FormValidator(commonFormConfig, document.forms.profile);
  formEditProfile.enableValidation();

  const formEditAvatar = new FormValidator(commonFormConfig, document.forms.avatar);
  formEditAvatar.enableValidation();

  const elementFormEditProfile = formEditProfile.toElement();
  const elementFormEditAvatar = formEditAvatar.toElement();

  const popupEditProfile = new PopupWithForm(
    commonPopupConfig,
    elementPopupEditProfile,
    commonFormConfig,
    formEditProfile,
    {
      onSubmit: (data) => profile.setInfo(data),
      onOpen: () => {
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
    formEditAvatar,
    {
      onSubmit: (data) => profile.setAvatar(data),
      onOpen: () => {
        const { avatar } = profile.getFullInfo();
        elementFormEditAvatar.link.value = avatar;
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
    link: appData.profile.avatar,
  });
  placesList.render();
};

document.addEventListener('DOMContentLoaded', () => {
  const serviceApiMesto = new ApiMesto(appConfig);
  // run(dataJSON, serviceApiMesto);
  serviceApiMesto.getProfile()
    .then((profile) => serviceApiMesto
      .getPlaces()
      .then((places) => ({ profile, places })))
    .then((data) => run(data, serviceApiMesto))
    // eslint-disable-next-line
    .catch((err) => alert(err.message));
});
