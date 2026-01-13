const words = ["APPLE", "BANANA", "ORANGE", "MANGO", "GRAPES","TIGER","LION","ELEPHANT","CONGRATULATIONS","DISAPPOINT","DISTRUCTION","DEDICATION"];
let currentWord = "";

function shuffleWord(word) {
    let letters = word.split('');
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.join(' ');
}

function newGame() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    document.getElementById("letters").textContent = shuffleWord(currentWord);
    document.getElementById("userGuess").value = "";
    document.getElementById("result").textContent = "";
}

// Check user's guess
function checkGuess() {
    const userGuess = document.getElementById("userGuess").value.toUpperCase();
    if (userGuess === currentWord) {
        document.getElementById("result").textContent = "yayyy! Correct! The word is " + currentWord;
    } else {
        document.getElementById("result").textContent = "Ayyo Wrong! Try again.";
    }
}

// Start the first game automatically
newGame();