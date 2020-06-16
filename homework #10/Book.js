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
    // @TODO
    isTheSameBook(book) {
        if(book.title === this._title && book.author === this._auther) {
            return true;
        }
        return false;
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
      Book Title - ${this._title}
      Author of Book - ${this._author}
      Book Id- ${this._bookId}     `;
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
      Book Title - ${this._title}
      Author of Book - ${this._author}   `;
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
      Book Title - ${this._title}
      Author of Book - ${this._author}
      Book ID - ${this._bookId}
      Expiration Date - ${this._expirationDate}
      isReturned - ${this._isReturned} 
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
        this.books = books;
        this.readers = readers;
    }

    doHaveBook(requestedBook) {
        const includedBook = this.books.includes(requestedBook);
        return includedBook
    }
    addBook(newBook) {
        const newIncludedBook = this.books.includes(newBook);
        return newIncludedBook
    }
}

const book1 = new Book("Jane Eyre", "Charlotte Bronte");
const reader1 = new Reader("elon", "mask", 1, "book");
console.log(reader1);
