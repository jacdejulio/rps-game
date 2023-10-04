
// ##GET COMPUTER CHOICE##
function getComputerChoice() {
    let nums = Math.floor(Math.random() * 4);
    let compChoice = '';

    switch (nums) {
        case 0:
            nums = Math.floor(Math.random() * 4);
        case 1:
            compChoice = "grass";
            break;
        case 2:
            compChoice = "fire";
            break;
        case 3:
            compChoice = "water";
            break;
    }
    return compChoice
}

// ##GET PLAYER CHOICE##
const btnGrass = document.querySelector(".grass");
const btnFire = document.querySelector(".fire");
const btnWater = document.querySelector(".water");
const showWin = document.querySelector(".result");
const final = document.querySelector(".final")
const p1score = document.querySelector(".p1score");
const p2score = document.querySelector(".p2score");
// element.classList.add("scoreboard")

let winPlayer = 0;
let winComp = 0;


// ##EVENT LISTENER FOR EACH BUTTON

btnGrass.addEventListener("click", function () {
    if (winPlayer < 5 && winComp < 5) {
        btnGrass.value = "grass";
        let PlayerSelection = btnGrass.value;
        const roundWinner = playRound(getComputerChoice(), PlayerSelection);
        updateScore(roundWinner);
    }
});

btnFire.addEventListener("click", function () {
    if (winPlayer < 5 && winComp < 5) {
        btnFire.value = "fire";
        let PlayerSelection = btnFire.value;
        const roundWinner = playRound(getComputerChoice(), PlayerSelection);
        updateScore(roundWinner);
    }
});

btnWater.addEventListener("click", function () {
    if (winPlayer < 5 && winComp < 5) {
        btnWater.value = "water";
        let PlayerSelection = btnWater.value;
        const roundWinner = playRound(getComputerChoice(), PlayerSelection);
        updateScore(roundWinner);
    }
});



// grass beats water
// fire beats grass
// water beats fire


function playRound(comp, player) {

    let result = ''

    if ((player === "grass" && comp === "water") ||
        (player === "fire" && comp === "grass") ||
        (player === "water" && comp === "fire")) {

        showWin.textContent = `You WIN! ${player.toUpperCase()}-type beats ${comp.toUpperCase()}-Type`
        result = "player"


    } else if ((comp === "grass" && player === "water") ||
        (comp === "fire" && player === "grass") ||
        (comp === "water" && player === "fire")) {

        showWin.textContent = `You LOSE! ${player.toUpperCase()}-type loses over ${comp.toUpperCase()}-type`
        result = "computer"

    } else if (comp === player) {

        showWin.textContent = `DRAW! You both chose ${comp.toUpperCase()}-type`
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

    p1score.textContent = `Player: ${winPlayer}`;
    p2score.textContent = `Computer: ${winComp}`;

    if (winPlayer === 5 || winComp === 5) {
        endGame();
    }

}

function endGame() {

    let champ = '';

    if (winPlayer > winComp) {
        champ = `The Duelmons Champion is PLAYER!!!`;
    } else if (winPlayer < winComp) {
        champ = `The Duelmons Champion is COMPUTER!!!`;
    } else {
        champ = `It's a draw with a score of ${winComp}`;
    }

    final.textContent = champ;



    // Ask the user if they want to play again
    setTimeout(() => {
        // Reset the scores to default values

        // Reset the text content of the score element

        winPlayer = 0;
        winComp = 0;

        const playAgain = confirm("Do you want to play again?");
        if (playAgain) {
            final.textContent = ""; // Clear the final result
            showWin.textContent = ""; // Clear the last round result
            p1score.textContent = `Player: ${winPlayer}`;
            p2score.textContent = `Computer: ${winComp}`;

        }
    }, 2000);
}






