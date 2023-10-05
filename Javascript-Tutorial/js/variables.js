let myVariable;
myVariable = "Bob";

///String
myVariable = "Bobs";

//Boolean

myVariable = false

//Numbers = 
myVariable = 2343

//Array

myVariable = [2, "Bobs", 435, "Kofi ", "bring me the money"]

//Objects

const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
    const name = prompt("Enter your name");
    button.textContent = `Player 1: ${name}`
}