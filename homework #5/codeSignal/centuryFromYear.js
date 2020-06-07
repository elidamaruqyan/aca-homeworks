const centuryFromYear = (year) => {
    return Math.ceil((year-1) / 100);
};

centuryFromYear(2019);