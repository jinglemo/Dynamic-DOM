// create array of objects to keep the data
let newbookmarks = [];

const addForm = document.querySelector('.addForm');
const bookmarkContainer = document.querySelector('#list');
addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const nameInput = document.querySelector('input.name')
    const linkInput = document.querySelector('input.link')
    addMark(nameInput.value, linkInput.value)
  
    newbookmarks.push({name: nameInput.value, link: linkInput.value});
});

const addMark = (name, link) => {
    const newBookmark = document.createElement('li');
    const a = document.createElement('a');
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "-";
    a.setAttribute('href', '');
    a.textContent = '';
    a.append(link)
    newBookmark.append(a);
    newBookmark.append(`: ${name}`)
    newBookmark.prepend(removeBtn)
    bookmarkContainer.append(newBookmark);
}
const deleteMark = () => {

}


const removeBook = (bookshelf, book) => {
    // Can you find the book?
    const idx = bookshelf.indexOf(book);
    // My font is Fira Code & it has ligatures
    return idx !== -1
      ? // If the book was found, remove it
        bookshelf.slice(0, idx).concat(bookshelf.slice(idx + 1))
      : // Otherwise, it's the same bookshelf
        bookshelf;
  };


  