// Задание 8
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const mainDivRef = document.querySelector("#boxes");
const inputRef = document.querySelector("#controls > input");
const btnRenderRef = document.querySelector('[data-action="render"]');
const btnDestroyRef = document.querySelector('[data-action="destroy"]');

const createBoxes = (amount) => {
  const defaultSize = 30;
  destroyBoxes();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const newSize = defaultSize + i * 10;
    const rgb = [
      Math.round(Math.random() * 255),
      Math.round(Math.random() * 255),
      Math.round(Math.random() * 255),
    ].join(",");

    box.style.background = `rgb(${rgb})`;

    box.style.width = `${newSize}px`;
    box.style.height = `${newSize}px`;
    box.style.margin = "5px";

    mainDivRef.appendChild(box);
  }
};

const destroyBoxes = () => {
  // while (mainDivRef.firstChild) {
  //   mainDivRef.removeChild(mainDivRef.firstChild);
  // }
  mainDivRef.innerHTML = '<div id="boxes"></div>';
};

btnRenderRef.addEventListener("click", (event) => {
  const quantity = +inputRef.value;
  createBoxes(quantity);
});

btnDestroyRef.addEventListener("click", destroyBoxes);
