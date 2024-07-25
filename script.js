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

// play one round of Rock Paper Scissors
function playRound(){

    let randomChoice = getComputerChoice().toLowerCase();
    let humanChoice = getHumanChoice().toLowerCase();
    let score = null;

    if(randomChoice === "rock"){
        switch(humanChoice){
            case "rock":
                console.log("It's a tie! You both choose rock")
                break;
            case "paper":
                console.log("You win! Paper beats rock")
                score = true;
                break;
            case "scissors":
                console.log("You lose! Scissors loses to rock")
                score = false;
                break;
        }
    }else if (randomChoice === "paper"){
        switch(humanChoice){
            case "rock":
                console.log("You lose! Rock loses to paper")
                score = false;
                break;
            case "paper":
                console.log("It's a tie! You both choose paper")
                break;
            case "scissors":
                console.log("You win! Scissors beat paper")
                score = true;
                break;
        }
    }else if (randomChoice === "scissors"){
        switch(humanChoice){
            case "rock":
                console.log("You win! Rock beat scissors")
                score = true;
                break;
            case "paper":
                console.log("You lose! Scissors lose to paper")
                score = false;
                break;
            case "scissors":
                console.log("It's a tie! You both choose scissors")
                break;
        }
    }else{
        console.log("Error, something went wrong")
    }
    
    console.log("Computer choice: " + randomChoice)
    console.log("Player choice: " + humanChoice)

    return score
}

//plays the whole game which is 5 rounds
function playGame(){

    let computerScore = 0;
    let humanScore = 0;
    let ties = 0;

    let round1 = playRound()
    console.log(round1)
    if(round1 === true){
        humanScore++
    }else if (round1 === false){
        computerScore++
    }else{
        ties++
    }
    let round2 = playRound()
    console.log(round2)
    if(round2 === true){
        humanScore++
    }else if (round2 === false){
        computerScore++
    }else{
        ties++
    }
    let round3 = playRound()
    console.log(round3)
    if(round3 === true){
        humanScore++
    }else if (round3 === false){
        computerScore++
    }else{
        ties++
    }
    let round4 = playRound()
    console.log(round4)
    if(round4 === true){
        humanScore++
    }else if (round4 === false){
        computerScore++
    }else{
        ties++
    }
    let round5 = playRound()
    console.log(round5)
    if(round5 === true){
        humanScore++
    }else if (round5 === false){
        computerScore++
    }else{
        ties++
    }
    console.log("Score is: ")
    console.log("Computer: " + computerScore)
    console.log("Player: " + humanScore)
    console.log("Ties: " + ties)

}

playGame();


