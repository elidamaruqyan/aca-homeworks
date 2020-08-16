import {doGet} from "../helpers/request.helper.js";
import {routes} from "../helpers/routes.helper.js";
import {append} from "../helpers/render.js";

const selectDog = document.querySelector("#chooseDogs");
const wrapper = document.querySelector('.demo');
const img = document.querySelector('img');

let url;
const state = {
    inputValue: ""
};

selectDog.addEventListener("change", (e) => {
    state.inputValue = e.target.value;
    url = routes.getDocsPic(state.inputValue);
    getDogPic(url);
});

const getDogPic = (url) => {
    return doGet(url)
        .then((dogs) => {
            img.src = dogs.message;
            append(wrapper, img)
        })
};





