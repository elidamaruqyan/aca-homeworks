const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
    },
];

const filterUsers = (userList) => {
    return userList.filter((item) => {
        let lowerCaseValue = item.lang.toLowerCase();
        if (lowerCaseValue === "ru") {
            return false;
        }
        return item;
    });
};

filterUsers(users); // [{ username: "Nil Armstrong, lang: "ENG" }]
