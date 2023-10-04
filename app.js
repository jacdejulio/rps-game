// ##DECLARING VARIABLES
const btnGrass = document.querySelector(".grass");
const btnFire = document.querySelector(".fire");
const btnWater = document.querySelector(".water");
const showWin = document.querySelector(".result");
const final = document.querySelector(".final")
const score = document.querySelector(".score")
const p1score = document.querySelector(".p1score");
const p2score = document.querySelector(".p2score");
const btnAgain = document.createElement("button");
btnAgain.className = "btnAgain"


let winPlayer = 0;
let winComp = 0;

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


// ##GAME LOGIC
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

// ##TO SHOW COMPUTER AND PLAYER SCORES PER TURN
function updateScore(roundWinner) {
    if (roundWinner === "player") {
        winPlayer++;
    } else if (roundWinner === "computer") {
        winComp++;
    }

    score.style.backgroundColor = "#3c6e71";
    p1score.textContent = `Player: ${winPlayer}`;
    p2score.textContent = `Computer: ${winComp}`;

    if (winPlayer === 5 || winComp === 5) {
        endGame();
    }

}

// ##TO DECLARE THE WINNER, WILL ONLY SHOW UP AFTER 5 TURNS
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

    playAgain();
}

// ##TO SHOW THE PLAYAGAIN BUTTON AND REFRESH THE PAGE
function playAgain() {

    btnAgain.textContent = "PLAY AGAIN";
    setTimeout(() => {
        showWin.textContent = "";
        showWin.appendChild(btnAgain);

        score.style.display = "none";
    }, 5000);

    btnAgain.addEventListener("click", () => {
        window.location.reload();
    })
}






