// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться
// размер текста.

const sizeControl = document.querySelector('#font-size-control');
const txtSize = document.querySelector('#text');

sizeControl.setAttribute("value", "15");

sizeControl.addEventListener('input', event => {
    txtSize.setAttribute("style", `font-size: ${event.currentTarget.value}px`);
})