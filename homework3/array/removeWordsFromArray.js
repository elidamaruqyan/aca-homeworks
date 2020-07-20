// const arr = ["Godfather", "Godfather", "Game of Thrones", "Social Network"];
// const arr = ['Manchester City', 'Milan', 'Marseille'];
const arr = ["Godfather", "Whiplash", "Social Network"];

const removeByLetter = (arr, letter) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0].toLowerCase() !== letter) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
};

removeByLetter(arr, "g"); //Social Network
removeByLetter(arr, 'm'); // []
removeByLetter(arr, "v"); // const arr = ['Godfather', 'Whiplash', 'Social Network'];
