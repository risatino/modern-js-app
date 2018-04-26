// Randomly select the computers choice
// var computerSelections = ["r", "p", "s"];
// var computerPlay = computerSelections[Math.round(Math.random() * 2)];
// console.log(computerPlay);

// User choice
var userPlay = prompt("Do you choose rock, paper or scissors?");

if (!userPlay) {
    // User choice was undefined
    document.write("<p>Player 1, you cheated! Refresh this screen and fight me.</p>");
} else {
    // Display user choice
    document.write("<p>Player 1:" + " " + userPlay + "</p>");
}

// Computer choice
var computerPlay = Math.random();

if (computerPlay < 0.34) {
    computerPlay = "rock";
} else if (computerPlay <= 0.67) {
    computerPlay = "paper";
} else {
    computerPlay = "scissors";
}

// Display computer choice
document.write("<p>Computer:" + " " + computerPlay + "</p>");

// Compare user choice vs computer choice
var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "It's a tie!";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            // rock wins
            return "You win!";
        } else {
            // paper wins
            return "You lose! Try again.";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            // paper wins
            return "You win!";
        } else {
            // scissors wins
            return "You lose! Try again.";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            // rock wins
            return "You lose! Try again.";
        } else {
            // scissors wins
            return "You win!";
        }
    }
};

// Run the compare function
var results = compare(userPlay, computerPlay);

// Display results
document.write("<br><hr><br>" + results);
