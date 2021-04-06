const counterValueEl = document.querySelector('#value');
const actionBtn = document.querySelectorAll('button[data-action]');

let counterValue = 0;

// Вариант 1
actionBtn.forEach(button => button.addEventListener('click', onSelectAction));

function onSelectAction(event) {
    const { action } = event.currentTarget.dataset;

    switch (action) {
        case 'increment':
            counterValue++
            return counterValueEl.innerText = `${ counterValue }`;
        
        case 'decrement':
            --counterValue
            return counterValueEl.innerText = `${ counterValue }`;
    }
};


// Вариант 2
// document.querySelector('button[data-action="decrement"]').addEventListener('click', () => {
//     --counterValue
//     counterValueEl.innerText = `${ counterValue }`
// })


// document.querySelector('button[data-action="increment"]').addEventListener('click', () => {
//     counterValue++
//     counterValueEl.innerText = `${ counterValue }`
// })