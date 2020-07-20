/** There are mistakes that need to be corrected **/
class Book {
    constructor(title, author) {
        this._title = title;
        this._author = author;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    toString() {
        return ` Books:
      Book Title - ${this._title}
      Author of Book - ${this._author}   `;
    }

    isTheSameBook(book) {
        return book.title === this.title && book.author === this.author
    }
}

class LibraryBookBase extends Book {
    constructor(title, author, bookId) {
        super(title, author);

        this._bookId = bookId;
    }

    get bookId() {
        return this._bookId;
    }

    toString() {
        return ` Books:
      Book Title - ${this.title}
      Author of Book - ${this.author}
      Book Id- ${this.bookId}     `;
    }
}

class LibraryBook extends LibraryBookBase {
    constructor(title, author, bookId, quantity) {
        super(title, author, bookId);

        this._quantity = quantity;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        if (typeof value !== number) {
            throw new Error("invalid value");
        }

        this._quantity = value;
    }

    toString() {
        return ` Books:
      Book Title - ${this.title}
      Author of Book - ${this.author}
      Book Id- ${this.bookId}
      Book quantity- ${this.quantity}   `;
    }

    increaseQuantityBy(amount) {
        const updatedQuantity = amount + this._quantity;
        this._quantity = updatedQuantity;
        return updatedQuantity;
    }

    decreaseQuantityBy(amount) {
        const updatedQuantity = this._quantity - amount;
        this._quantity = updatedQuantity;
        return updatedQuantity;
    }
}

class ReaderBook extends LibraryBookBase {
    constructor(title, author, bookId, expirationDate, isReturned) {
        super(title, author, bookId);

        this._expirationDate = expirationDate;
        this._isReturned = isReturned;
    }

    get expirationDate() {
        return this._expirationDate;
    }

    set expirationDate(value) {
        if (typeof value !== "number") {
            throw new Error("Invalid Date!");
        }

        this._expirationDate = value;
    }

    get isReturned() {
        return this._isReturned;
    }

    set isReturned(value) {
        if (typeof value !== "boolean") {
            throw new Error("Invalid value");
        }

        this._isReturned = value;
    }

    toString() {
        return ` Books:
      Book Title - ${this.title}
      Author of Book - ${this.author}
      Book ID - ${this.bookId}
      Expiration Date - ${this.expirationDate}
      isReturned - ${this.isReturned} 
    `;
    }
}

class Reader {
    constructor(firstName, lastName, readerId, books) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._readerId = readerId;
        this._books = books;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        if (typeof value === "") {
            throw new Error("Empty value");
        }

        this._firstName = value.trim();
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        if (typeof value === "") {
            throw new Error("Empty value");
        }

        this._lastName = value.trim();
    }

    get readerId() {
        return this._readerId;
    }

    set readerId(value) {
        if (typeof value !== "number") {
            throw new Error("Invalid value");
        }

        this._readerId = value;
    }

    get books() {
        return this._books;
    }

    // ?
    set books(value) {
        const bookArr = [];
        this.books = bookArr.push(value);
        return bookArr
    }

    toString() {
        return ` Reader Info:
      Reader firstName - ${this.firstName}
      Reader lastName - ${this.lastName}
      Reader ID - ${this.readerId}
      Reader books - ${this.books}
    `;
    }

    //@TODO
    borrowBook(book, library) {
        const libraryBook = library.lendBook(book);
        if (libraryBook && libraryBook instanceof ReaderBook) {
            this.books.push(libraryBook);
        }

        return null;
    }
}

class Library {
    constructor(books, readers) {
        this._books = books;
        this._readers = readers;
    }

    get books() {
        return this._books;
    }

    set books(value) {
        const booksArray = [];
        this._books = booksArray.push(value);
    }

    get readers() {
        return this._readers;
    }

    doHaveBook(requestedBook) {
        return this.books.includes(requestedBook)
    }

    addBook(newBook) {
        if (this.books.includes(newBook)) {
            const newBookFindIndex = this.books.findIndex(
                (book) => book._title === newBook._title
            );
            this.books[newBookFindIndex]._quantity += 1;
            return this.books;
        } else {
            this.books.push(newBook);
        }
    }

    //@TODO
    addBooks(newBooks) {
        if (this.books.includes(newBooks)) {
            const newBookFindIndex = this.books.findIndex(
                (book) => book._title === newBook._title
            );
            this.books[newBookFindIndex]._quantity += 1;
            return this.books;
        } else {
            this.books.push(newBooks);
            return this.books;
        }
    }

    checkReaderId(readerId) {
        const findReaderId = this.readers.findIndex(
            (reader) => reader.readerId === readerId
        );
    }

    lendBook(book, readerId) {
        const findBookIndex = this.books.findIndex(
            (book) => book._title === book._title
        );
        const findedBookTitle = this.books[findBookIndex]._title;
        const findRederIndex = this.readers.findIndex(
            (reader) => reader._readerId === readerId._readerId
        );
        const findedReader = this.readers[findRederIndex]._readerId;

        if (findedReader && findedBookTitle) {
            return this.books;
        }
    }
}

const bookInstance = new Book("Jane Eyre", "Charlotte Bronte");
const libBookBase = new LibraryBookBase(
    "The Old Man and the Sea",
    "Ernest Hemingway",
    5
);
const libBook = new LibraryBook("Oliver Twist", "Charles Dickens", 1, 500);
const readerBookInstance = new ReaderBook(
    "The Picture of Dorian Gray",
    "Oscar Wilde",
    1,
    "15.06.2020",
    false
);
const readerInstance = new Reader("Elon", "Mask", 1, readerBookInstance);
const libraryInstance = new Library([libBook], [readerInstance]);

// console.log(bookInstance.isTheSameBook(bookInstance));
// console.log(libBookBase.toString());
// console.log(libBook.decreaseQuantityBy(10));
// console.log(readerInstance.borrowBook(new Book('Jane Eyre', 'Charlotte Bronte'), new Library('books', "readers") )) ?
// console.log(readerInstance.borrowBook(bookInstance, libraryInstance)); // ?

// console.log(libraryInstance.addBook(libBook));
// console.log(libraryInstance.addBooks(new LibraryBook('The Picture of Dorian Gray', 'Oscar Wilde', 1, 1)));
// console.log(libraryInstance.lendBook(readerBookInstance, readerInstance))
