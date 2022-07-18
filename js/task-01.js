// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе
// в консоль текст заголовку елемента(тегу < h2 >) і кількість елементів
// в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

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
