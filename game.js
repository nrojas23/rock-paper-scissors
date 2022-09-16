function computerPlay() {

  const moveSet = ['rock' , 'paper' , 'scissors'];
  
  const move = moveSet[Math.floor(Math.random() * moveSet.length)];

  return move;
};

function singleRound(playerSelection, computerSelection) {
   
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
 
   return playerSelection == 'rock' && computerSelection == 'scissors' 
    || playerSelection == 'paper' && computerSelection == 'rock' 
    || playerSelection == 'scissors' && computerSelection == 'paper' ? `Player Wins! ${playerSelection} beats ${computerSelection}` 
    : playerSelection == null || playerSelection == '' ? 'Error, try again'
    :  playerSelection == computerSelection ? `It's a tie!`
    : `Player Lost! ${computerSelection} beats ${playerSelection}`; 
};

let playerPoints = 0;
let pcPoints = 0;
let match = 0;

function game() {
  
  let computerSelection = computerPlay();
  let rounds = singleRound(playerSelection,computerSelection);
  const pcImgHolder = document.querySelector('.pcImgHolder')
  //-------------------------------------------
  if (computerSelection == 'rock') {
      const pcRockImg = document.createElement('img');
      pcRockImg.className = 'pcIcon';
      pcRockImg.src = './images/pcRock.png';
    pcImgHolder.appendChild(pcRockImg);
  } else if (computerSelection == 'paper') {
      const pcPaperImg = document.createElement('img');
      pcPaperImg.className = 'pcIcon';
      pcPaperImg.src = './images/pcPaper.png';
      pcImgHolder.appendChild(pcPaperImg);
  } else if (computerSelection == 'scissors') {
      const pcScissorsImg = document.createElement('img');
      pcScissorsImg.className = 'pcIcon';
      pcScissorsImg.src = './images/pcScissors.png';
      pcImgHolder.appendChild(pcScissorsImg);
  } else {

  };
//----------------------------------------------------
  roundDisplay(rounds);
  

    // keeps track of score 
    if (rounds === `Player Wins! ${playerSelection} beats ${computerSelection}`) {
        playerPoints ++;
        match++;
    } else if (rounds === `Player Lost! ${computerSelection} beats ${playerSelection}`) {
        pcPoints ++;
        match++;
    } else {
        playerPoints;
        pcPoints;
        match++;
    } 
    
  scoreBoard(playerPoints,pcPoints,match);
  winnerDeclared();  
};

// displays the score board
function scoreBoard(playerPoints,pcPoints,match){
  let playerScore = document.querySelector('.playerScore');
  playerScore.textContent = `Player Score: ${playerPoints}`;
  let pcScore = document.querySelector('.pcScore');
  pcScore.textContent = `PC Score: ${pcPoints}`;
  let matchCount = document.querySelector('.matchCount');
  matchCount.textContent = `Round ${match}`;

};

// displays round winner 
function roundDisplay (rounds) {
  // selecting the body 
  const body = document.querySelector('body');
  const roundInfo = document.querySelector('.roundInfo');
  // adding rounds as the text returned in the div
  roundInfo.textContent = rounds;
};

// declares the winner of the game and then resets it 
function winnerDeclared() {
  if (match == 5){

    if(playerPoints > pcPoints){
      alert('Player Wins the Game!');
    } else if (playerPoints < pcPoints) {
      alert('Boo Hoo, You Lost');
    } else {
      alert('Good Match! Tie!');
    }
    // resets the game score
    match = 0;
    playerPoints = 0;
    pcPoints = 0;
  } else {
      null;
  };

};

// for the players use to select moves
function gameButton(){
// select all the buttons 
const buttons = document.querySelectorAll('button');

  // we use the .forEach method to iterate through each button
  buttons.forEach((button) => {
    // and for each one we add a "click" listener
    button.addEventListener('click', () => {
    playerSelection = button.id;
    game();
    }); 
  });
};

gameButton()

//---------testing-------------------------
// bring out rounds here 

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const playerImgHolder = document.querySelector('.playerImgHolder');
const playerRockImg = document.createElement('img');
const playerPaperImg = document.createElement('img');
const playerScissorsImg = document.createElement('img');

  rockBtn.addEventListener('click', () => {
    playerRockImg.className = 'playerIcon';
      playerRockImg.src = './images/playerRock.png';
      playerImgHolder.appendChild(playerRockImg);
      // remove all the other icons
      playerPaperImg.remove();
      playerScissorsImg.remove();
  });



  paperBtn.addEventListener('click', () => {
    playerPaperImg.className = 'playerIcon';
      playerPaperImg.src = './images/playerPaper.png';
      playerImgHolder.appendChild(playerPaperImg);
      // remove all the other icons
      playerRockImg.remove();
      playerScissorsImg.remove();
  });

  scissorsBtn.addEventListener('click', () => {
    playerScissorsImg.className = 'playerIcon';
      playerScissorsImg.src = './images/playerScissors.png';
      playerImgHolder.appendChild(playerScissorsImg);
      // remove all the other icons 
      playerRockImg.remove();
      playerPaperImg.remove();
  });