const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")


document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
})

function random(number) {
    return Math.floor(Math.random() * number);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 100; i++){
        ctx.beginPath();
        ctx.fillStyle = "rgba(200,0,0,0.5)";
        ctx.arc(
            random(canvas.width),
            random(canvas.height),
            random(50),
            0,
            2 * Math.PI
        );
        ctx.fill();
    }
}

btn.addEventListener("click", draw);


//adding map to find the collection of the item in an array

function toUpper(string) {
   return string.toUpperCase();
}

const cats = ["Mouse", "Lion", "tiger", "snake", "Leopard", "geraffe"];
const upperCats = cats.map(toUpper);
console.log(upperCats)

//adding filter to find a particular letter within the array


function lCat(cat) {
    return cat.startsWith("L");
}

const filtered = cats.filter(lCat);
console.log(filtered);