import {Config } from "../configs/config.js";

export const routes = {
    getAllFilms() {
        return `${Config.apiURLs.filmsUrl}/films`;
    },

    getDocsPic(breed) {
        return `${Config.apiURLs.docsUrl + breed}/images/random`
    },

    getBook(bookName) {
        return `${Config.apiURLs.booksUrl + '?q=' + bookName}`
    }
};
