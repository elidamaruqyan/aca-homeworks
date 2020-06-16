class Account {
    constructor(id, name, balance) {
        this._id = id;
        this._name = name;
        this._balance = balance;
    }

    static identifyAccounts(accountFirst, accountSecond) {
        const checkIdentify =
            accountFirst.id === accountSecond.id &&
            accountFirst.name === accountSecond.name &&
            accountFirst.balance === accountSecond.balance;

        return checkIdentify;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        const normalizedValue = value.trim();

        if (normalizedValue === "") {
            throw new Error("Empty value!");
        }

        this._name = value;
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

        this._balance = value;
    }

    credit(amount) {
        if (typeof amount !== "number") {
            throw new Error("Should be a number!");
        }

        const updatedBalance = amount + this._balance;
        this._balance = updatedBalance;
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

const account1 = new Account(1, "Elon", 1500);

console.log(account1.transferTo(20, 52));
