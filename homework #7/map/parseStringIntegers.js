//old
const parseInteger = (values) => {
    return values.map((item) => Number.isNaN(parseInt(item)) ? null : parseInt(item));
};

parseInteger(["1", "2", "34"]); // [1, 2, 34];
parseInteger(["1", "px", "2323"]); // [1, null, 2323];

// new
// const parseInteger = (args) => {
//     const res = args.map((el) =>{
//         if(Number(el)){
//             return Number(el);
//         }
//
//         return null;
//     });
//     return res;
// };
//
// parseInteger(["1", "2", "34"]); // [1, 2, 34];
// parseInteger(["1", "px", "2323"]); // [1, null, 2323];