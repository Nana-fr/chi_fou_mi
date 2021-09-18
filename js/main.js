alert("Welcome to the Chi-Fou-Mi Game. Are you ready to play?"); // welcoming message
var userName = prompt("Please enter your name?"); // asking for user's name
// checking user's name
var num = ["0", "1" , "2", "3", "4", "5", "6", "7", "8", "9"];
var arrName = userName.split(""); // putting each letter of userName in a array to check if there is a number
    for (var j=0; j<num.length;j++){
        while (arrName.includes(num[j]) || userName.length < 2 || userName.length > 20 || userName === "  "){
            userName = prompt("Please enter your name?");
            arrName = userName.split("");
            j=0;
        }
    }
// start of the game
var choice = {"rock" : ["scissors", "rock", "paper"], "paper" : ["rock", "paper", "scissors"], "scissors" : ["paper", "scissors", "rock"]};
do { // loop for playing again
    var userScore = 0;
    var computerScore = 0;
    while (userScore < 3 && computerScore < 3) { // loop for three victories
        // asking and checking for user's choice
        var userChoice = prompt("It's your turn to play " + userName + "\nPlease make your choice between 'Rock', 'Paper' and 'Scissors'.").toLowerCase();
        while (Object.keys(choice).includes(userChoice) === false) {
            userChoice = prompt("It's your turn to play " + userName + "\nPlease make your choice between 'Rock', 'Paper' and 'Scissors'.").toLowerCase();  
        }
        // showing computer's choice
        var computerChoice = Object.keys(choice)[Math.floor(Math.random() * Object.keys(choice).length)];
        alert("Computer choose: " + computerChoice); 
        // transforming computerChoice and userChoice in number by using index of userChoice's property
        computerChoice = choice[userChoice].indexOf(computerChoice); 
        userChoice = choice[userChoice].indexOf(userChoice);
        // comparing values to determine the winner of a round
        if (userChoice === computerChoice) {
            alert("It's a draw\n"+ userName + " : " + userScore + "  |  Computer : " + computerScore);
        } else if (userChoice > computerChoice) {
            userScore++
            alert("You win this round\n" + userName + " : " + userScore + "  |  Computer : " + computerScore);
        } else {
            computerScore++
            alert("Sorry you lost this round\n"+ userName + " : " + userScore + "  |  Computer : " + computerScore)
        }
    }
    // final winner
    if (userScore < computerScore){
        alert("GAME OVER");
        var playAgain = prompt("Do you want to try again? 'Yes' or 'No'").toLowerCase();
        while (playAgain !== "yes" && playAgain !== "no"){
            playAgain = prompt("Do you want to try again? 'Yes' or 'No'").toLowerCase();
        }
    } else {
        alert("Congratulations you are the QUEEN/KING of Chi-Fou-Mi");
        var playAgain = prompt("Do you want to play again? 'Yes' or 'No'").toLowerCase();
        while (playAgain !== "yes" && playAgain !== "no"){
            playAgain = prompt("Do you want to play again? 'Yes' or 'No'").toLowerCase();
        }
    }
} while (playAgain === "yes");
// end of game
alert("Thanks for this game, see you soon");