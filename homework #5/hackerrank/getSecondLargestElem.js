/*********Tip 1**********/
let numbers = [2, 3, 6, 6, 5];

const getSecondLargestElem = (nums) => {
    let maxElem = Math.max(...nums);
    let secondLargest;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === maxElem) {
            nums.splice(i, 1);
        }
        secondLargest = Math.max(...nums);
    }
    return secondLargest;
};

getSecondLargestElem(numbers);

/*********Tip 2**********/
const getSecondLargest = (nums) => {
    const max = Math.max(...nums);

    nums = nums.filter((num) => num !== max);

    return Math.max(...nums);
};

getSecondLargest(numbers);
