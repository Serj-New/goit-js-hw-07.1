const nameIn = document.querySelector('#name-input');
const nameOut = document.querySelector('#name-output');

nameIn.addEventListener("input", event => {
    if (nameIn.value.length !== 0) {
        return nameOut.textContent = event.currentTarget.value
    }
    return nameOut.textContent = `незнакомец`
})