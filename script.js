const steps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next");
const prevBtns = document.querySelectorAll(".prev");

let current = 0;

nextBtns.forEach(btn => {

btn.addEventListener("click", () => {

steps[current].classList.remove("active");

current++;

steps[current].classList.add("active");

});

});

prevBtns.forEach(btn => {

btn.addEventListener("click", () => {

steps[current].classList.remove("active");

current--;

steps[current].classList.add("active");

});

});
