// ##GET COMPUTER CHOICE##
function getComputerChoice() {
    let nums = Math.floor(Math.random() * 4);
    let compChoice = '';

    switch (nums) {
        case 0:
            nums = Math.floor(Math.random() * 4);
        case 1:
            compChoice = "rock";
            break;
        case 2:
            compChoice = "paper";
            break;
        case 3:
            compChoice = "scissors";
            break;
    }
    return compChoice
}

// ##GET PLAYER CHOICE##
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const showWin = document.querySelector(".result");
const score = document.querySelector(".score");

let winPlayer = 0;
let winComp = 0;


// ##EVENT LISTENER FOR EACH BUTTON

btnRock.addEventListener("click", function () {
    btnRock.value = "rock";
    let PlayerSelection = btnRock.value;
    const roundWinner = playRound(getComputerChoice(), PlayerSelection);
    updateScore(roundWinner);
});

btnPaper.addEventListener("click", function () {
    btnPaper.value = "paper";
    let PlayerSelection = btnPaper.value;
    const roundWinner = playRound(getComputerChoice(), PlayerSelection);
    updateScore(roundWinner);
});

btnScissors.addEventListener("click", function () {
    btnScissors.value = "scissors";
    let PlayerSelection = btnScissors.value;
    const roundWinner = playRound(getComputerChoice(), PlayerSelection);
    updateScore(roundWinner);
});



// rock beats scissors
// paper beats rock
// scissors beats paper


function playRound(comp, player) {

    let result = ''

    if ((player === "rock" && comp === "scissors") ||
        (player === "paper" && comp === "rock") ||
        (player === "scissors" && comp === "paper")) {

        showWin.textContent = `You win, ${player} beats ${comp}.`
        result = "player"


    } else if ((comp === "rock" && player === "scissors") ||
        (comp === "paper" && player === "rock") ||
        (comp === "scissors" && player === "paper")) {

        showWin.textContent = `You lose, ${player} loses over ${comp}.`
        result = "computer"

    } else if (comp === player) {

        showWin.textContent = `It's a draw. You both chose ${comp}.`
        result = "draw"
    }

    return result


}



function updateScore(roundWinner) {
    if (roundWinner === "player") {
        winPlayer++;
    } else if (roundWinner === "computer") {
        winComp++;
    }

    score.textContent = `Player: ${winPlayer}               Computer: ${winComp}`;

    if (winPlayer === 5 || winComp === 5) {
        endGame();
    }

}

function endGame() {
    const final = document.createElement("div")
    score.appendChild(final)

    let champ = '';

    if (winPlayer > winComp) {
        champ = `Overall winner is PLAYER with a score of ${winPlayer} vs ${winComp}!`;
    } else if (winPlayer < winComp) {
        champ = `Overall winner is COMPUTER with a score of ${winComp} vs ${winPlayer}!`;
    } else {
        champ = `It's a draw with a score of ${winComp}`;
    }

    final.textContent = champ;

    winPlayer = 0;
    winComp = 0;


}