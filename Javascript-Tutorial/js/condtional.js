// Adding condition statement for decision making within the code
// using if else statement in decision making


let iceCreame = "cholocate"
if (iceCreame === "cholcate") {
    alert("Yah, I Love Icreame ")
}
else {
    alert("Hey, I thought is an icrecream oo")
}



///Fuctions

function mutiply(num1, num2) {
    let  result = num1 * num2;
    return result
}

mutiply(4, 7);
mutiply(23, 56);

// Event

const myHeading = document.querySelector("h1")
const myButton  = document.querySelector("button")

document.querySelector("html").addEventListener("click",  () => { //adding an arrow function rather than anonymous function
    alert("OOOps Stop poking me ");
});



const myImage = document.querySelector("img")

myImage.onclick = () => {
    let imgSrc = myImage.getAttribute("src");
if(imgSrc === "../../images/firefox-icon.png" )
{
    myImage.setAttribute("src", "../../images/firefox-icon.png")
    } else
{
    myImage.setAttribute("src", "../../images/firefox-icon.png")
    }
    
}

function setMyName() {
    const myName = prompt("Enter your name !")
    localStorage.setItem("name", myName)
    myHeading.textContent = `My name is ${myName}`;
}
if (!localStorage.getItem("name")) {
    setMyName();
} else {
    const storeName = localStorage.getItem("name")
    myHeading.textContent= `My name is ${storeName}`
}