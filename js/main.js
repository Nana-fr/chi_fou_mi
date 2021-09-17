alert("Welcome to the Chi-Fou-Mi Game, are you ready?"); // welcoming message

var userName = prompt("Please enter your name?"); // asking for user's name

var userChoice = prompt("It's your turn to play " + userName + "\nPlease make your choice between Rock, Paper and Scissors."); // asking for user's choice

var choice = {
    "Rock" : ["Scissors", "Rock", "Paper"],
    "Paper" : ["Rock", "Paper", "Scissors"],
    "Scissors" : ["Paper", "Scissors", "Rock"]
}

var computerChoice = Object.keys(choice)[Math.floor(Math.random() * Object.keys(choice).length)];
alert("I choose: " + computerChoice); // showing computer's choice

computerChoice = choice[userChoice].indexOf(computerChoice); // transforming computerChoice in number by using index of userChoice's property
userChoice = choice[userChoice].indexOf(userChoice); // same as computerChoice

// Comparing values to determine the winner
if (userChoice === computerChoice) {
    alert("It's a draw");
} else if (userChoice > computerChoice) {
    alert("Congratulations you win");
} else {
    alert("Sorry you lost")
}
