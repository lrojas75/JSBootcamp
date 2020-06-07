'use strict'

const puzzleEl = document.getElementById('puzzle');
const guessesEl = document.getElementById('guesses');
let game;

window.onkeypress = (e) => {
    const guess = String.fromCharCode(e.charCode);
    game.makeGuess(guess);
    render();
}

const render = () => {
    puzzleEl.textContent = game.puzzle;
    guessesEl.textContent = game.statusMessage;
}

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game = new Hangman(puzzle, 5);
    render();
}
document.getElementById('reset').onclick = () => startGame();

startGame();

/* getPuzzle('2').then((puzzle) => {
    console.log('Puzzle: ', puzzle);
}).catch((err) => {
    console.log(`Error: ${err}`);
}); */

/* getCurrentCountry().then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(err);
}); */