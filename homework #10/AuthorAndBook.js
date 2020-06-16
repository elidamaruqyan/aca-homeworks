class Author {
    constructor(name, email, gender) {
        this._name = name;
        this._email = email;
        this._gender = gender;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get gender() {
        return this._gender;
    }

    toString() {
        return `Author:
      ${this.name} 
      ${this.email} 
      ${this.gender}`;
    }
}

class Book {
    constructor(title, author, price, quantity) {
        this._title = title;
        this._author = author;
        this._price = price;
        this._quantity = quantity;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        const normalizedValue = value.trim();

        if (normalizedValue === "") {
            throw new Error("Empty value!");
        }

        this._title = value.trim();
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if (value !== "number") {
            throw new Error("invalid value!");
        }

        this._price = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        if (value !== "number") {
            throw new Error("Invalid value!");
        }

        this._quantity = value;
    }

    getProfit() {
        return this._price * this._quantity;
    }

    toString() {
        return `The ${this._title} book costs $${this._price}`;
    }
}

const auther = new Author(
    "George R. R. Martin",
    "George_Martin@gmail.com",
    "male"
);
const book = new Book("A Song of Ice and Fire", auther, 91.74, 1000);

console.log(book);
