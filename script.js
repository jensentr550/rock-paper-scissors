let choose = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;

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
    function returnable(p, c, w) {
        returnMe = `Player throws: ${p}\nComputer throws: ${c}\n${w} wins.`
        return returnMe;
    }
    if (
        player=='rock' && computer=='scissors' ||
        player=='paper' && computer=='rock' ||
        player=='scissors' && computer=='paper'
    ) {
        playerScore++;
        return returnable(player, computer, 'Player')
    } else if (
        player=='rock' && computer=='paper' ||
        player=='paper' && computer=='scissors' ||
        player=='scissors' && computer=='rock'
    ) {
        computerScore++;
        return returnable(player, computer, 'Computer')
    } else if (
        player==computer
    ) {
        return returnable(player, computer, 'Nobody')
    } else {
        return 'error. I am going to throw up.'
    }
}
//Function returns player, computer, or draw: winner of the round.

function finalScore(p, c) {
  let returnMe = 'Player score: ' + p + '\nComputer Score: ' + c + '\n';
  if (p>c) {
    returnMe += 'Player wins';
  } else if (p<c) {
    returnMe += 'Computer wins';
  } else {
    returnMe += 'Draw - nobody wins';
  }
  return returnMe;
}
//Function returns a printable string containing final score information
//for the 5-round rock-paper-scissors game, and who won.

function game() {
  console.log(oneRound(playerChoose(), computerChoose()));
  console.log(oneRound(playerChoose(), computerChoose()));
  console.log(oneRound(playerChoose(), computerChoose()));
  console.log(oneRound(playerChoose(), computerChoose()));
  console.log(oneRound(playerChoose(), computerChoose()));
  console.log(finalScore(playerScore, computerScore));
}
//Function runs 5 rounds of rock-paper-scissors, then returns 
//the winner of the total 5 rounds.

game();
