// hwk hint: splice() method

// Starting shows array
var show = ["bloodline", "billions", "westworld", "veep", "deadwood"];

const maxTries = 10;            // Maximum number of tries player has

var guessedLetters = [];        // Stores the letters the user guessed
var currentWordIndex;           // Index of the current word in the array
var guessingWord = [];          // Word we build to match the current word
var remainingGuesses = 0;       // How many tries the player has left
var gameStarted = false;        // Flag to tell if the game has started
var hasFinished = false;        // Flag for 'press any key to try again'     
var wins = 0;                   // How many wins has the player racked up

// creates a random selection from show variable
var randomShow = show[Math.floor(Math.random() * show.length)];

// set up answer array
var answerArray = [];
for (var i = 0; i < randomShow.length; i++) {
    answerArray[i] = "_";
}


/* var el = document.getElementById("currentWord");
    el.innerHTML = answerArray;
    el.innerHTML = answerArray.join(" ");

var la = document.getElementById("totalWins");
    la.innerHTML = wins;
*/
