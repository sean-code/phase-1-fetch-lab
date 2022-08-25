function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then((res)=> res.json())
  .then(json => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h3 = document.createElement('h3');
    h3.textContent = book.name;
    main.appendChild(h3);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

