// Задание 2
// В HTML есть пустой список ul#ingredients.
// В JS есть массив строк.
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//  после чего вставит все li за одну операцию в список ul.ingredients.
//  Для создания DOM-узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
// ВАРИАНТ 1
// const ingrRef = document.querySelector("#ingredients");
// const listRef = document.createElement("li");
// listRef.classList.add("product");
//  listing.textContent = ingredient;
// console.log(ingrRef);
// ingrRef.appendChild(listRef);

// const ingrRef = document.querySelector("#ingredients");
// const createList = (ingredient) => {

//   const listRef = document.createElement("li");
//   listRef.classList.add("product");
//   listRef.textContent = ingredient;
//   ingrRef.appendChild(listRef);
// };

// const ingredientsListing = ingredients.forEach((ingredient) =>
//   createList(ingredient)
// );

// ВАРИАНТ 2
const ingrRef = document.querySelector("#ingredients");

const createListEl = (ingredient) => {
  const listRef = document.createElement("li");
  listRef.textContent = ingredient;
  return listRef;
};

const ingredientsListing = ingredients.map((ingredient) =>
  createListEl(ingredient)
);

ingrRef.append(...ingredientsListing);
