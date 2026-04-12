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


function updateProgress(step,totalSteps){
let percent=(step/totalSteps)*100;
document.getElementById("progressBar").style.width=percent+"%";
}


const countries=[
"United States","United Kingdom","Canada","Australia","Germany",
"France","Kenya","South Africa","Nigeria","India","China","Japan"
];

const list=document.getElementById("countryList");

function loadCountries(){
countries.sort().forEach(c=>{
let option=document.createElement("option");
option.textContent=c;
list.appendChild(option);
});
}

document.getElementById("countrySearch").addEventListener("input",function(){
let filter=this.value.toLowerCase();
list.innerHTML="";
countries
.filter(c=>c.toLowerCase().includes(filter))
.forEach(c=>{
let option=document.createElement("option");
option.textContent=c;
list.appendChild(option);
});
});

loadCountries();

const rate=0.0077; // Example KES → USD

document.getElementById("localAmount").addEventListener("input",function(){

let local=this.value;
let usd=(local*rate).toFixed(2);

document.getElementById("usdAmount").innerText=usd;

});
