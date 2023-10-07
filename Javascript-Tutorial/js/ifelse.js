const select = document.querySelector("select");
const para = document.querySelector("p");


select.addEventListener("change", setWeather);

function setWeather() {
    const choice = select.value;

    if (choice === "sunny") {
        para.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
    } else if (choice === "rainy") {
        para.textContent = "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long."
    } else if (choice === "overcast") {
        para.textContent = "It isn't raining,but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case."
    } else {
        para.textContent = "";
    }
}


//using logical operators to replace nested if and else statement

let temperature = 80;


// if (choice === "sunny" && temperature < 86) {
//     para.textContent = `It is ${temperature} degrees outside - nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`
// } else if (choice === "sunny" && temperature >= 86) {
//     para.textContent = `It is ${temperature} degrees outside - Really Hot! If you want to go outside, make sure to put some sunscreen on.`
// }

const selecting = document.querySelector("select")
const html = document.querySelector("html")
document.body.style.padding = "10px";


function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

selecting.addEventListener("change", () => {
    selecting.value === "black"
        ? update("black", "white")
        :update("white", "black")
})
