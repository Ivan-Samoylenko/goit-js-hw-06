const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const counterDisplay = document.querySelector('#value');

let currentValue = Number(counterDisplay.textContent);

incrementBtn.addEventListener('click', onClickIncrementBtn);
decrementBtn.addEventListener('click', onClickDecrementBtn);

function changeCounterDisplay() {
  counterDisplay.textContent = currentValue;
}
function onClickIncrementBtn() {
  currentValue += 1;
  changeCounterDisplay();
}
function onClickDecrementBtn() {
  currentValue -= 1;
  changeCounterDisplay();
}
