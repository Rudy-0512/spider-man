console.log("check js");

let Q1= document.querySelector(".job");
let Q2= document.querySelector(".suit");
let button= document.querySelector("button");
let normalSpider= document.getElementById("Normal-spider");
let spiderSuit= document.getElementById("spider-suit");
let result=document.querySelector(".result");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let Tobey = document.getElementById("tobey");



button.onclick = function() {
    console.log("button check");
    let job = Q1.value;
console.log(job);
let suit = Q2.value;
console.log(suit);


if(job === "Photographer" && suit === "One") {
console.log("Tobey")
h1.innerHTML = "You are Tobey!";
normalSpider.src = "Tobey.webp";
spiderSuit.display = "block";
h3.style.display = "block";

} else if(job === "Engineer" && suit === "Two") {
h1.innerHTML = "You are Tom!"
normalSpider.src = "R.png";
} else if(job === "Genius" && suit === "Three"){
h1.innerHTML = "You are Andrew!"
normalSpider.src = "drew.png";
}

};