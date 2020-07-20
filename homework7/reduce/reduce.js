const reduce = (iterable, reduceFn, accumulator) => {
    for(let i of iterable){
        accumulator = reduceFn(accumulator, i);
    }
    return accumulator;
};

reduce([1,2,3], (acc,elem)=>acc+elem , 0); // 6
