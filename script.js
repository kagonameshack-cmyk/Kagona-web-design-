// 🔥 FIREBASE IMPORT (MODULE MODE)
import { db, collection, addDoc } from "./firebase.js";

emailjs.init("88PqxcgG41b24-rym");

document.addEventListener("DOMContentLoaded", function(){

/* =========================
   FORM LOGIC (APPLICATION PAGE ONLY)
========================= */

if(document.querySelector(".form-step")){

const steps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next");
const prevBtns = document.querySelectorAll(".prev");

let current = 0;

// NEXT BUTTON
nextBtns.forEach(btn => {
btn.addEventListener("click", () => {

if(current < steps.length - 1){
steps[current].classList.remove("active");
current++;
steps[current].classList.add("active");
}

});
});

// PREV BUTTON
prevBtns.forEach(btn => {
btn.addEventListener("click", () => {

if(current > 0){
steps[current].classList.remove("active");
current--;
steps[current].classList.add("active");
}

});
});


/* =========================
   COUNTRY LIST
========================= */

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


/* =========================
   CURRENCY CONVERTER
========================= */

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


/* =========================
   REVIEW PAGE
========================= */

function updateReview(){

const project = document.getElementById("projectType");
const name = document.getElementById("fullName");
const email = document.getElementById("email");
const company = document.getElementById("company");
const phone = document.getElementById("phone");
const country = document.getElementById("country");
const budget = document.getElementById("budget");
const currency = document.getElementById("currency");
const timeline = document.getElementById("timeline");

if(project) document.getElementById("reviewProject").innerText = project.value;
if(name) document.getElementById("reviewName").innerText = name.value;
if(email) document.getElementById("reviewEmail").innerText = email.value;

if(company && document.getElementById("reviewCompany")){
document.getElementById("reviewCompany").innerText = company.value;
}

if(phone && document.getElementById("reviewPhone")){
document.getElementById("reviewPhone").innerText = phone.value;
}

if(country) document.getElementById("reviewCountry").innerText = country.value;

if(budget && currency){
document.getElementById("reviewBudget").innerText =
budget.value + " " + currency.value;
}

if(timeline) document.getElementById("reviewTimeline").innerText = timeline.value;

}

// UPDATE REVIEW ON NEXT CLICK
nextBtns.forEach(btn=>{
btn.addEventListener("click", updateReview);
});


/* =========================
   FORM SUBMIT (FIREBASE)
========================= */

const form = document.getElementById("luxuryForm");

if(form){
form.addEventListener("submit", async function(e){
e.preventDefault();

try{

await addDoc(collection(db, "applications"), {
project: document.getElementById("projectType")?.value || "",
name: document.getElementById("fullName")?.value || "",
email: document.getElementById("email")?.value || "",
company: document.getElementById("company")?.value || "",
phone: document.getElementById("phone")?.value || "",
country: document.getElementById("country")?.value || "",
budget: document.getElementById("budget")?.value || "",
currency: document.getElementById("currency")?.value || "",
timeline: document.getElementById("timeline")?.value || "",
createdAt: new Date()
});

window.location.href = "success.html";

}catch(error){
console.error(error);
alert("Submission failed. Try again.");
}

});
}

}


/* =========================
   HAMBURGER MENU
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


/* =========================
   CASE STUDY MODAL (FIXED)
========================= */

const cards = document.querySelectorAll(".portfolio-card");
const modal = document.getElementById("caseModal");

const modalImg = document.getElementById("caseImage");
const modalTitle = document.getElementById("caseTitle");
const modalCategory = document.getElementById("caseCategory");

const closeModal = document.getElementById("closeModal");

if(cards.length && modal){

cards.forEach(card => {
card.addEventListener("click", () => {

modal.classList.add("active");

if(modalImg) modalImg.src = card.dataset.image;
if(modalTitle) modalTitle.innerText = card.dataset.title;
if(modalCategory) modalCategory.innerText = card.dataset.category;

});
});

if(closeModal){
closeModal.addEventListener("click", () => {
modal.classList.remove("active");
});
}

modal.addEventListener("click", (e) => {
if(e.target === modal){
modal.classList.remove("active");
}
});

}


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".nav-container");

window.addEventListener("scroll", () => {

if(navbar){
if(window.scrollY > 50){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}
}

});


/* =========================
   SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

reveals.forEach(el => {

const top = el.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if(top < windowHeight - 100){
el.classList.add("active");
}

});

});

});
