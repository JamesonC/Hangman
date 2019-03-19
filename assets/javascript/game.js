// Starting shows array
var word = ["bloodline", "billions", "westworld", "veep", "deadwood"];

var guessedLetters = []; // Stores the letters the user guessed
var currentWordIndex; // Index of the current word in the array
var guessingWord = []; // Word we build to match the current word
var remainingGuesses = 0; // How many tries the player has left
var gameStarted = true; // Flag to tell if the game has started
var hasFinished = false; // Flag for 'press any key to try again'     
var wins = 0; // How many wins has the player racked up
var maxGuesses = 10; // Max number of guesses a user receives

// creates a random selection from show variable
var randomWord = word[Math.floor(Math.random() * word.length)];

// set up answer array
for (var i = 0; i < randomWord.length; i++) {
    console.log(guessingWord[i] = "_");
}

// makes underscores beneath "Current Word"
var underScores = document.getElementById("currentWord");
underScores.innerHTML = guessingWord;
underScores.innerHTML = guessingWord.join(" ");


if (gameStarted) {
    var remainingGuesses = document.getElementById("remainingGuesses");
    remainingGuesses.innerHTML = maxGuesses;
}


// function that listens for user input 
/* document.onkeyup = function(event) {
    var userChoice = event.key;
} */

/*

var la = document.getElementById("totalWins");
    la.innerHTML = wins;
*/