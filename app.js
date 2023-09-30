// ##GET COMPUTER CHOICE##
function getComputerChoice() {
    let nums = Math.floor(Math.random() * 4)
    let compChoice = ''

    switch (nums) {
        case 0:
            nums = Math.floor(Math.random() * 4)
        case 1:
            compChoice = "rock"
            break;
        case 2:
            compChoice = "paper"
            break;
        case 3:
            compChoice = "scissors"
            break;
    }
    return compChoice
}

// ##GET PLAYER CHOICE##
function getPlayerSelection() {
    const rps = ["rock", "paper", "scissors"]
    let playerChoice = prompt("Please choose rock, paper or scissors: ")

    while (!rps.includes(playerChoice.toLowerCase())) {
        playerChoice = prompt("Please choose rock, paper or scissors: ")
    }

    playerChoice = playerChoice.toLowerCase()
    return playerChoice
}


// rock beats scissors
// paper beats rock
// scissors beats paper


function playRound() {

    let comp = getComputerChoice()
    let player = getPlayerSelection()
    let roundWin = ''
    let result = ''

    if ((player === "rock" && comp === "scissors") ||
        (player === "paper" && comp === "rock") ||
        (player === "scissors" && comp === "paper")) {

        console.log(`You win, ${player} beats ${comp}.`)
        result = "player"


    } else if ((comp === "rock" && player === "scissors") ||
        (comp === "paper" && player === "rock") ||
        (comp === "scissors" && player === "paper")) {

        console.log(`You lose, ${player} loses over ${comp}.`)
        result = "computer"

    } else if (comp === player) {

        console.log(`It's a draw. You both chose ${comp}.`)
        result = "draw"
    }

    return result
}

function game() {
    let champ = ''
    let winComp = 0
    let winPlayer = 0



    for (let i = 0; i < 5; i++) {
        let roundWinner = playRound()
        if (roundWinner === "player") {
            winPlayer++
        } else if (roundWinner === "computer") {
            winComp++
        }

        console.log(`Player: ${winPlayer}               Computer: ${winComp}`)
    }


    if (winPlayer > winComp) {
        champ = `Overall winner is PLAYER with a score of ${winPlayer} vs ${winComp}!`
    } else if (winPlayer < winComp) {
        champ = `Overall winner is COMPUTER with a score of ${winComp} vs ${winPlayer}!`
    } else {
        champ = `It's a draw with a score of ${winComp}`
    }

    alert(champ)
}
