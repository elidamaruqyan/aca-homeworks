const uppercase = (str, index) => {
    return (
        str.substring(0, index) +
        str[index].toUpperCase() + // or str.charAt(index).toUpperCase() +
        str.substring(index + 1)
    );
};

console.log(uppercase("daenerys", 1)); //"dAenerys"
console.log(uppercase("lampard", 0)); //"Lampard"
console.log(uppercase("Elon", 3)); //"EloN"
