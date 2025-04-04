let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
    maximum = parseInt(prompt("Please enter a valid number!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;

console.log(targetNum);

let guess = prompt("Enter your first guess!");
while (guess !== targetNum) {
    if (parseInt(guess) == 'q') break;
    if (guess > targetNum) {
        guess = prompt("Too high! Try again.");
    }
    else if (guess < targetNum) {
        guess = prompt("Too low! Try again.");
    }
    else {
        alert("Congratulations! You guessed the number!");
        break;
    }
}