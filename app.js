const playerOneButton = document.querySelector(".playerOneButton");
const playerTwoButton = document.querySelector(".playerTwoButton");
const resetButton = document.querySelector(".resetButton");

const scoreSelector = document.querySelector("#score");

const playerOne = document.querySelector(".playerOne");
const playerTwo = document.querySelector(".playerTwo");

const results = document.querySelector(".results");
const h2 = document.querySelector("h2").textContent.trim();

let playerOneScore = 0;
let playerTwoScore = 0;
let isGameOver = false;

// PLAYER ONE SETTINGS
playerOneButton.addEventListener("click", () => {
    if(!isGameOver){
        playerOneScore ++;
        
        if(playerOneScore === winningScore){
            isGameOver = true;
            playerOne.classList.add("winner");
            playerTwo.classList.add("loser");

            results.innerHTML = "";
            let p = document.createElement("p");
            p.innerHTML = `Zápas skončil výsledkom <br> <b>${h2}</b>.`
            results.appendChild(p);
        }
        playerOne.textContent = playerOneScore;
    } 
});

// PLAYER TWO SETTINGS
playerTwoButton.addEventListener("click", () => {
    if(!isGameOver){
        playerTwoScore ++;
        
        if(playerTwoScore === winningScore){
            isGameOver = true;
            playerOne.classList.add("loser");
            playerTwo.classList.add("winner");
        }
        playerTwo.textContent = playerTwoScore;
    }
});

// SCORE SELECTOR
scoreSelector.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
});

// RESET FUNCTION
resetButton.addEventListener("click", reset); 

function reset (){
    isGameOver = false;
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOne.textContent = 0;
    playerTwo.textContent = 0;
    playerOne.classList.remove("winner");
    playerOne.classList.remove("loser");
    playerTwo.classList.remove("winner");
    playerTwo.classList.remove("loser");
    results.innerHTML = "";
}