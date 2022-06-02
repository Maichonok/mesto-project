export function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass
}) {
  const form = document.querySelector(formSelector);

  form.addEventListener("input", onInput);
  form.addEventListener("submit", e => {
    e.preventDefault();
    updateButtonStatus();
  });

  updateButtonStatus();

  function onInput(e) {
    // вытаскиваем элемент события
    const { target } = e;
    const errorContainer = target.parentNode.getElementsByClassName(errorClass)[0];
    // if haserror true
    const hasError = !target.checkValidity();

    if (hasError) {
      target.classList.add(inputErrorClass);
      errorContainer.textContent = target.validationMessage;
    } else {
      target.classList.remove(inputErrorClass);
      errorContainer.textContent = "";
    }

    updateButtonStatus();
  }

  function updateButtonStatus() {
    const isDisabled = !form.checkValidity();

    const submitButton = document.querySelector(submitButtonSelector);

    if (isDisabled) {
      submitButton.classList.add(inactiveButtonClass);
    } else {
      submitButton.classList.remove(inactiveButtonClass);
    }
  }
}
