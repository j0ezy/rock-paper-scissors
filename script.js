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

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice(Rock, Paper or Scissors)").toLowerCase();
    if(!(humanChoice === "rock" || humanChoice === "scissors" || humanChoice === "paper")){
        alert("Wrong input")
    }
    return humanChoice;
}

let randomChoice = getComputerChoice().toLowerCase();
let humanChoice = getHumanChoice().toLowerCase();
console.log(randomChoice)
console.log(humanChoice)