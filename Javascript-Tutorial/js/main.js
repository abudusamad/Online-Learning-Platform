const myHeading = document.querySelector('h1')
myHeading.textContent = "hello world"

const headingA = document.querySelector("#heading_A");
const buttonA = document.querySelector("#button_A");


buttonA.onclick = () => {
    const name = prompt("What is your name?");
    alert(`Hello ${name} nice to meet you`);
    headingA.textContent = `You're welcome ${name}`
}