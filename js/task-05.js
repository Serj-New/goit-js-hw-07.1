const nameIn = document.querySelector('#name-input');
const nameOut = document.querySelector('#name-output');

// Вариант 1 (тернарник)
nameIn.addEventListener("input", event => {
    nameIn.value.length !== 0 ? (nameOut.textContent = event.currentTarget.value) : (nameOut.textContent = 'незнакомец')
});

// Вариант 2 (if else)
// nameIn.addEventListener("input", event => {
//     let nameLabel = 'незнакомец';

//     if (nameIn.value.length !== 0) {
//         nameLabel = event.currentTarget.value
//     }
//     nameOut.textContent = nameLabel
// });