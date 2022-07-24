const inputEl = document.querySelector('input');
const gallery = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', onClickCreateBtn);
destroyBtn.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function createBoxes(amount) {
  const sizes = 30;
  gallery.innerHTML = Array(amount)
    .fill(0)
    .reduce(
      (acc, value, i) =>
        (acc += `<div style="width:${sizes + 10 * i}px; height:${
          sizes + 10 * i
        }px; background-color:${getRandomHexColor()}; margin-top: 5px"></div>`),
      ''
    );
}
function destroyBoxes() {
  gallery.innerHTML = '';
}
function onClickCreateBtn() {
  if (inputEl.value && gallery.innerHTML === '') {
    createBoxes(Number(inputEl.value));
  }
}
