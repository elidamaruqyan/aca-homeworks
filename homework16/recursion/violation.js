/**
 * Return index of element, where sorting order is violated otherwise -1
 * @param {Array}  arr of numbers
 */

//during classwork
function findViolatorIndex(arr) {
    function iter(tmp, idx) {
        let [first, ...rest] = tmp;

        if (arr.length === idx) {
            return -1
        }

        if (first > rest[0]) {
            return idx + 1
        }

        return iter(rest, idx += 1);
    }

    return iter(arr, 0);
}


findViolatorIndex([2, 12, 15, 48, 64]); //-1
findViolatorIndex([-9, -4, -4, 3, 12, 4, 5]); //5
