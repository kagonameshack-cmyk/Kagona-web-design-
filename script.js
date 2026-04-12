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


const countries = [
"Argentina","Australia","Austria","Belgium","Brazil","Canada","China",
"Denmark","Finland","France","Germany","India","Italy","Japan",
"Kenya","Mexico","Netherlands","Norway","Portugal","Qatar",
"Saudi Arabia","Singapore","South Africa","Spain","Sweden",
"Switzerland","UAE","United Kingdom","United States"
];

const countrySelect = document.getElementById("country");

countries.sort().forEach(country=>{
let option = document.createElement("option");
option.value = country;
option.textContent = country;
countrySelect.appendChild(option);
});


document.addEventListener("DOMContentLoaded", function(){

const rates = {
USD:1,
EUR:1.08,
GBP:1.25,
KES:0.0078
};

const budgetInput = document.getElementById("budget");
const currencySelect = document.getElementById("currency");
const preview = document.querySelector(".usdPreview");

function convert(){

let amount = parseFloat(budgetInput.value) || 0;

let currency = currencySelect.value;

let usd = amount * rates[currency];

preview.innerText = "≈ $" + usd.toFixed(2) + " USD";

}

budgetInput.addEventListener("input", convert);
currencySelect.addEventListener("change", convert);

convert();

});
