const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener("blur", event => {
    const inputLength = inputEl.dataset.length;

    if (`${inputEl.value.length}` !== inputLength) {
        inputEl.classList.add("invalid")
    } else {(inputEl.classList.contains("invalid")) ? inputEl.classList.replace("invalid", "valid") : inputEl.classList.add("valid")
        // if (inputEl.classList.contains("invalid")) {
        //     inputEl.classList.replace("invalid", "valid")
        // } else {
        //     inputEl.classList.add("valid")
        // }
    }
});
