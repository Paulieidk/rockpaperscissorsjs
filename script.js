function computerPlay() {
    const result = Math.floor(Math.random() * 3);

    if (result === 0) {
        return 'Rock'
    } else if (result === 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
    
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Tie!'
    }
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats Rock'
    }
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats Scissors'
        
    }
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats Rock'
    }
    if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Tie!'
    } 
    if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beats Paper'
    }
    if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats Scissors!'
    }
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats Paper!'
    }
    if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Tie!'
    }
}




function game() {

    const funResult = playRound(playerSelection, computerSelection.toLowerCase());
    
    if (funResult[5] === 'i') {
        playerScore++
    } 
    
    if (funResult === 'Tie!') {
        return 'Tie!'
    } 
    
    if (funResult[5] === 'o') {
        computerScore++
    }

     console.log('Your score: ' + playerScore + '. The computer score: ' + computerScore)
};



let playerScore = 0;
let computerScore = 0;
let playerSelection;
/* let playerSelection = window.prompt("Please introduce 'Rock', 'Paper' or 'Scissors'")
playerSelection = playerSelection.toLowerCase(); */
let computerSelection;



function repeatGame() {
    playerSelection = window.prompt("Please introduce 'Rock', 'Paper' or 'Scissors'")
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    console.log('You play: ' + playerSelection)
    console.log('The computer plays: ' + computerSelection)
    console.log(playRound(playerSelection, computerSelection.toLowerCase())); 
    game();
}



repeatGame();
repeatGame();
repeatGame();
repeatGame();
repeatGame();


