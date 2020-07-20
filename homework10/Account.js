class Account {
    constructor(id, name, balance) {
        this._id = id;
        this._name = name;
        this._balance = balance;
    }

    static identifyAccounts(accountFirst, accountSecond) {
        return accountFirst.id === accountSecond.id &&
            accountFirst.name === accountSecond.name &&
            accountFirst.balance === accountSecond.balance
    }


    get name() {
        return this._name;
    } 

    set name(value) {
        const normalizedValue = value.trim();

        if (normalizedValue === "") {
            throw new Error("Empty value!");
        }

        this._fname = value;
    }

    get id() {
        return this._id;
    }

    get balance() {
        return this._balance;
    }

    set balance(value) {
        if (typeof value !== "number") {
            throw new Error("Should be a number!");
        }

        if(value < 0) {
            throw new Error("Not enough money");
        }

        this._balance = value;
    }

    credit(amount) {
        if (typeof amount !== "number") {
            throw new Error("Should be a number!");
        }

        const updatedBalance = amount + this._balance;
        this.balance = updatedBalance;
        return updatedBalance;
    }

    debit(amount) {
        if (amount < this._balance) {
            return this._balance - amount;
        }

        throw new Error("Amount exceeded balance");
    }

    transferTo(anotherAccount, amount) {
        if (amount > this._balance) {
            throw new Error("Amount exceeded balance");
        }

        anotherAccount.balance += amount;
        return anotherAccount.balance;
    }
}

const accountInstance = new Account(1, "Elon", 1500);

console.log(accountInstance.transferTo(20, 52));




/*** lucac tarberak ****/


class Account {
    constructor(id, name, balance) {
        this._id = id;
        this._name = name;
        this._balance = balance;
    }

    static identifyAccounts(accountFirst, accountSecond) {
        return JSON.stringify(accountFirst) === JSON.stringify(accountSecond)
    }

    get name() {
        return this._name;
    }

    set name(value) {
        const normalizedValue = value.trim();

        if (normalizedValue === "") {
            throw new Error("Empty value!");
        }

        this._fname = value.trim();
    }

    get id() {
        return this._id;
    }

    get balance() {
        return this._balance;
    }

    set balance(value) {
        if (typeof value !== "number") {
            throw new Error("Should be a number!");
        }

        if(value < 0) {
            throw new Error("Not enough money");
        }

        this._balance = value;
    }

    credit(amount) {
        if (typeof amount !== "number") {
            throw new Error("Should be a number!");
        }

        this.balance += amount;
        return this.balance;
    }

    debit(amount) {
        if (amount > this.balance) {
            throw new Error("Amount exceeded balance");
        }

        return this.balance - amount;
    }

    transferTo(anotherAccount, amount) {
        this.debit(amount);
        anotherAccount.credit(amount);

        return this.balance;
        // if (amount > this.balance) {
        //     throw new Error("Amount exceeded balance");
        // }

        // anotherAccount.balance += amount;
        // return anotherAccount.balance;
    }
}

const ineco = new Account('ineco', "general-account", 120);

const ameria = new Account('ameria', 'saving-account', 2000)

// console.log(ineco);
// console.log(ameria);

// console.log(ineco.transferTo(ameria, 100))

// console.log(ineco);
// console.log(ameria)


console.log(Account.identifyAccounts(ineco, ameria))