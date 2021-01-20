// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// ---------------
// <div id="counter">
//   <button type="button" data-action="decrement">
//     -1
//   </button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">
//     +1
//   </button>
// </div>;
// ---------------

const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementtRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector("#value");

let counterValue = 0;

const increment = () => {
  counterValue += +btnIncrementtRef.textContent;
  counterValueRef.textContent = counterValue;
  return;
};

const decrement = () => {
  counterValue += +btnDecrementRef.textContent;
  counterValueRef.textContent = counterValue;
  return counterValueRef.textContent;
};

btnDecrementRef.addEventListener("click", decrement);
btnIncrementtRef.addEventListener("click", increment);
