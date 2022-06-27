const bookAdd = document.querySelector('.bookList');
const titleB = document.getElementById('title');
const author = document.getElementById('author');
const btn = document.querySelector('.submit');

if (!localStorage.getItem('bookInfo')) {
    localStorage.setItem('bookInfo', JSON.stringify([]));
}
let books;

function uploadData(book) {
    localStorage.setItem('bookInfo', JSON.stringify(book));
}

function downloadData() {
    books = JSON.parse(localStorage.getItem('bookInfo'));
    updateUI();
}
downloadData();

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (titleB.value && author.value) {
        const obj = { title: titleB.value, author: author.value };
        books.push(obj);
        uploadData(books);
        downloadData();
        titleB.value = '';
        author.value = '';
    }
});



