const findByKey = (obj, keys) => {
    const values = [];

    if (typeof keys === "string") {
        const iValue = obj[keys];

        if (iValue === undefined) {
            return values.push(null);
        } else {
            values.push(iValue);
        }
    }

    if (typeof keys === "object") {
        for (let key of keys) {
            const value = obj[key];

            if (value === undefined) {
                values.push(null);
            } else {
                values.push(value);
            }
        }
    }

    return values;
};

const find = (arrOfObj, keys) => {
    //     for () {
    //     }
};

console.log(
    find(
        [
            { user: "name", age: 18 },
            { user: "elon", age: 18 },
            { user: "vrezh", age: 18 },
        ],
        "user"
    )
);
