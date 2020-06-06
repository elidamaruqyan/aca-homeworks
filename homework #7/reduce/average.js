const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
        age: 10,
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
        age: 20,
    },
];

const getAverageAge = (values) => {
    const total = values.reduce((acc, c) => acc + c.age, 0);
    return total / values.length;
};

getAverageAge(users);
