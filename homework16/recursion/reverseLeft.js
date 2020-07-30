/**
 * Return rotated array from N places to the left.
 * @param {Array}  arr of numbers
 * @param {...number} count - A positive or negative number.
 */

//without recursion
const rotateArr = (arr, count) => {
  if (count === 0) return arr;
  return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
};

rotateArr(["a", "b", "c", "d", "e", "f", "g", "h"], 3); //[‘d’, ‘e’, ‘f’, ‘g’, ‘h’, ‘a’, ‘b’, ‘c’]
rotateArr(["a", "b", "c", "d", "e", "f", "g", "h"], -2); // [‘g’, ‘h’, ‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’]
