const showDateBtn = document.querySelector("#show-date");
const dateWrapper = document.querySelector("#date-wrapper");

showDateBtn.addEventListener("click", (event) => {
    event.preventDefault();
    dateWrapper.innerHTML = Date();
});
