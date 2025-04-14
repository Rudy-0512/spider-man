console.log(work)

let age= document.querySelector(".job");
let spider= document.querySelector(".suit");
let button= document.querySelector(".button");
let normalSpider= document.getElementById("Normal-spider");
let spiderSuit= document.getElementById("Spider-suit");

button.onClick = funcation();{

let job = Q1.value;
console.log(job);
let suit = Q2.value;
console.log(suit);

if(job === "Photographer" && suit === "One") {
    console.log("Tobey")
    result.textContent = "You are Tobey!"
    normalSpider.style.display = "block";
    spiderSuit.style.display = "block";
} else if(job === "Engineer" && suit === "Two") {
    result.textContent = "You are Tom!"
} else if(job === "Genuis" && suit === "Three"){
    result.textContent = "You are Andrew!"
}
    



};