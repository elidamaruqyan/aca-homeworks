import {doGet} from "../helpers/request.helper.js";
import {routes} from "../helpers/routes.helper.js";

const searchInput = document.querySelector("#searchBook");
const searchBtn = document.querySelector("#getBook");
const searchedResult = document.querySelector("#booksWrapper");

let url;
const state = {
    inputValue: ""
};

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (searchInput.value.trim() !== "") {
        state.inputValue = searchInput.value.split(' ').join('+');
    }

    url = routes.getBook(state.inputValue);
    getBook(url);
});

const getBook = (url) => {
    doGet(url)
        .then((data) => {
            data.docs.forEach((elem) => {
                const listItem = document.createElement("li"),
                      title = document.createElement("h2"),
                      authorName = document.createElement("h5"),
                      firstPublishYear = document.createElement("h4");

                title.innerText = "Title: " + elem.title;
                authorName.innerText = "Author Name: " + elem.author_name;
                firstPublishYear.innerText = "First Publish Year: " + elem.first_publish_year;

                listItem.append(title, authorName, firstPublishYear);


                searchedResult.innerHTML = "";
                searchedResult.appendChild(listItem);
                console.log(searchedResult)
            });
        });
};