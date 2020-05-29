/**
 1. https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 2. https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/values
 3. https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 */

// const isKeyIncluded = (obj, key) => {
//   const keys = Object.keys(obj);

//   return keys.includes(key);
// }

// const isValueIncluded = (obj, value) => {
//   const values = Object.values(obj);

//   return values.includes(value);
// }

const isKeyIncluded = (obj, key) => Object.keys(obj).includes(key);

const isValueIncluded = (obj, value) => Object.values(obj).includes(value);

console.log(isKeyIncluded({ user: "Steve", name: "Jobs" }, "name")); // true
console.log(isKeyIncluded({ user: "Steve", name: "Jobs" }, "Jobs")); // false
console.log(isKeyIncluded({ a: 1, b: 2, c: "hello" }, "c")); //true

console.log(isValueIncluded({ user: "Steve", name: "Jobs" }, "name")); // false
console.log(isValueIncluded({ user: "Steve", name: "Jobs" }, "Jobs")); // true
console.log(isValueIncluded({ a: "1", b: "2", c: "hello" }, "hello")); // true

//This was a class work ))
