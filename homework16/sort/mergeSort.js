

const unsortedArr = [1, 5, 8, 6, 2, 6];

const merge = (left, right) => {
    let sorted = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }

    return sorted.concat(left.slice().concat(right.slice()));
};

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2),
        left = mergeSort(arr.slice(0, mid)),
        right = mergeSort(arr.slice(mid));

    return merge(left, right);
};

console.log(mergeSort(unsortedArr));
