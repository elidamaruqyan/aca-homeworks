const formData = document.querySelector('#form-data');
const submitForm = document.querySelector('#get-info');
const result = document.querySelector('#result');
const inputs = formData.elements;
const values = {};


const formSerialize = () => {
    for (let i = 0; i < inputs.length - 1; i++) {
        if (inputs[i].value.trim() === "") {
            inputs[i].classList.add("error")
        } else {
            inputs[i].classList.remove("error");
        }
        if (inputs[i].type === "radio") {
            if (inputs[i].checked) {
                values[inputs[i].name] = inputs[i].value;
            }
        } else {
            values[inputs[i].name] = inputs[i].value;
        }

    }
    return values;
};

submitForm.addEventListener("click", (e) => {
    e.preventDefault();
    const response = formSerialize(formData);
    result.innerText = JSON.stringify(response);
});