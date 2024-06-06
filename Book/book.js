class Book {

    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    set title(value) { this._title = value; }

    get title() { return this._title; }

    set author(value) { this._author = value; }

    get author() { return this._author; }

    set pages(value) { this._pages = value; }

    get pages() { return this._pages; }

    set read(value) { this._read = value; }

    get read() { return this._read; }

    signAsRead = () => { this.read = true; }
}

let myLibrary = [
    new Book('The Hobbit', 'J.R.R. Tolkien', 295, false),
    new Book('It', 'Stephen King', 1138, true)
];
const tableLibrary = document.querySelector('#table-content');
const newBookDialog = document.querySelector('#newBookDialog');
const newBookButton = document.querySelector('#newBookButton');
const confirmDialog = document.querySelector('#confirmDialog');

newBookButton.addEventListener('click', (e) => {
    newBookDialog.showModal();
});

confirmDialog.addEventListener('click', (event) => {

    event.preventDefault();

    title = newBookDialog.querySelector('#title').value;
    author = newBookDialog.querySelector('#author').value;
    pages = newBookDialog.querySelector('#pages').value;
    read = newBookDialog.querySelector('#read').checked;

    if(title && author && pages) {
        let newBook = new Book(title, author, pages, read);
        addBookToLibrary(newBook);
    }
    newBookDialog.close();
});

loadLibrary();

function addBookToLibrary(book) {

    myLibrary.push(book);
    loadLibrary();
}

function deleteBook(title) {

    myLibrary = myLibrary.filter((book) => book.title !== title);
    loadLibrary();
}

function signBookAsRead(title) {
    
    myLibrary.filter((book) => book.title === title).map((book) => book.read = true);
    loadLibrary();
}

function loadLibrary() {

    while(tableLibrary.firstChild) {
        tableLibrary.removeChild(tableLibrary.firstChild);
    }

    for(let book of myLibrary) {

        let tdTitle = document.createElement('td');
        tdTitle.textContent = book.title;

        let tdAuthor = document.createElement('td');
        tdAuthor.textContent = book.author;

        let tdPages = document.createElement('td');
        tdPages.textContent = book.pages;

        let tdRead = document.createElement('td');
        tdRead.textContent = book.read ? 'Yes' : 'No';

        let tdBtn1 = document.createElement('td');
        let deleteBtn = document.createElement('button');
        let binImg = document.createElement('img');
        binImg.src = "bin.png";
        binImg.alt = "Delete";
        deleteBtn.appendChild(binImg);
        deleteBtn.classList.add('action-img');
        deleteBtn.addEventListener('click', () => {
            deleteBook(book.title);
        });
        tdBtn1.appendChild(deleteBtn);
        
        let tdBtn2 = document.createElement('td');
        let signAsReadBtn = document.createElement('button');
        let checkImg = document.createElement('img');
        checkImg.src = "check.png";
        checkImg.alt = "gresg";
        signAsReadBtn.appendChild(checkImg);
        signAsReadBtn.classList.add('action-img');
        signAsReadBtn.addEventListener('click', () => {
            book.signAsRead();
            loadLibrary();
        });
        tdBtn2.appendChild(signAsReadBtn);

        let newRow = document.createElement('tr');
        newRow.id = book.title;

        newRow.appendChild(tdTitle);
        newRow.appendChild(tdAuthor);
        newRow.appendChild(tdPages);
        newRow.appendChild(tdRead);
        newRow.appendChild(tdBtn1);
        newRow.appendChild(tdBtn2);

        tableLibrary.appendChild(newRow);
    }
}
