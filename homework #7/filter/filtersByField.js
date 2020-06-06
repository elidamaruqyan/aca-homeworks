const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
        isAstronaut: true,
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
        isAstronaut: true,
    },
    {
        username: "Elon Musk",
        isAstronaut: false,
    },
];

const filterByField = (arrayItems) => {
    return arrayItems.filter((item) => {
        if(item.isAstronaut){
            return item;
        }
    });
};

filterByField(users, "isAstronaut"); // [{ username: "Yuri Gagarin", lang: "ru", isAstronaut: true, }, { username: "Nil Armstrong, lang: "ENG" }]