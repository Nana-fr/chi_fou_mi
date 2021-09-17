alert("Welcome to the Chi-Fou-Mi Game. Are you ready to play?"); // welcoming message
var userName = prompt("Please enter your name?") // asking for user's name
// checking user's name
while (userName.length < 2 || userName.length > 20) {
    userName = prompt("Please enter your name?")
} 

var choice = {
    "rock" : ["scissors", "rock", "paper"],
    "paper" : ["rock", "paper", "scissors"],
    "scissors" : ["paper", "scissors", "rock"]
}
do { // loop for playing again
    let userScore = 0;
    let computerScore = 0;
    while (userScore < 3 && computerScore < 3) { // loop for three victories
        var userChoice = prompt("It's your turn to play " + userName + "\nPlease make your choice between 'Rock', 'Paper' and 'Scissors'."); // asking for user's choice
        // checking user's choice
        userChoice = userChoice.toLowerCase();
        while (Object.keys(choice).includes(userChoice) === false) {
            userChoice = prompt("It's your turn to play " + userName + "\nPlease make your choice between 'Rock', 'Paper' and 'Scissors'.");
            userChoice = userChoice.toLowerCase();
        }
        // showing computer's choice
        var computerChoice = Object.keys(choice)[Math.floor(Math.random() * Object.keys(choice).length)];
        alert("I choose: " + computerChoice); 
        // transforming computerChoice and userChoice in number by using index of userChoice's property
        computerChoice = choice[userChoice].indexOf(computerChoice); 
        userChoice = choice[userChoice].indexOf(userChoice);
        // comparing values to determine the winner of a round
        if (userChoice === computerChoice) {
            alert("It's a draw\n"+ userName + " : " + userScore + "  |  computer : " + computerScore);
        } else if (userChoice > computerChoice) {
            userScore++
            alert("You win this round\n" + userName + " : " + userScore + "  |  computer : " + computerScore);
        } else {
            computerScore++
            alert("Sorry you lost this round\n"+ userName + " : " + userScore + "  |  computer : " + computerScore)
        }
    }
    // final winner
    if (userScore < computerScore){
        alert("GAME OVER");
        var playAgain = prompt("Do you want to try again? 'Yes' or 'No'");
        playAgain = playAgain.toLowerCase();
        while (playAgain !== "yes" && playAgain !== "no"){
            playAgain = prompt("Do you want to try again? 'Yes' or 'No'");
            playAgain = playAgain.toLowerCase();
        }
    } else {
        alert("Congratulations you are the KING of Chi-Fou-Mi");
        var playAgain = prompt("Do you want to play again? 'Yes' or 'No'");
        playAgain = playAgain.toLowerCase();
        while (playAgain !== "yes" && playAgain !== "no"){
            playAgain = prompt("Do you want to play again? 'Yes' or 'No'");
            playAgain = playAgain.toLowerCase();
        }
    }console.log(playAgain);
} while (playAgain === "yes");

alert("Thanks for this game, see you soon"); // end of the game
