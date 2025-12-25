let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempt = 0;
let maxAttempt = 7;

while (attempt < maxAttempt) {
  let guess = prompt("Enter your guess (1-100):");
  let userGuess = parseInt(guess);
  if (secretNumber > userGuess) {
    console.log("try a bigger number");
    attempt++;
  } else if (secretNumber === userGuess) {
    console.log("you won the match");
    attempt++;
    break;
  } else {
    console.log("try a smaller number");
    attempt++;
  }
}
if (attempt >= maxAttempt && secretNumber !== userGuess) {
    console.log(`Game Over! The number was ${secretNumber}`);
}
