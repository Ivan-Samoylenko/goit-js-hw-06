const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInput);

function onInput() {
  nameOutput.textContent = nameInput.value === '' ? 'Anonymous' : nameInput.value;
}
