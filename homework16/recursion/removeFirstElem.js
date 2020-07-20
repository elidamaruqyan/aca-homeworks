const removeFirstElem = (array) =>{
    [first, ...rest] = array;

    if(!array.length) return [];

    if(first){
        return array.slice(1)
    }

    return(removeFirstElem(array))

};

removeFirstElem([6, 78, 'n', 0, 1]);  // [78, 'n', 0, 1]
removeFirstElem([5]);  // []
removeFirstElem([]);  // []