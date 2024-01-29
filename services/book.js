const fs = require("fs");

function getAllBooks() {
    return JSON.parse(fs.readFileSync('books.json'));
}

function getBookById(id) {
    const books = JSON.parse(fs.readFileSync('books.json'));

    const booksFiltered = books.filter(book => book.id === id)[0];

    return booksFiltered;
}

function insertBook(newBook) {
    const books = JSON.parse(fs.readFileSync('books.json'));
    // Adds everything in the books list plus newBook.
    const newBookList = [...books, newBook];
    // Rewrites the file with the new data.
    fs.writeFileSync('books.json', JSON.stringify(newBookList));
}

function modifyBook(modifications, id) {
    let currentBooks = JSON.parse(fs.readFileSync('books.json'));

    const indexModified = currentBooks.findIndex(book => book.id === id);

    // If the field that comes in the modifications exists within the current book it changes the value, otherwise it adds the new field.
    const contentChanged = { ...currentBooks[indexModified], ...modifications };

    currentBooks[indexModified] = contentChanged;

    fs.writeFileSync('books.json', JSON.stringify(currentBooks));
}

function deleteBookById(id) {
    let currentBooks = JSON.parse(fs.readFileSync('books.json'));

    const booksFiltered = currentBooks.filter(book => book.id !== id);

    fs.writeFileSync('books.json', JSON.stringify(booksFiltered));
}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    modifyBook,
    deleteBookById
}