//During classwork
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

const fn = (tree, res = []) => {
    if (tree === null) {
        return res;
    }

    return fn(tree.next, [...res, tree.value]);
};

console.log(fn(list));