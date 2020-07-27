// import { isRequired } from "./helpers/validate.helper.js";

const formData = document.querySelector('#form-data');
const submitForm = document.querySelector('#get-info');
const valueArr = [];


submitForm.addEventListener("click", (e) => {
    e.preventDefault();
    for (let i = 0; i < formData.elements.length; i++) {
        let inputValue = formData.elements[i].value;
        console.log(inputValue);
        valueArr.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value));
    }
});

function displayRadioValue() {
    document.getElementById("result").innerHTML = "";
    var ele = document.getElementsByTagName('input');

    for(i = 0; i < ele.length; i++) {

        if(ele[i].type="radio") {

            if(ele[i].checked)
                document.getElementById("result").innerHTML
                    += ele[i].name + " Value: "
                    + ele[i].value + "<br>";
        }
    }
}