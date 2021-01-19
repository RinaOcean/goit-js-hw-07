// Задание 1
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка
// элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const itemsRef = document.querySelectorAll(".item");
console.log(`В списке ${itemsRef.length} категории.`);

const sublists = itemsRef.forEach((sublist) => {
  const title = sublist.children[0].textContent;
  const quantity = sublist.children[1].querySelectorAll("li").length;

  console.log(`Категория: ${title}`);
  console.log(`Количество элементов: ${quantity}`);
});
