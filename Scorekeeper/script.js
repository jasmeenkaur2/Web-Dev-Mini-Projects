const P1button = document.querySelector('#P1button');
const P2button = document.querySelector('#P2button');
const reset = document.querySelector('#reset');
const P1display = document.querySelector('#P1display');
const P2display = document.querySelector('#P2display');

let P1score = 0;
let P2score = 0;
let winningScore = 5;

let isGameOver = false;

P1button.addEventListener('click', function () {
    if (!isGameOver) {
        P1score += 1;
        if (P1score === winningScore) {
            isGameOver = true;
        }
        P1display.textContent = P1score;
    }
})

P2button.addEventListener('click', function () {
    if (!isGameOver) {
        P2score += 1;
        if (P2score === winningScore) {
            isGameOver = true;
        }
        P2display.textContent = P2score;
    }
})

reset.addEventListener('click', function () {

    P1score = 0;
    P2score = 0;
    P1display.textContent = P1score;
    P2display.textContent = P2score;
    isGameOver = false;
})