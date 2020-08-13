import {doGet} from "../helpers/request.helper.js";
import {routes} from "../helpers/routes.helper.js";

/*UI Elements*/
const loader = document.querySelector("#overlay");

const listWrapper = document.getElementById("list");
const paginationWrapper = document.getElementById("pagination");
const searchBtn = document.querySelector("#getBook");
const searchInput = document.querySelector("#searchBook");
const itemEl = document.createElement("div");
const template = document.createElement("div");
const totalCountElem = document.querySelector('.total-count');

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
    listWrapper.innerHTML = "";
    getBook(url);

});

// @TODO REMOVE INFO AFTER NEW SEARCH
const getBook = (url) => {
    loader.removeAttribute('hidden');
    return doGet(url)
        .then((data) => {
            loader.setAttribute('hidden', '');
            start = data.start;
            totalCount = Math.ceil(data.numFound / rows);
            totalCountElem.innerHTML = "";
            totalCountElem.innerHTML = data.numFound;

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
    list.forEach(item => {
        if(!item.title || !item.author_name ||  !item.first_publish_year || !item.subject ){
            return false
        }
        if(item.subject.length > 5){
            return item.subject
        }
        console.log(item.subject.length);
        const listItem = document.createElement("div"),
            title = document.createElement("h2"),
            authorName = document.createElement("h5"),
            firstPublishYear = document.createElement("h4"),
            subject = document.createElement("p");

        listItem.classList.add("searched-item");
        title.innerText = "Title: " + item.title;
        authorName.innerText = "Author Name: " + item.author_name;
        firstPublishYear.innerText = "First Publish Year: " + item.first_publish_year;
        subject.innerText = "Subject: " + item.subject;

        listItem.append(title, authorName, firstPublishYear, subject);
        itemEl.appendChild(listItem);
        itemEl.classList.add("grid-container")
    });

    template.append(itemEl);
    template.classList.add("template");
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
        listWrapper.innerHTML = "";
        getBook(url + '&page=' + `${currentPage}`);

        let current_btn = document.querySelector(".pagination button.active");
        current_btn.classList.remove("active");
        button.classList.add("active");
    });

    return button;
};