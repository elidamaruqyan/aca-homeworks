const step = (start, end, step) => {
    let result = [];
    if (start > end) return "invalid format";
    for (let i = start; i <= end; i += step) {
        result.push(i);

        if (step === 0) {
            step++;
        }
    }

    return result;
};

console.log(step(1, 10, 3)); // [1, 4, 7, 10]
console.log(step(1, 3, 0)); // [1, 2, 3]
console.log(step(3, 1, 0)); // ‘invalid format’
