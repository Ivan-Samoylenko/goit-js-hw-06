const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', onBlurValidate);

function onBlurValidate(event) {
  const element = event.currentTarget;
  const isValid = element.value.length === Number(element.dataset.length);
  element.classList.remove(isValid ? 'invalid' : 'valid');
  element.classList.add(isValid ? 'valid' : 'invalid');
}
