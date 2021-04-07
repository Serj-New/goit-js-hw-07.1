const sizeControl = document.querySelector('#font-size-control');
const txtSize = document.querySelector('#text');

sizeControl.setAttribute("value", "15");

sizeControl.addEventListener('input', event => {
    txtSize.setAttribute("style", `font-size: ${event.currentTarget.value}px`);
})