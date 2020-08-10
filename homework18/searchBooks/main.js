import {doGet} from "../helpers/request.helper.js";
import {routes} from "../helpers/routes.helper.js";

const searchInput = document.querySelector("#searchBook");
const searchBtn = document.querySelector("#getBook");
const searchedResult = document.querySelector("#booksWrapper");

let url;
const state = {
    inputValue: "",

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
            console.log(data);
            console.log(url);
            const list = document.createElement("ul");
            data.docs.forEach((book) => {
                const listItem = document.createElement("li"),
                      title = document.createElement("h2"),
                      authorName = document.createElement("h5"),
                      firstPublishYear = document.createElement("h4"),
                      subject = document.createElement("p");

                title.innerText = "Title: " + book.title;
                authorName.innerText = "Author Name: " + book.author_name;
                firstPublishYear.innerText = "First Publish Year: " + book.first_publish_year;
                subject.innerText = "Subject: " + book.subject;

                listItem.append(title, authorName, firstPublishYear);

                list.appendChild(listItem);
            });
            searchedResult.innerHTML = "";
            searchedResult.append(list)
        });
};


const handlePagination = () => {

};