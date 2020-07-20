let setA = new Set([1, 2, 3, 4]);
let setC = new Set([3, 4, 5, 6]);

const difference = (setA, setB) => {
    const _difference  = new Set();

    for (let item of setA.values()) {
        if (!setB.has(item)) {
            _difference.add(item);
        }
    }

    return _difference ;
};

difference(setA, setC); // => Set [1, 2]


//MDN Solution
const difference = (setA, setB) => {
    var _difference = new Set(setA);
    for (var elem of setB) {
        _difference.delete(elem);
    }
    return _difference;
};

difference(setA, setC);   // => Set [1, 2]

