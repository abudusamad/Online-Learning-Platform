const myHeading = document.querySelector('h1')
myHeading.textContent = "hello world"


const headingA = document.querySelector("#heading_A");
const buttonA = document.querySelector("#button_A");

const btn = document.querySelector("button");
const txt = document.querySelector("p");


btn.addEventListener("click", checkButton);

function checkButton() {
    if (btn.textContent === "start machine") {
        btn.textContent = "The machine is started"
        txt.textContent = "The machine is working"
    } else {
        btn.textContent = "Start Machine";
        txt.textContent = "Machine is Stopped"
    }
}



buttonA.onclick = () => {
    const name = prompt("What is your name? ");
    alert(`Hello ${name} nice to meet you`);
    headingA.textContent= `You're Welcome ${name}`
}


// using splice to remove item from a particular index from an array
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlistle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
    cities.splice(index, 1)
    console.log(cities)
}

//Accessing every item of the array using for loop

const birds = ["Parrot", "Falcon", "Owl"]

for (bird of birds) {
    console.log(bird)
}

//A simple code to the double an item
// using a function

function double(number) {
    return number * 2;

}

const numbers = [3, 5, 67, 8, 89];
const doubled = numbers.map(double)
console.log(doubled)

//how to filter array



function country(city) {
    return city.length > 8;
}

const countries = ["Washinton Dc", "Liverpool", "United State of America", "Ghana", "Togo"];
const longer = countries.filter(country);

console.log(longer)