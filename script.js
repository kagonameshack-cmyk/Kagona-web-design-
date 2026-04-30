document.addEventListener("DOMContentLoaded", function(){

/* =========================
   FORM LOGIC (APPLICATION PAGE ONLY)
========================= */

if(document.querySelector(".form-step")){

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


/* COUNTRY LIST */

const countries = [
"Argentina","Australia","Austria","Belgium","Brazil","Canada","China",
"Denmark","Finland","France","Germany","India","Italy","Japan",
"Kenya","Mexico","Netherlands","Norway","Portugal","Qatar",
"Saudi Arabia","Singapore","South Africa","Spain","Sweden",
"Switzerland","UAE","United Kingdom","United States"
];

const countrySelect = document.getElementById("country");

if(countrySelect){
countries.sort().forEach(country=>{
let option = document.createElement("option");
option.value = country;
option.textContent = country;
countrySelect.appendChild(option);
});
}


/* CURRENCY CONVERTER */

const rates = {
USD:1,
EUR:1.08,
GBP:1.25,
KES:0.0078
};

const budgetInput = document.getElementById("budget");
const currencySelect = document.getElementById("currency");
const preview = document.querySelector(".usdPreview");

if(budgetInput && currencySelect && preview){

function convert(){
let amount = parseFloat(budgetInput.value) || 0;
let currency = currencySelect.value;
let usd = amount * rates[currency];
preview.innerText = "≈ $" + usd.toFixed(2) + " USD";
}

budgetInput.addEventListener("input", convert);
currencySelect.addEventListener("change", convert);
convert();

}


/* REVIEW PAGE */

function updateReview(){

const project = document.getElementById("projectType");
const name = document.getElementById("fullName");
const email = document.getElementById("email");
const country = document.getElementById("country");
const budget = document.getElementById("budget");
const currency = document.getElementById("currency");
const timeline = document.getElementById("timeline");

if(project) document.getElementById("reviewProject").innerText = project.value;
if(name) document.getElementById("reviewName").innerText = name.value;
if(email) document.getElementById("reviewEmail").innerText = email.value;
if(country) document.getElementById("reviewCountry").innerText = country.value;
if(budget && currency) document.getElementById("reviewBudget").innerText = budget.value + " " + currency.value;
if(timeline) document.getElementById("reviewTimeline").innerText = timeline.value;

}

document.querySelectorAll(".next").forEach(btn=>{
btn.addEventListener("click", updateReview);
});


/* FORM SUBMIT */

const form = document.getElementById("luxuryForm");

if(form){
form.addEventListener("submit", function(e){
e.preventDefault();
window.location.href = "success.html";
});
}

}


/* =========================
   HAMBURGER MENU (HOMEPAGE ONLY)
========================= */

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

if(hamburger && menu){

hamburger.addEventListener("click", function(){
menu.classList.toggle("active");
hamburger.classList.toggle("active");
});

document.querySelectorAll(".menu-overlay a").forEach(link=>{
link.addEventListener("click", ()=>{
menu.classList.remove("active");
hamburger.classList.remove("active");
});
});

}

});
