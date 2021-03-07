import fetch from "node-fetch";

function messageDelay(msg, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const upperCased = msg.toUpperCase();
            resolve(upperCased);
        }, delay)
    })
};

const promises = [
    messageDelay("Hi", 1300),
    messageDelay("Hi Lars", 700),
    messageDelay("Hello World", 1700),
    messageDelay("Promises are cool", 500),
]

Promise.any(promises).then((upperCased) => console.log(upperCased));

