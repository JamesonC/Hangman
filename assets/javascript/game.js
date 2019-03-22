// Starting shows array
var word = ["blockchain", "bitcoin", "crypto", "microservices", "automation", "platform", "stealth", "ecosystem", "ideation", "leverage", "ugc", "bandwidth", "disrupt", "dogfood", "iterate", "sunset", "rockstar", "wizard", "ninja", "guru", "cloud", "agile"];

var guessedLetters = []; // Stores letters the user guessed
var guessingWord = []; // Word we build to match the current word
var remainingGuesses = 0; // How many tries the player has left  
var maxGuesses = 10; // Max number of guesses a user receives
var wins = 0; // How many wins has the player racked up
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

    if (currentWord.indexOf(key) === -1 && maxGuesses > 0) {

        maxGuesses--
        remainingGuesses.innerHTML = maxGuesses;

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

    checkWin()
};

function checkWin() {
    console.log(dashes.indexOf("_") === -1)
    if (dashes.indexOf("_") === -1) {
        console.log("Check Win Function")
        wins++;
        totalWins.innerHTML = wins;
        resetGame();
    } else if (maxGuesses === 0) {
        console.log("maxGuess Reset")
        resetGame();
    };

};

// function that resets the game after a win or loss
function resetGame() {
    console.log("In Reset Function")
    currentWord = word[Math.floor(Math.random() * word.length)];
    incorrectLetters = [];
    guessingWord = [];
    dashes = [];
    maxGuesses = 10;

    for (var i = 0; i < currentWord.length; i++) {
        dashes.push("_");
    }
    // displays dashes for currentWord
    var wordCharacters = document.getElementById("currentWord");
    wordCharacters.innerHTML = dashes.join(" ");

    var remainingGuesses = document.getElementById("remainingGuesses");
    remainingGuesses.innerHTML = maxGuesses;


};