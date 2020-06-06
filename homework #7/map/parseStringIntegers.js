const parseInteger = (values) => {
    return values.map((item) => isNaN(parseInt(item)) ? null : parseInt(item));
};

parseInteger(["1", "2", "34"]); // [1, 2, 34];
parseInteger(["1", "px", "2323"]); // [1, null, 2323];


