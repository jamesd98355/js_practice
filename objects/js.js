let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function toString(book) {
    return  "Name : "   + book.title + 
            "\nAuthor: "+ book.author + 
            "\nPages: " + book.pages + 
            "\nRead: "  + book.read;
}

function displayBooks() {
    myLibrary.forEach((book) => {
        console.log(toString(book));
    })
}
function toggleRead(book) {
    if (book.read == truw){book.read = false}
    else book.read = true;
}

const Hobit = new Book("Hobit", "Tolkien", 500, true);
const Potter = new Book("Harry Potter", "J. K. Rowling", 1500, false);

addBookToLibrary(Hobit);
addBookToLibrary(Potter);
displayBooks();
console.log(Hobit)