//during classwork
class Dictionary {
    constructor(defaultValue) {
        const normalizedValues = Object.entries(
            defaultValue
        ).map(([key, value]) => [key, new Set([value])]);
        this.dict = new Map(normalizedValues);
    }

    get(key) {
        return this.dict.get(key);
    }

    /**
     *
     * get(key) {
     *  return {
     *    value,
     *    remove(value) {
     *      this.dict.get(key).filter(...)
     *    }
     *  }
     * }
     */

    add(key, value) {
        if (this.dict.has(key)) {
            this.dict.get(key).add(value);
        } else {
            this.dict.set(key, new Set([value]));
        }
    }

    getCountByKey(key) {
        return this.dict.get(key).size;
    }

    remove(key) {
        this.dict.delete(key);
    }
}

const dict = new Dictionary({ key: "value", secondKey: "value2" });

console.log(dict.get('secondKey')); // 'value'
dict.add("num", 10);
dict.add("num", 12);
console.log(dict.get('num')); // 'value'
dict.add("negNum", -10);
dict.add("num", 200);
dict.get("num"); // [ 10, 200 ]
dict.get("num").delete(10);
console.log(dict.get("num")); // [200]
dict.getCountByKey('num'); // 2
dict.getCountByKey('negNum'); // 1
dict.remove("negNum");
dict.getCountByKey("num"); // 0
dict.keys(); // 'negNum', 'num'
dict.values(); // 10, -10, 200
