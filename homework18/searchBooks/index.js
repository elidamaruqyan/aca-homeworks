import {doGet} from "../helpers/request.helper.js";
import {routes} from "../helpers/routes.helper.js";

const getBookBtn = document.querySelector('.getBook');
const searchVal = document.querySelector('#searchBook');
const list = document.querySelector('#list');
const paginationElem = document.querySelector("#pagination");
let currentPage = 1;
let rows = 5;
let url;

const state = {
    inputValue: "",
    pagingOptions : {
        url,
        totalCount,
        itemPerPage: 100,
        initialPage,
        currentPage: 0,

        get currentIndex() {
            console.log(this.itemPerPage * this.currentPage - 1);
            return this.itemPerPage * this.currentPage - 1;
        },

        get totalPage() {
            console.log(Math.ceil(this.totalCount / this.itemPerPage));
            return Math.ceil(this.totalCount / this.itemPerPage)
        },
    }
};

getBookBtn.addEventListener("click", (e) => {
    e.preventDefault();
    state.inputValue = searchVal.value.split(' ').join('+');
    url = routes.getBook(state.inputValue);
    getBook(url);
});

const getBook = (url) => {
    console.log(url);
    doGet(url)
        .then((books) => {
            state.pagingOptions.totalCount = books.numFound;
            state.pagingOptions.initialPage = books.start;
            const pagingOptions = {
                totalCount: books.numFound,
                itemPerPage: 5,
                initialPage: books.start,
                currentPage: 0,
                get currentIndex() {
                    console.log(this.itemPerPage * this.currentPage - 1);
                    return this.itemPerPage * this.currentPage - 1;
                },

                get totalPage() {
                    console.log(Math.ceil(this.totalCount / this.itemPerPage));
                    return Math.ceil(this.totalCount / this.itemPerPage)
                },
                url: url
            };

            pagingOptions.totalPage;
            const showedItems = books.docs.slice(pagingOptions.currentPage, pagingOptions.itemPerPage);
            console.log(showedItems);
            // books.docs.forEach((elem) => {
            //     console.log(elem)
            // })
        })
};


const displayList = (items, wrapper, rows_per_page, page) => {
    wrapper.innerHTML = "";
    page--;

};

