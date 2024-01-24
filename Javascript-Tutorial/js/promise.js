const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);
    if(number > 5) {
        resolve(number);
    } else {
        reject(number);
    }
})

function handleResolve(value) {
    console.log("Resolved: " + value);
}

function handleReject(value) {
    console.log("Rejected: " + value);
}

promise.then(handleResolve, handleReject);


//Creating immdediately resolved promise

Promise.resolve("sucessfull").then((result) => console.log(result));

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved");
    }, 1000);
})

myPromise.then((result) => console.log(result));

const THRESHOLD_A = 8;

function checkThreshold(resolve, reject) {
    setTimeout(() => {
        const randomInt = Date.now();
        const value = randomInt % 10;
        if (value < THRESHOLD_A) {
            reject(value);
        } else {
            reject(`Too Large: ${value}`);
        }
    }, 500);
}

function determineParity(value) {
    const isOdd = value % 2 !== 0;
    return {value, isOdd}
}

function troubleWithGetNumber(reason) {
    const err = new Error("Trouble getting the number", { cause: reason });
    console.error(err);
    throw err;
}

function promiseGetWord(parityInfo) {
    return new Promise((resolve, reject) => {
        const { value, isOdd } = parityInfo;
        if(value >= THRESHOLD_A -1) {
           reject(`Too Large: ${value}`);
        } else {    
            parityInfo.word = isOdd ? "odd" : "even";
            resolve(parityInfo);
        }
    })
} 

new Promise(checkThreshold)
    .then(determineParity, troubleWithGetNumber)
    .then(promiseGetWord)
    .then((info) => {
        console.log(`The number ${info.value} is ${info.word}`);
        return info;
    })
    .catch((reason) => {
        if (reason.cause) {
         console.error("Had previously trouble getting the number");
        } else {
            console.error("Something went wrong");
        }
    })
    .finally((info) => {
        console.log("All done, cleaning up");
    })
