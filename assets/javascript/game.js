// Starting shows array
var word = ["bloodline", "billions", "westworld", "veep", "deadwood"];

var guessedLetters = []; // Stores letters the user guessed
var guessingWord = []; // Word we build to match the current word
var remainingGuesses = 0; // How many tries the player has left  
var maxGuesses = 10; // Max number of guesses a user receives
var wins = 0; // How many wins has the player racked up
var hasFinished = false; // Flag for 'press any key to try again'   
var incorrectLetters = [] // Stores incorrect letters


// displays "Wins" at 0 
var totalWins = document.getElementById("totalWins");
totalWins.innerHTML = wins;

// picks a random show
var currentWord = word[Math.floor(Math.random() * word.length)];

var dashes = [];
// finds exact # of (-dashes-) for currentWord
for (var i = 0; i < currentWord.length; i++) {
    dashes[i] = "_";
};

// displays dashes for currentWord
var wordCharacters = document.getElementById("currentWord");
wordCharacters.innerHTML = dashes.join(" ");


// displays "Guesses Remaining" at 10
var remainingGuesses = document.getElementById("remainingGuesses");
remainingGuesses.innerHTML = maxGuesses;



// function that listens/displays user key input 
var guessedLetters = document.getElementById("guessedLetters");

document.onkeyup = function (event) {

    var letter = event.key
    guessedLetters.innerHTML = letter;

    if (event.keyCode >= 65 && event.keyCode <= 90) {
        evaluateGuess(letter);

    } else {
        alert("That's not a letter!");
    }
};

// executes user's letter guess
function evaluateGuess(key) {

    if (currentWord.indexOf(key) === -1 && maxGuesses >= 0) {

        remainingGuesses.innerHTML = (maxGuesses--);

        incorrectLetters.push(key) // captures key pressed and pushes key into incorrectLetters array
        guessedLetters.innerHTML = incorrectLetters;

    } else {
        for (var i = 0; i < currentWord.length; i++) {
            if (key === currentWord[i]) {
                dashes[i] = key;
            }
        }
        wordCharacters.innerHTML = dashes.join(" ");


    }
    checkWin();
};


function checkWin() {
    if (dashes.indexOf("_") === -1) {
        totalWins.innerHTML = wins++
        resetGame();
    };
}


// function that resets the game after a win or loss
function resetGame() {

    remainingGuesses = maxGuesses;
    currentWord = word[Math.floor(Math.random() * word.length)];
    incorrectLetters = [];
    guessedLetters = [];
    guessingWord = [];

    for (var i = 0; i < word[currentWord.length]; i++) {
        dashes.push("_");
    }
};