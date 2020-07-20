// As long as it is working don't touch ))

const min = (array) => {
    let numArray = array;
    numArray.sort((a, b) => a - b);

    const iter = (tmp) => {
        let [first, ...res] = tmp;

        if (!res.length) return false;

        if (first >= 0) return first;

        if (res < 0) return -1;

        return iter(res);
    };

    return iter(array);
};

console.log(min([56, -9, 87, -23, 0, -105, 55, 1])); //0
console.log(min([45, -9, 15, 5, -78])); //5
console.log(min([-5, -9, -111, -1000, -7])); //-1