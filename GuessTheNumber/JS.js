const randomNumber = parseInt(Math.random() *100 + 1);
const submit = document.querySelector('#subt')
const input = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(input.value)
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess) ||guess < 1 || guess > 100){
        alert('Please add a valid number')
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over, The number was ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);

        }
    }
};

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('You guessed it right')
        endGame();
    }else if(guess >= randomNumber){
        displayMessage('The number you guessed is too high')
    }else if(guess <= randomNumber){
        displayMessage('The number you guessed is too low')
    }
};

function displayGuess(guess){
    input.value = ''
    guessSlot.innerHTML += `${guess}`
    numGuess++;
    remaining.innerHTML = `${11-numGuess}` 
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2> ${message}</h2>`
};

function newGame(){

};

function endGame(){
    input.value = ''
    input.setAttribute('disabled',)
};