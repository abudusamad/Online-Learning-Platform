
const btn = document.querySelector("Button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")


document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight
})


function random(number) {
    return Math.floor(Math.random() * number);
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 100; i++){
        ctx.beginPath();
        ctx.fillStyle = "rgba(255,0,0,0.5)";
        ctx.arc(
            random(canvas.width),
            random(canvas.height),
            random(59), 0,
                2 * Math.PI,
            

        )
        ctx.fill();
    }
}


btn.addEventListener("click", draw);


function toUpper(string) {
    return string.toUpperCase();
}


const cats = ["Leopard", "serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const toUpperCats = cats.map(toUpper)


console.log(toUpperCats)