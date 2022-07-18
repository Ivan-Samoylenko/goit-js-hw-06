const categoriesList = document.querySelector('#categories');
const categories = categoriesList.children;

function taskOne(categories) {
  console.log('Number of categories:', categories.length);
  for (let i = 0; i < categories.length; i += 1) {
    console.log('Category:', categories[i].querySelector('h2').textContent);
    console.log('Elements:', categories[i].querySelector('ul').children.length);
  }
}

taskOne(categories);
