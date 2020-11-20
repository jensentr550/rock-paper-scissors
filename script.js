let choose = ['Rock', 'Paper', 'Scissors'];

let computerScore = 0;
let playerScore = 0;



function computerChoose() {
    let choice = Math.round(Math.random() * 2)
    returnMe = choose[choice];
    return returnMe.toLowerCase();
}
//Function returns rock, paper, or scissors at random.

function playerChoose() {
    let choice = prompt('Type "Rock", "Paper", or "Scissors"');
    return choice.toLowerCase();
}
//Function returns rock, paper, or scissors at player prompt.

function oneRound(player, computer) {
    returnable(p, c, w) {
        returnMe = `Player throws: ${p}Computer throws: ${c}${w} wins.`
    }
    if (
        player=='rock' && computer=='scissors' ||
        player=='paper' && computer=='rock' ||
        player=='scissors' && computer=='paper'
    ) {
        return returnMe(player, computer, 'Player')
    } else if (
        player=='rock' && computer=='paper' ||
        player=='paper' && computer=='scissors' ||
        player=='scissors' && computer=='rock'
    ) {
        return 'computer wins'
    } else if (
        player==computer
    ) {
        return 'draw - nobody wins'
    } else {
        return 'error. I am going to puke.'
    }
}
//Function returns player, computer, or draw: winner of the round.

console.log(oneRound(playerChoose(), computerChoose()));

