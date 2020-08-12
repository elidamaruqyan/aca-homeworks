import {doGet} from "../helpers/request.helper.js";
import {routes} from "../helpers/routes.helper.js";

const listWrapper = document.getElementById("list");
const paginationWrapper = document.getElementById("pagination");
const searchBtn = document.querySelector("#getBook");
const searchInput = document.querySelector("#searchBook");
const loader = document.querySelector("#overlay");
const itemEl = document.createElement("div");
const template = document.createElement("div");
const arr = [];

let url;
let currentPage = 1,
    rows = 100,
    start = "",
    totalCount = "";

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
    loader.removeAttribute('hidden');
    return doGet(url)
        .then((data) => {
            loader.setAttribute('hidden', '');
            start = data.start;
            totalCount = Math.ceil(data.numFound / rows);

            data.docs.forEach((item) => {
                arr.push(item);
            });

            renderList(arr, listWrapper, rows, currentPage);
            setupPagination(arr, paginationWrapper, rows);
        });
};

const renderList = (items, wrapper, rows_per_page, page) => {
    wrapper.innerHTML = "";
    page--;

    let start = rows_per_page * page;

    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);

    let template = createItemsElements(paginatedItems);

    wrapper.appendChild(template);
};

const createItemsElements = (list) => {
    template.innerHTML = "";

    list.forEach(item => {
        const title = document.createElement("h2"),
            authorName = document.createElement("h5"),
            firstPublishYear = document.createElement("h4"),
            subject = document.createElement("p");

        title.innerText = "Title: " + item.title;
        authorName.innerText = "Author Name: " + item.author_name;
        firstPublishYear.innerText = "First Publish Year: " + item.first_publish_year;
        subject.innerText = "Subject: " + item.subject;

        itemEl.append(title, authorName, firstPublishYear);
    });

    template.innerHTML = "";
    template.append(itemEl);

    return template;
};

const setupPagination = (items, wrapper) => {
    wrapper.innerHTML = "";
    let pageCount = totalCount;
    let template = document.createDocumentFragment();

    for (let i = 1; i < pageCount + 1; i++) {
        let btn = paginationButton(i, items);

        template.appendChild(btn);
    }

    wrapper.appendChild(template);
};

const paginationButton = (page, items) => {
    let button = document.createElement("button");
    button.innerText = page;

    if (currentPage === page) button.classList.add("active");

    button.addEventListener("click", function () {
        currentPage = page;
        renderList(items, listWrapper, rows, currentPage);
        getBook(url + '&page=' + `${currentPage}`);
        let current_btn = document.querySelector(".pagination button.active");
        current_btn.classList.remove("active");
        button.classList.add("active");
    });

    return button;
};
