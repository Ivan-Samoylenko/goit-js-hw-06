const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsList = document.querySelector('#ingredients');

function createIngredientItem(ingredientName) {
  const ingredient = document.createElement('li');
  ingredient.textContent = ingredientName;
  ingredient.classList.add('item');
  return ingredient;
}

const items = ingredients.map(ingredient => createIngredientItem(ingredient));

ingredientsList.append(...items);
