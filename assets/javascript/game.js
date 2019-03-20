// Starting shows array
var word = ["bloodline", "billions", "westworld", "veep", "deadwood"];

var guessedLetters = []; // Stores the letters the user guessed
var selectedWord; // Indexed element of the current word in the array
var guessingWord = []; // Word we build to match the current word
var remainingGuesses = 0; // How many tries the player has left  
var maxGuesses = 10; // Max number of guesses a user receives
var wins = 0; // How many wins has the player racked up
var gameStarted = false; // Flag to tell if the game has started
var hasFinished = false; // Flag for 'press any key to try again'   


// displays "Wins" at 0 
var totalWins = document.getElementById("totalWins");
totalWins.innerHTML = wins;


// finds random indexed word from 'word' array
var selectedWord = word[Math.floor(Math.random() * word.length)];

var dashes = [];

// ** NOT WORKING ** displays exact number of "_"'s for selectedWord
for (var i = 0; i < selectedWord.length; i++) {
    dashes[i] = "_";
};


// makes underscores selectedWord characters
var wordCharacters = document.getElementById("currentWord");
wordCharacters.innerHTML = dashes.join(" ");


// displays "Guesses Remaining" at 10
if (!hasFinished) {
    var remainingGuesses = document.getElementById("remainingGuesses");
    remainingGuesses.innerHTML = maxGuesses;
};


// function that listens/displays user key input 
var guessedLetters = document.getElementById("guessedLetters");

document.onkeyup = function (event) {
    var letter = event.key
    guessedLetters.innerHTML = letter;
    userGuess(letter)
};


// function that executes user's letter guess
var guessedLetters = [];

function userGuess(key) {

    if (selectedWord.indexOf(key) === -1) {
        console.log("Incorrect Choice!");

    } else {
        dashes[selectedWord.indexOf(key)] = key;
        wordCharacters.innerHTML = dashes.join(" ");
    }
};















// function that resets the game after a win or loss
function resetGame() {
    remainingGuesses = maxGuesses;
    hasFinished = true;

    indexOfWord = word[Math.floor(Math.random() * word.length)];

    guessedLetters = [];
    guessingWord = [];

    for (var i = 0; i < word[indexOfWord.length]; i++) {
        guessingWord.push("_");
    }
}