/**
 * Returns the minimal positive element from the array otherwise -1
 * @param {Array}  array of numbers
 */

// As long as it is working don't touch ))
const getMinPositiveElem = (array) => {
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

console.log(getMinPositiveElem([56, -9, 87, -23, 0, -105, 55, 1])); //0
console.log(getMinPositiveElem([45, -9, 15, 5, -78])); //5
console.log(getMinPositiveElem([-5, -9, -111, -1000, -7])); //-1
