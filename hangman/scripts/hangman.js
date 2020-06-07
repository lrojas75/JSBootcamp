'use strict'

class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = 'Playing';
    }
    gameStatus() {
        if(this.remainingGuesses === 0) {
            this.status = 'Failed';
        } else {
            const isFinished = this.word.every((letter) => {
                return this.guessedLetters.includes(letter) || letter === ' ';
            });
            isFinished ? this.status='Finished' : this.status='Playing';
        }
    }
    get statusMessage() {
        let gameStatus = '';
        if(this.status === 'Playing') {
            gameStatus =  `Guesses left: ${this.remainingGuesses}`;
        } else if(this.status === 'Failed') {
            gameStatus = `Nice try! The word was "${this.word.join('')}"`;
        } else {
            gameStatus = 'Great work! You guessed the word';
        }
        return gameStatus;
    }
    get puzzle() {
        let puzzleWord = '';
    
        this.word.forEach(letter => {
            this.guessedLetters.includes(letter) || letter === ' ' ? puzzleWord += letter : puzzleWord += '*';
        });
    
        return puzzleWord;
    }
    makeGuess(guess) {
        guess = guess.toLowerCase();
        const isUnique = !this.guessedLetters.includes(guess);
        const isBadGuess = !this.word.includes(guess);
    
        if(this.status !== 'Playing') {
            return
        }
        if(isUnique) {
            this.guessedLetters.push(guess);
        }
        if(isUnique && isBadGuess) {
            this.remainingGuesses--;
        }
        this.gameStatus();
    }
}