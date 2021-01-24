// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", changeSize);
textRef.style.fontSize = "50" + "px";
function changeSize(event) {
  textRef.style.fontSize = `${event.target.value}px`;
}
