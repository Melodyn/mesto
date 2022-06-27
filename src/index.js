import './pages/index.css';
import { initPlaces } from './vendor/places.js';
import { commonFormConfig, commonPopupConfig } from './utils.js';
import { FormValidator } from './components/FormValidator.js';
import { Place } from './components/Place.js';
import { PopupWithImage } from './components/PopupWithImage.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { PlaceInfo } from './components/PlaceInfo.js';
import { Section } from './components/Section.js';

/* app */
document.addEventListener('DOMContentLoaded', () => {
  /* popups */
  const elementPopupAddPlace = document.querySelector('.popup_type_add-place');
  const elementPopupEditProfile = document.querySelector('.popup_type_edit-profile');
  const elementPopupPreviewImage = document.querySelector('.popup_type_preview');

  /* place */
  const elementPlacesList = document.querySelector('.places__list');
  const popupPreviewImage = new PopupWithImage(
    commonPopupConfig,
    elementPopupPreviewImage,
    {
      selectorImageContainer: '.popup-preview__image',
      selectorTextContainer: '.popup-preview__text',
    },
  );
  const previewPlace = popupPreviewImage.open.bind(popupPreviewImage);

  const createPlace = (placeData) => {
    const place = new Place(placeData, '#place', previewPlace);
    return place.toElement();
  };
  const placesList = new Section({
    items: initPlaces,
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

  buttonAddPlace.addEventListener('click', popupAddPlace.open.bind(popupAddPlace));

  /* edit profile */
  const buttonEditProfile = document.querySelector('.profile__edit');
  const elementProfileTitle = document.querySelector('.profile__title');
  const elementProfileSubtitle = document.querySelector('.profile__subtitle');
  const placeInfo = new PlaceInfo(elementProfileTitle, elementProfileSubtitle);

  const formEditProfile = new FormValidator(commonFormConfig, document.forms.profile);
  formEditProfile.enableValidation();

  const elementFormEditProfile = formEditProfile.toElement();
  const popupEditProfile = new PopupWithForm(
    commonPopupConfig,
    elementPopupEditProfile,
    commonFormConfig,
    formEditProfile,
    {
      onSubmit: placeInfo.setUserInfo.bind(placeInfo),
      onOpen: () => {
        const { title, subtitle } = placeInfo.getUserInfo();
        elementFormEditProfile.title.value = title;
        elementFormEditProfile.subtitle.value = subtitle;
      },
    },
  );

  buttonEditProfile.addEventListener('click', popupEditProfile.open.bind(popupEditProfile));

  /* run */
  placesList.render();
});
