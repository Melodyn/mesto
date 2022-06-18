export class FormValidator {
  constructor(config, elementForm) {
    this._config = config;
    this._element = {
      form: elementForm,
      fields: [],
      submit: null,
    };
    this._validityState = {
      enabled: false,
      formIsValid: false,
      validity: {},
    };
    this._prepareElements();
  }

  _prepareElements() {
    const {
      fieldSelector,
      submitSelector,
      getErrorTextContainerSelector,
    } = this._config;

    const elementForm = this._element.form;
    this._element.submit = elementForm.querySelector(submitSelector);
    const fields = Array.from(elementForm.querySelectorAll(fieldSelector));
    this._element.fields = fields.map((elementField) => {
      const errorTextContainerSelector = getErrorTextContainerSelector(elementField.name);
      const elementError = elementForm.querySelector(errorTextContainerSelector);
      elementField.addEventListener('focus', ({ target }) => target.select());

      return {
        elementField,
        elementError,
      };
    });
  }

  _checkFormState() {
    const isValid = this._element.fields.every(({ elementField: { validity } }) => validity.valid);
    if (isValid) {
      this._enableSubmitButton();
    } else {
      this._disableSubmitButton();
    }

    this._validityState.formIsValid = isValid;
  }

  _checkFieldState(elementField, elementError) {
    const validityState = this._validityState.validity;
    const isValid = validityState.valid;

    if (isValid) {
      this._hideFieldError(elementField, elementError);
    } else {
      this._showFieldError(elementField, elementError);
    }
  }

  _setListeners() {
    this._element.fields.forEach(({ elementField, elementError }) => {
      elementField.addEventListener('input', (e) => {
        this._validityState.validity = e.target.validity;
        this._checkFieldState(elementField, elementError);
        this._checkFormState();
      });
    });

    this._element.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._checkFormState();
      const { formIsValid } = this._validityState;
      if (!formIsValid) {
        e.stopImmediatePropagation();
        return;
      }

      this._disableSubmitButton();
      this._element.fields.forEach(({ elementField }) => {
        elementField.setAttribute('disabled', 'disabled');
      });
    });
  }

  _disableSubmitButton() {
    this._element.submit.setAttribute('disabled', 'disabled');
  }

  _enableSubmitButton() {
    this._element.submit.removeAttribute('disabled');
  }

  _showFieldError(elementField, elementError) {
    const { invalidFieldClass } = this._config;
    elementField.classList.remove(invalidFieldClass);
    elementError.textContent = elementField.validationMessage;
  }

  _hideFieldError(elementField, elementError) {
    const { invalidFieldClass } = this._config;
    elementField.classList.remove(invalidFieldClass);
    elementError.textContent = '';
  }

  enableValidation() {
    if (this._validityState.enabled) return false;

    this._setListeners();
    this._validityState.enabled = true;

    return true;
  }

  reset() {
    const { invalidFieldClass } = this._config;

    this._element.form.reset();
    this._element.fields.forEach(({ elementField, elementError }) => {
      elementField.removeAttribute('disabled');
      elementField.classList.remove(invalidFieldClass);
      elementError.textContent = '';
    });
    this._enableSubmitButton();
  }

  toElement() {
    return this._element.form;
  }
}
