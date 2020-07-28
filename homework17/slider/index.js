const slides = document.querySelectorAll('.slider__items');
const nextSlideBtn = document.querySelector(".next-slide");
const prevSlideBtn = document.querySelector(".prev-slide");
let index = 0;
let timer;

window.addEventListener("load",function() {
    timer = setInterval(function(){nextSlide()}, 4000);
});

nextSlideBtn.addEventListener("click", () => {
    clearInterval(timer);
    nextSlide();
});

prevSlideBtn.addEventListener("click", () => {
    prevSlide();
});

const nextSlide = () => {
    if (index === slides.length - 1) {
        index = 0
    } else {
        index++;
    }

    changeSlide();
};

const prevSlide = () => {
    if (index === 0) {
        index = slides.length - 1;
    } else {
        index--
    }
    changeSlide()
};

const changeSlide = () => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slides[index].classList.add("active");
};