let choose = ['Rock', 'Paper', 'Scissors'];

let computerScore = 0;
let playerScore = 0;

let playerChoice = '';
let computerChoice = '';


function computerChoose() {
    let choice = Math.round(Math.random() * 2)
    console.log(choice);
    returnMe = choose[choice];
    computerChoice = returnMe.toLowerCase();
    return;
}
//Function saves rock, paper, or scissors at random.

function playerChoose() {
    let choice = prompt('Type "Rock", "Paper", or "Scissors"');
    playerChoice = choice.toLowerCase();
    return 
}
//Function saves rock, paper, or scissors at player prompt.

function compareChoice() {
    if (
        playerChoice=='rock' && computerChoice=='scissors' ||
        playerChoice=='paper' && computerChoice=='rock' ||
        playerChoice=='scissors' && computerChoice=='paper'
    ) {
        return 'player'
    } else if (
        playerChoice=='rock' && computerChoice=='paper' ||
        playerChoice=='paper' && computerChoice=='scissors' ||
        playerChoice=='scissors' && computerChoice=='rock'
    ) {
        return 'computer'
    } else if (
        playerChoice==computerChoice
    ) {
        return 'draw'
    } else {
        return 'error'
    }
}
//Function returns player, computer, or draw: winner of the round.




