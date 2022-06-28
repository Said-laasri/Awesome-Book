/* eslint-disable no-dupe-class-members */
/* eslint-disable max-classes-per-file */
class BookDetails {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
class Library {
  constructor() {
    this.allbooksContainer = document.querySelector('.bookList');
    this.titleInput = document.querySelector('#title');
    this.authorInput = document.querySelector('#author');
    this.addBtn = document.querySelector('.submit');
    this.booksData = [];
  }

  removeListBook(book) {
    const newData = this.booksData.filter((element) => element !== book);
    this.booksData = newData;
  }

  bookStoreLocaly() {
    const retrievedBooks = JSON.parse(localStorage.getItem('books'));
    this.booksData = retrievedBooks;
  }

  storeBooksInLocal() {
    localStorage.setItem('books', JSON.stringify(this.booksData));
  }

  removeBook(removeBtn, book) {
    removeBtn.addEventListener('click', () => {
      removeBtn.parentElement.remove();
      this.removeListBook(book);
      this.storeBooksInLocal();
    });
  }

  createElement(book) {
    const bookContainer = document.createElement('article');
    const bookTitle = document.createElement('h4');
    const bookAuthor = document.createElement('h5');
    const by = document.createElement('p');
    const textContainer = document.createElement('div');
    const removeBtn = document.createElement('button');

    this.allbooksContainer.append(bookContainer);
    bookContainer.classList.add('book-info-conatiner');
    bookContainer.append(textContainer, removeBtn);
    textContainer.append(bookTitle, by, bookAuthor);
    textContainer.classList.add('text-con');
    bookTitle.classList.add('title-book');
    bookAuthor.classList.add('author-book');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Remove';

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    this.removeBook(removeBtn, book);
    by.textContent = 'by';
  }

  addBook() {
    this.addBtn.addEventListener('click', (e) => {
      if (this.titleInput.value === '' || this.authorInput.value === '') {
        e.preventDefault();
      } else {
        const book = new BookDetails(this.titleInput.value, this.authorInput.value);
        this.booksData.push(book);
        this.createElement(book);
        this.storeBooksInLocal();
        this.titleInput.value = '';
        this.authorInput.value = '';
      }
    });
  }

  display() {
    window.addEventListener('load', (e) => {
      if (localStorage.getItem('books') === null) {
        e.preventDefault();
      } else {
        this.bookStoreLocaly();
        this.booksData.forEach((book) => {
          this.createElement(book);
        });
      }
    });
  }
}

const book = new Library();
book.addBook();
book.display();