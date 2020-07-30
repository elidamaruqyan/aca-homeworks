import {SORTING_ORDERS} from "./constants.js";
import {createTableRow} from "./dom.helpers.js";
import {sortStudents} from "./data.helper.js";

const table = document.querySelector("#sortable-table");
const tableBody = table.querySelector("tbody");
const ageCol = table.querySelector("#sortable-table-age");

const state = {
    students: [
        {
            name: "Gohar",
            age: 30,
            grade: 8,
        },
        {
            name: "Vrezh",
            age: 20,
            grade: 8.7,
        },
        {
            name: "Arev",
            age: 50,
            grade: 10,
        },
        {
            name: "Elida",
            age: 40,
            grade: 9.7,
        },
    ],
    order: SORTING_ORDERS.random, // 'random', 'asc', 'desc' ⬆️⬇️
};

const render = (state) => {
    tableBody.innerHTML = "";

    state.students.forEach(({name, age, grade}) => {
        // maybe with objects ?
        const row = createTableRow([name, grade, age]);

        tableBody.append(row); // warning
    });

    const sortIcon = ageCol.querySelector(".sort-icon");

    switch (state.order) {
        case SORTING_ORDERS.random:
            sortIcon.textContent = "➡️";
            break;
        case SORTING_ORDERS.asc:
            sortIcon.textContent = "⬆️";
            break;
        case SORTING_ORDERS.desc:
            sortIcon.textContent = "⬇️";
            break;
        default:
            throw new Error(`${state.order} is not valid sorting command`);
    }
};

render(state);

ageCol.addEventListener("click", (evt) => {
    // @TODO: resolve order change according to the docs
    switch (state.order) {
        case SORTING_ORDERS.random:
            state.order = SORTING_ORDERS.asc;
            break;
        case SORTING_ORDERS.asc:
            state.order = SORTING_ORDERS.desc;
            break;
        case SORTING_ORDERS.desc:
            state.order = SORTING_ORDERS.asc;
            break;
        default:
            throw new Error(`${state.order} is not an valid order!`);
    }

    state.students = sortStudents(state.students, state.order);

    render(state);
});
