const categories = document.querySelector("#categories");
const quantityCategories = categories.children.length;
console.log(`В списке ${quantityCategories} категории`);

const categoryItems = document.querySelectorAll('.item');
// console.log(categoryItems);

categoryItems.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const quantityItems = item.querySelector('ul').children.length;
    // console.log(quantityItems);

    console.log(`Категория: ${categoryName}\n\
Количетсво элементов: ${quantityItems}`);
});

