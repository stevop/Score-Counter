const playerOneButton = document.querySelector(".playerOneButton");
const playerTwoButton = document.querySelector(".playerTwoButton");
const resetButton = document.querySelector(".resetButton");

const playerOne = document.querySelector(".playerOne");
const playerTwo = document.querySelector(".playerTwo");

let playerOneScore = 0;
let playerTwoScore = 0;

playerOneButton.addEventListener("click", () => {
    playerOneScore ++;
    playerOne.textContent = playerOneScore;
});

playerTwoButton.addEventListener("click", () => {
    playerTwoScore ++;
    playerTwo.textContent = playerTwoScore;
});

resetButton.addEventListener("click", () => {
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOne.textContent = 0;
    playerTwo.textContent = 0;
});