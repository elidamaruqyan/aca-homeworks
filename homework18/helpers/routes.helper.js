import {require} from "../configs/config.js";

export const routes = {
    getAllFilms() {
        return `${require.FILMS_URL}/films`;
    },

    getDocsPic(breed) {
        return `${require.DOCS_URL + breed}/images/random`
    },

    getBook(bookName) {
        return `${require.BOOKS_URL + '?q=' + bookName}`
    }
};
