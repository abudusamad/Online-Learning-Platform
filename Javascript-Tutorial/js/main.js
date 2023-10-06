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