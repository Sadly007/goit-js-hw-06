const refs = {
  item: document.querySelectorAll(".item"),
  heading: document.querySelectorAll(".item h2"),
}
const summ = `Number of categories: ${refs.item.length}`;
console.log(summ);

const categories = refs.heading.forEach(element => 
  console.log (`Category: ${element.textContent}
Elements: ${element.nextElementSibling.children.length}`));