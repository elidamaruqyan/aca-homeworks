// // array.include
const isInclude = (arr, includedElem) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == includedElem) {
            return true;
        }
    }
    return false;
};
isInclude([5, 3, 2], 2);

// array.join
const joinedElem = ["1", "2", "3"];
const join = (arr, separator = " ") => {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        if (result) {
            result += separator;
        }
        result += arr[i];
    }
    return result;
};
join(joinedElem, " and ");

//slice
const slice = (arr, start, end) => {
    let result = [];
    from = Math.max(start, 0);
    to = Math.min(end);

    if (!end || end > arr.length) {
        for (let i = from; i < arr.length; i++) {
            result.push(arr[i]);
        }
    } else {
        for (let i = from; i < to; i++) {
            result.push(arr[i]);
        }
    }
    return result;
};

slice([1, 2, 3, 4, 5], 2, 4);

//fill
const fill = (arr, fillElem) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fillElem;
    }
    return arr.join(",");
};

fill(["1", "2", "3"], "4");

//findIndex
const findIndex = (arr, item) => {
    const indexes = [];

    for (let i = 0; i < arr.length; i += 1) {
        const currentItem = arr[i];
        if (currentItem === item) {
            indexes.push(i);
        }
    }

    if (indexes.length === 0) {
        return -1;
    }

    if (indexes.length === 1) {
        return indexes[0];
    }

    return indexes;
};
const numbers = [0, 1, 2, 3, 4];

console.log(findIndex(numbers, 2)); // 2
