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

const getUserNames = (userList) => {
    return userList.map((item) => item.username);
};

const getUsernameLengths = (userList) => {
    return userList.map((item) => item.username.length);
};

getUserNames(users);
getUsernameLengths(users);

// const getUserNames = (item) => item.username;
// const getUsernameLengths = (item) => item.username.length;
// users.map(getUserNames);
// users.map(getUsernameLengths);
