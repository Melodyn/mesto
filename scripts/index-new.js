document.addEventListener('DOMContentLoaded', () => {
  enableValidation({
    formSelector: '.form',
    fieldSelector: '.form__item',
    submitSelector: '.form__submit',
    invalidFieldClass: 'form__item_invalid',
    errorTextContainerSelector: (fieldName) => `.form__item-error_field_${fieldName}`,
  });
});
