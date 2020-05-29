const size = (obj) => {
    let count = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++;
        }
    }

    if (count == 0) {
        count = "Empty";
    }
    return count;
};

console.log(size({ a: 1, b: 2, c: "hello" })); //3
console.log(size({})); // 'Empty'
console.log(size({ name: "Steve", lastname: "Jobs" })); // 2
