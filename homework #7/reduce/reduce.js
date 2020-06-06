const reduce = (array, cb, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++ ) {
        result = cb.call(undefined, result, array[i], i, array);
    }
    return result;
};

reduce([1, 2, 3, 4, 5], (result, item) => {
    result.push(item * 2);
    return result;
}, []); // [ 2, 4, 6, 8, 10 ]


const cb = (result, item) => {
    result.push(item * 2);
    return result;
};
reduce([1, 2, 3, 4, 5], cb, []); // [ 2, 4, 6, 8, 10 ]