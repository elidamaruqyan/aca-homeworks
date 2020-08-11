import {doGet} from "../helpers/request.helper.js";
import {routes} from "../helpers/routes.helper.js";

const list = document.querySelector(".wrapper");
const url = routes.getAllFilms();

const getAllFilms = (url) => {
    return doGet(url)
        .then((films) => {
            console.log(films);
            films.forEach((elem) => {
                const listItem = document.createElement("div"),
                    title = document.createElement("h2"),
                    releaseDate = document.createElement("time"),
                    director = document.createElement("h4"),
                    desc = document.createElement("p");

                listItem.classList.add("movie-card");
                title.classList.add("movie-card__title");
                desc.classList.add("movie-card__description");

                title.innerText = "Title: " + elem.title;
                releaseDate.innerText = "Release Date: " + elem.release_date;
                director.innerText = "Director: " + elem.director;
                desc.innerText = "Description: " + elem.description;

                listItem.append(title, releaseDate, director, desc);
                list.appendChild(listItem);
            });
            return list;
        });
};

getAllFilms(url);
