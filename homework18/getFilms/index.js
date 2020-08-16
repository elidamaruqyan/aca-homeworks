import {doGet} from "../helpers/request.helper.js";
import {routes} from "../helpers/routes.helper.js";
import {append} from "../helpers/render.js";
import {createNode} from "../helpers/render.js";

const list = document.querySelector(".wrapper");
const url = routes.getAllFilms();

const getAllFilms = (url) => {
    return doGet(url)
        .then((films) => {
            films.forEach((elem) => {
                const listItem = createNode("div"),
                      title = createNode("h2"),
                      releaseDate = createNode("time"),
                      director = createNode("h4"),
                      desc = createNode("p");

                listItem.classList.add("movie-card");
                title.classList.add("movie-card__title");
                desc.classList.add("movie-card__description");

                title.innerText = "Title: " + elem.title;
                releaseDate.innerText = "Release Date: " + elem.release_date;
                director.innerText = "Director: " + elem.director;
                desc.innerText = "Description: " + elem.description;

                listItem.append(title, releaseDate, director, desc);
                append(list, listItem);
            });
            return list;
        });
};

getAllFilms(url);
