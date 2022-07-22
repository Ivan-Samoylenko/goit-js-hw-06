const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const counterDisplay = document.querySelector('#value');

let currentValue = Number(counterDisplay.textContent);

function changeCounterDisplay() {
  counterDisplay.textContent = currentValue;
}
function increment() {
  currentValue += 1;
  changeCounterDisplay();
}
function decrement() {
  currentValue -= 1;
  changeCounterDisplay();
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
