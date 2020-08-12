import {doGet} from "../helpers/request.helper.js";
import {routes} from "../helpers/routes.helper.js";

const searchInput = document.querySelector("#searchBook");
const searchBtn = document.querySelector("#getBook");
const searchedResult = document.querySelector("#booksWrapper");
const list = document.createElement("ul");

let url;
const state = {
    inputValue: "",
};

const pagingOptions = {
    totalCount: "",
    itemPerPage: 100,
    initialPage: "",
    currentPage: 0,

    get currentIndex() {
        console.log(this.itemPerPage * this.currentPage - 1);
        return this.itemPerPage * this.currentPage - 1;
    },

    get totalPage() {
        const count = Math.ceil(this.totalCount / this.itemPerPage);
        new Array(count).fill(1).forEach((_, index) => {
            console.log(index)
        });

        return count
    },
};

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (searchInput.value.trim() !== "") {
        state.inputValue = searchInput.value.split(' ').join('+');
    }

    url = routes.getBook(state.inputValue);

    getBook(url);

    handlePagination();
});

const getBook = (url) => {
    doGet(url)
        .then((data) => {
            pagingOptions.totalCount = data.num_found;
            pagingOptions.initialPage = data.start;

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