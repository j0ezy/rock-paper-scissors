// function generates random number between two given numbers
function randomBetweenTwoNumbers(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
// function to get the string equivalent of the numerical representation
function getComputerChoice(){
    let randomChoice = randomBetweenTwoNumbers(1, 4)
    let randomChoiceName = null;
    if(randomChoice  === 1){
        randomChoiceName = "Rock"
    } else if(randomChoice  === 2) {
        randomChoiceName = "Paper"
    } else{
        randomChoiceName = "Scissors"
    }
    return randomChoiceName
}

// function to get the human choice value
function getHumanChoice(){
    let humanChoice = prompt("Enter your choice(Rock, Paper or Scissors)").toLowerCase();
    if(!(humanChoice === "rock" || humanChoice === "scissors" || humanChoice === "paper")){
        alert("Wrong input")
    }
    return humanChoice;
}

function playRound(randomChoice, humanChoice){
    if(randomChoice === "rock"){
        switch(humanChoice){
            case "rock":
                console.log("It's a tie! You both choose rock")
                break;
            case "paper":
                console.log("You win! Paper beats rock")
                humanScore++;
                break;
            case "scissors":
                console.log("You lose! Scissors loses to rock")
                computerScore++;
                break;
        }
    }else if (randomChoice === "paper"){
        switch(humanChoice){
            case "rock":
                console.log("You lose! Rock loses to paper")
                computerScore++;
                break;
            case "paper":
                console.log("It's a tie! You both choose paper")
                break;
            case "scissors":
                console.log("You win! Scissors beat paper")
                humanScore++;
                break;
        }
    }else if (randomChoice === "scissors"){
        switch(humanChoice){
            case "rock":
                console.log("You win! Rock beat scissors")
                humanScore++;
                break;
            case "paper":
                console.log("You lose! Scissors lose to paper")
                computerScore++;
                break;
            case "scissors":
                console.log("It's a tie! You both choose scissors")
                break;
        }
    }else{
        console.log("Error, something went wrong")
    }
}

let randomChoice = getComputerChoice().toLowerCase();
let humanChoice = getHumanChoice().toLowerCase();
console.log("Computer choice: " + randomChoice)
console.log("Player choice: " + humanChoice)
let computerScore = 0;
let humanScore = 0;
console.log("Computer score: " + computerScore)
console.log("Player score: " + humanScore)
playRound(randomChoice,humanChoice);

