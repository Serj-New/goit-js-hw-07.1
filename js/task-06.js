const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener("blur", event => {
    const inputLength = inputEl.dataset.length;

    if (`${inputEl.value.length}` !== inputLength) {
        if(inputEl.classList.contains("valid")) {
            inputEl.classList.remove("valid")
        } 
        inputEl.classList.add("invalid")
    } else {
        if(inputEl.classList.contains("invalid")) {
            inputEl.classList.replace("invalid", "valid")
        } 
        inputEl.classList.add("valid")
    }
});
