import {doGet} from "../helpers/request.helper.js";
import {routes} from "../helpers/routes.helper.js";

const list = document.querySelector(".state");
const url = routes.getAllFilms();

const getAllFilms = (url) => {
    return doGet(url)
        .then((films) => {
            films.forEach((elem) => {
                const listItem = document.createElement("li"),
                    title = document.createElement("h2"),
                    releaseDate = document.createElement("time"),
                    director = document.createElement("h4"),
                    desc = document.createElement("p");

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
