
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = {
  list: document.querySelector("#ingredients"),
}

const items = ingredients.map(el => {
  const elements = document.createElement("li");
  elements.textContent = el;
  elements.classList.add("item");
  return elements;
})

refs.list.append(...items);