const parallelInput = document.querySelector('#parallel-input');
const textWrapper = document.querySelector('#typed-text');

parallelInput.addEventListener("input", (event) => {
    parallelInput.inputValue = event.target.value;
    textWrapper.innerText = parallelInput.inputValue;
});