const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');


console.log(`У списку ${items.length} категорії.`);

items.forEach(item => {
  const heading = item.querySelector('h2');
  const list = item.querySelectorAll('li');
  console.log(`Категорія: ${heading.textContent}`);
  console.log(`Кількість елементів: ${list.length}`);
});
