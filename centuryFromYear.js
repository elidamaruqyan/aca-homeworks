const centuryFromYear = (year) => {
    return Math.floor((year - 1) / 100) + 1;
};

centuryFromYear(2019);
