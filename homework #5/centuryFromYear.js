const centuryFromYear = (year) => {
    console.log(Math.floor((year - 1) / 100) + 1);
    return Math.floor((year - 1) / 100) + 1;
};

centuryFromYear(2019);
