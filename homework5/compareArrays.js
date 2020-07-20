const compareString = (arr1, arr2) => {
    let finalArr = [];
    arr1.forEach((e1) =>
        arr2.forEach((e2) => {
            let str1 = e1.toString().trim().toLowerCase();
            let str2 = e2.toString().trim().toLowerCase();
            if (str1 === str2) {
                finalArr.push(true);
            }
        })
    );
    return finalArr;
};

compareString(["Name", "VRezh", "test"], ["  name ", " Vrezh", "Test"]); // [true, true, true];
