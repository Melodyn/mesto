const focusHandler = ({ target }) => target.select();

const processFieldValidation = (validityState, fieldEl, errorTextEl, invalidFieldClass) => {
  const isValid = validityState.valid;

  errorTextEl.textContent = fieldEl.validationMessage;

  if (isValid) {
    fieldEl.classList.remove(invalidFieldClass);
  } else {
    fieldEl.classList.add(invalidFieldClass);
  }

  return isValid;
};

const processFormValidation = (fieldEls, submitEl) => {
  const isValid = fieldEls.every(({ validity }) => validity.valid);
  if (isValid) {
    submitEl.removeAttribute('disabled');
  } else {
    submitEl.setAttribute('disabled', 'disabled');
  }

  return isValid;
};

export const enableValidation = (config) => {
  const allFormEls = document.querySelectorAll(config.formSelector);

  allFormEls.forEach((formEl) => {
    const fieldEls = Array.from(formEl.querySelectorAll(config.fieldSelector));
    const submitEl = formEl.querySelector(config.submitSelector);

    fieldEls.forEach((fieldEl) => {
      const errorTextContainerSelector = config.errorTextContainerSelector(fieldEl.name);
      const errorTextEl = formEl.querySelector(errorTextContainerSelector);

      fieldEl.addEventListener('input', (e) => {
        const validityState = e.target.validity;
        processFieldValidation(
          validityState,
          fieldEl,
          errorTextEl,
          config.invalidFieldClass,
        );

        processFormValidation(fieldEls, submitEl);
      });

      fieldEl.addEventListener('focus', focusHandler);
    });

    formEl.addEventListener('submit', (e) => {
      e.preventDefault();
      const formIsValid = processFormValidation(fieldEls, submitEl);
      if (!formIsValid) {
        e.stopImmediatePropagation();
        return;
      }

      fieldEls.forEach((inputEl) => {
        inputEl.setAttribute('disabled', 'disabled');
        submitEl.setAttribute('disabled', 'disabled');
      });
    });
  });
};

export const resetForm = (config, form) => {
  form.reset();

  const formFields = form.querySelectorAll(config.fieldSelector);
  formFields.forEach((field) => {
    const errorTextContainerSelector = config.errorTextContainerSelector(field.name);
    const containerErrorText = form.querySelector(errorTextContainerSelector);

    field.removeAttribute('disabled');
    field.classList.remove(config.invalidFieldClass);
    containerErrorText.textContent = '';
  });

  form.submit.removeAttribute('disabled');
};
