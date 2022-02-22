const moves=['Rock', 'Paper', 'Scissors']
function computerPlay() {
    return moves[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1).toLowerCase();
    if (playerSelection == computerSelection) {
        return `It's a tie! Both sides used ${playerSelection}`;
    }

    if ((playerSelection == "Rock" && computerSelection == "Scissors")
            || (playerSelection == 'Paper' && computerSelection == 'Rock')
            || (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    return `You lose! ${computerSelection} best ${playerSelection}`;
}

function game() {
    for (let i=0; i<5; i++) {
        const playerSelection = window.prompt('Your move:');
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}