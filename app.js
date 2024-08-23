
const body = document.querySelector("body");
const colorHex = document.querySelector("#hex-color");
const btn = document.querySelector(".btn");
const colorArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function generateRandomHex() {
    let hex = "#"
    for (let i = 0; i < 6; i++) {
        hex += colorArr[Math.floor(Math.random() * 15)];
    }
    colorHex.innerText = hex;
    body.style.backgroundColor = hex;
}

btn.onclick = generateRandomHex;