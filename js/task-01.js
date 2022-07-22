const categoriesList = document.querySelector('#categories');
const categories = categoriesList.children;

function taskOne(categories) {
  console.log('Number of categories:', categories.length);
  [...categories].forEach(category => {
    console.log('Category:', category.querySelector('h2').textContent);
    console.log('Elements:', category.querySelector('ul').children.length);
  });
}

taskOne(categories);
