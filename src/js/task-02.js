const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulEl = document.querySelector('#ingredients');

// Вариант 1

// ingredients.forEach(item => {
//   const liEl = document.createElement('li');
//   liEl.textContent = item;
//   ulEl.appendChild(liEl);
// });


// Вариант 2

let ingredientName = document.createElement('ul');

ingredients.forEach(item => {
    const liEl = document.createElement('li');
    liEl.textContent = item;
    ingredientName.appendChild(liEl);
});

ulEl.innerHTML = ingredientName.innerHTML;