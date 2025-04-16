console.log("check js");

let Q1= document.querySelector(".job");
let Q2= document.querySelector(".suit");
let button= document.querySelector("button");
let normalSpider= document.getElementById("Normal-spider");
let spiderSuit= document.getElementById("Spider-suit");
let result=document.querySelector(".result");
let delete = document.querySelector("delete");



button.onclick = function() {
    console.log("button check");
    let job = Q1.value;
console.log(job);
let suit = Q2.value;
console.log(suit);

if(job === "Photographer" && suit === "One") {
console.log("Tobey")
h1.innerHTML = "You are Tobey!";
normalSpider.src = "pick.jpg";
spiderSuit.style.display = "block";
} else if(job === "Engineer" && suit === "Two") {
result.textContent = "You are Tom!"
} else if(job === "Genuis" && suit === "Three"){
result.textContent = "You are Andrew!"
}

};