const paragraph = document.querySelectorAll('.paragraphs');
const changeColorBtn = document.querySelector('#apply');
const bgColor = document.querySelector("#bg-color-picker");
const color = document.querySelector("#color-picker");

const changeColor = (paragraph) => {
    paragraph.forEach((item) => {
        item.style.backgroundColor = bgColor.value;
        item.style.color = color.value;
    });
};

changeColorBtn.addEventListener("click", function () {
    changeColor(paragraph)
});
