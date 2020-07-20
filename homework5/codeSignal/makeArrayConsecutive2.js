const makeArrayConsecutive2 = (statues) => {
    let min = Math.min(...statues);
    let max = Math.max(...statues);
    let arr = [];

    for (let i = min; i <= max; i++) {
        arr.push(i);
    }

    return arr.length - statues.length
};

makeArrayConsecutive2([6, 2, 3, 8]);