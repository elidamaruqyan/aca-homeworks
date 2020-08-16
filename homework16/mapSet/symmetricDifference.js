let setA = new Set([1, 2, 3, 4]);
let setC = new Set([3, 4, 5, 6]);

const getSymmetricDifference = (setA, setB) => {
  const _symmetricDifference = new Set([...setA, ...setB]);

  for (let item of setA.values()) {
    if (setB.has(item)) {
      _symmetricDifference.delete(item);
    }
  }

  return _symmetricDifference;
};

getSymmetricDifference(setA, setC); // => Set [1, 2, 5, 6]
