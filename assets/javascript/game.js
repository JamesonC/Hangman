// Starting shows array
var word = ["bloodline", "billions", "westworld", "veep", "deadwood"];

var guessedLetters = [];        // Stores the letters the user guessed
var indexOfWord;                // Indexed element of the current word in the array
var guessingWord = [];          // Word we build to match the current word
var remainingGuesses = 0;       // How many tries the player has left  
var maxGuesses = 10;            // Max number of guesses a user receives
var wins = 0;                   // How many wins has the player racked up
var gameStarted = false;        // Flag to tell if the game has started
var hasFinished = false;        // Flag for 'press any key to try again'   


// displays "Wins" at 0 
var totalWins = document.getElementById("totalWins");
totalWins.innerHTML = wins;


// finds random indexed word from 'word' array
indexOfWord = word[Math.floor(Math.random() * word.length)];


// displays exact number of "_"'s for indexOfWord
for (var i = 0; i < indexOfWord.length; i++) {
    console.log(guessingWord[i] = "_");
}

// makes underscores for guessingWord characters
var currentWordCharacters = document.getElementById("currentWord");
currentWordCharacters.innerHTML = guessingWord.join(" ");

// displays "Guesses Remaining at 10
if (!hasFinished) {
    var remainingGuesses = document.getElementById("remainingGuesses");
    remainingGuesses.innerHTML = maxGuesses;
}


// **not working** function that listens for user input 
var gussedLetters = document.getElementById("guessedLetters");

document.onkeyup = function(event) {
    guessedLetters.innerHTML = event.key;
};






// function that resets the game after a win or loss
function resetGame() {
    remainingGuesses = maxGuesses;
    gameStarted = true;

    indexOfWord = word[Math.floor(Math.random() * word.length)];

    guessedLetters = [];
    guessingWord = [];

    for (var i = 0; i < word[indexOfWord.length]; i++) {
        guessingWord.push("_");
    }
}