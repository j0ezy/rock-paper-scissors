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
function playRound(humanChoice){

    let randomChoice = getComputerChoice().toLowerCase();
    let score = null;

    const displayText = document.querySelector("#display")

    if(displayText.lastElementChild){
        displayText.removeChild(displayText.lastElementChild)
    }

    const childNode = document.createElement("p")
    displayText.appendChild(childNode)

    if(randomChoice === "rock"){
        switch(humanChoice){
            case "rock":
                childNode.textContent = "It's a tie! You both choose rock"
                break;
            case "paper":
                childNode.textContent = "You win! Paper beats rock"
                score = true;
                break;
            case "scissors":
                childNode.textContent = "You lose! Scissors loses to rock"
                score = false;
                break;
        }
    }else if (randomChoice === "paper"){
        switch(humanChoice){
            case "rock":
                childNode.textContent = "You lose! Rock loses to paper"
                score = false;
                break;
            case "paper":
                childNode.textContent = "It's a tie! You both choose paper"
                break;
            case "scissors":
                childNode.textContent = "You win! Scissors beat paper"
                score = true;
                break;
        }
    }else if (randomChoice === "scissors"){
        switch(humanChoice){
            case "rock":
                childNode.textContent = "You win! Rock beat scissors"
                score = true;
                break;
            case "paper":
                childNode.textContent = "You lose! Paper loses to scissors"
                score = false;
                break;
            case "scissors":
                childNode.textContent = "It's a tie! You both choose scissors"
                break;
        }
    }else{
        console.log("Error, something went wrong")
    }
    
    console.log("Computer choice: " + randomChoice)
    console.log("Player choice: " + humanChoice)

    return score
}

function scoreHandler(result){

    if(result){
        humanScore++
    } 
    if (result === false){
        computerScore++
    }
    scoreText.textContent = `${humanScore} ${computerScore}`
    if(computerScore === 5){
        const finalMessage = document.querySelector("#score")
        const finalMessageText = document.createElement("p")
        finalMessageText.setAttribute("id","final")
        finalMessage.appendChild(finalMessageText)
        finalMessageText.textContent = "You Lose"
        humanScore = 0
        computerScore = 0
    }
    if(humanScore === 5){
        const finalMessage = document.querySelector("#score")
        const finalMessageText = document.createElement("p")
        finalMessageText.setAttribute("id","final")
        finalMessage.appendChild(finalMessageText)
        finalMessageText.textContent = "You Win"
        humanScore = 0
        computerScore = 0
    }
}

function removeScore(){
    if(document.querySelector("#final")){
        document.querySelector("#final").remove()
    }  
}
const displayScore = document.querySelector("#score")
const scoreText = document.createElement("p")
displayScore.appendChild(scoreText)

let humanScore = 0
let computerScore = 0

const btnRock = document.querySelector("#rock")
const btnPaper = document.querySelector("#paper")
const btnScissors = document.querySelector("#scissors")

btnRock.addEventListener("click", () =>{
    let result = playRound("rock")
    if (humanScore === 0 && computerScore === 0){
        removeScore()
    }
    scoreHandler(result)
    
})
btnPaper.addEventListener("click", () =>{
    let result = playRound("paper")
    if (humanScore === 0 && computerScore === 0){
        removeScore()
    }
    scoreHandler(result)
})
btnScissors.addEventListener("click", () =>{
    let result = playRound("scissors")
    if (humanScore === 0 && computerScore === 0){
        removeScore()
    }
    scoreHandler(result)
})

scoreText.textContent = `${humanScore} ${computerScore}`

