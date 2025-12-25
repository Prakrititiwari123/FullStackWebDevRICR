const inputBox = document.querySelector("#number");
const submit = document.querySelector("#submitBtn");
const chances = document.querySelector(".chances");

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempt = 0;
let maxAttempt = 7;

submit.addEventListener("click", (e) => {
  e.preventDefault();

  let userGuess = inputBox.value;

  if (userGuess == "") {
    alert("Please enter some value between 0 and 100");
  }
  else if (userGuess == secretNumber) {
    chances.innerHTML=`You won the game, correct number is ${userGuess} and your attempt is ${attempt}`
  }
  else if (userGuess > 100) {
    alert("Please enter some value between 0 and 100");
  }
  else if (userGuess < secretNumber) {
    chances.innerHTML="try a bigger number";
    attempt++;
  }
  else
  {
    chances.innerHTML="try a smaller number";
    attempt++;
  }
});
