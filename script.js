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

let randomChoice = getComputerChoice();
console.log(randomChoice)