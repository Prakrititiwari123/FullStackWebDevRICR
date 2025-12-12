// Game variables
// let randomNumber;
// let attempts;
// const maxAttempts = 10;
// let gameActive = true;
// let previousGuesses = [];

// // DOM elements
// const numberInput = document.getElementById('number');
// const submitButton = document.getElementById('btn');
// const attemptCountElement = document.getElementById('attempt-count');
// const guessHistoryElement = document.getElementById('guess-history');
// const messageContainer = document.getElementById('message-container');

// // Initialize game
// function initGame() {
//     randomNumber = Math.floor(Math.random() * 100) + 1;
//     attempts = 0;
//     gameActive = true;
//     previousGuesses = [];
    
//     // Update UI
//     attemptCountElement.textContent = '0';
//     guessHistoryElement.innerHTML = '';
//     messageContainer.innerHTML = '';
    
//     // Enable input and button
//     numberInput.disabled = false;
//     numberInput.style.opacity = '1';
//     submitButton.disabled = false;
//     submitButton.style.opacity = '1';
//     submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Submit Guess';
    
//     // Clear input and focus
//     numberInput.value = '';
//     numberInput.focus();
    
//     // Show welcome message
//     showMessage('🎮 Game Started! Guess a number between 1 and 100.', 'info');
    
//     console.log('Secret number (for testing):', randomNumber); // Remove in production
// }

// // Submit guess function
// function submitGuess() {
//     if (!gameActive) return;
    
//     const inputElement = document.getElementById('number');
//     const userGuess = parseInt(inputElement.value);
    
//     // Input validation
//     if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
//         showMessage('❌ Please enter a valid number between 1 and 100!', 'error');
//         inputElement.value = '';
//         inputElement.focus();
//         return;
//     }
    
//     // Add to previous guesses
//     previousGuesses.push(userGuess);
//     attempts++;
//     attemptCountElement.textContent = attempts;
    
//     // Check the guess
//     let message = '';
//     let messageType = '';
//     let guessClass = '';
    
//     if (userGuess === randomNumber) {
//         message = `🎉 Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempt${attempts > 1 ? 's' : ''}!`;
//         messageType = 'correct';
//         guessClass = 'correct';
//         endGame(true);
//     } else if (userGuess > randomNumber) {
//         message = '📈 OOPS! SORRY!!! TRY A SMALLER NUMBER.';
//         messageType = 'wrong';
//         guessClass = 'high';
//     } else {
//         message = '📉 OOPS! SORRY!!! TRY A LARGER NUMBER.';
//         messageType = 'wrong';
//         guessClass = 'low';
//     }
    
//     // Show message
//     showMessage(message, messageType);
    
//     // Add to guess history
//     addToGuessHistory(userGuess, guessClass);
    
//     // Check if maximum attempts reached
//     if (attempts >= maxAttempts && userGuess !== randomNumber) {
//         showMessage(`😞 Game Over! The correct number was ${randomNumber}. You've used all ${maxAttempts} attempts.`, 'error');
//         endGame(false);
//     }
    
//     // Clear input and focus for next guess
//     inputElement.value = '';
//     inputElement.focus();
// }

// // Show message function
// function showMessage(text, type = 'info') {
//     // Clear previous message
//     messageContainer.innerHTML = '';
    
//     // Create message element
//     const messageDiv = document.createElement('div');
//     messageDiv.className = `message ${type}`;
//     messageDiv.textContent = text;
    
//     // Add animation
//     messageDiv.style.animation = 'fadeIn 0.5s ease';
    
//     // Add to container
//     messageContainer.appendChild(messageDiv);
    
//     // Add pulse animation for correct guess
//     if (type === 'correct') {
//         messageDiv.classList.add('pulse');
//     }
// }

// // Add guess to history
// function addToGuessHistory(guess, guessClass) {
//     const guessItem = document.createElement('div');
//     guessItem.className = `guess-item ${guessClass}`;
    
//     // Choose icon based on guess type
//     let icon = '';
//     if (guessClass === 'correct') {
//         icon = '<i class="fas fa-check-circle"></i>';
//     } else if (guessClass === 'high') {
//         icon = '<i class="fas fa-arrow-up"></i>';
//     } else {
//         icon = '<i class="fas fa-arrow-down"></i>';
//     }
    
//     guessItem.innerHTML = `${icon} ${guess}`;
//     guessHistoryElement.appendChild(guessItem);
    
//     // Scroll to bottom of guess history
//     guessHistoryElement.scrollTop = guessHistoryElement.scrollHeight;
// }

// // End game function
// function endGame(win) {
//     gameActive = false;
    
//     // Disable input and button
//     numberInput.disabled = true;
//     numberInput.style.opacity = '0.7';
//     submitButton.disabled = true;
//     submitButton.style.opacity = '0.7';
    
//     // Change button text
//     if (win) {
//         submitButton.innerHTML = '<i class="fas fa-trophy"></i> You Won!';
//     } else {
//         submitButton.innerHTML = '<i class="fas fa-times-circle"></i> Game Over';
//     }
// }

// // Give hint function
// function giveHint() {
//     if (!gameActive || attempts === 0) {
//         showMessage('🔍 Make at least one guess before getting a hint!', 'info');
//         return;
//     }
    
//     const lastGuess = previousGuesses[previousGuesses.length - 1];
//     let hint = '';
    
//     if (lastGuess > randomNumber) {
//         hint = `💡 Hint: The number is less than ${lastGuess}.`;
//     } else if (lastGuess < randomNumber) {
//         hint = `💡 Hint: The number is greater than ${lastGuess}.`;
//     } else {
//         hint = '🎯 You already guessed it!';
//     }
    
//     showMessage(hint, 'info');
// }

// // Restart game function
// function restartGame() {
//     initGame();
// }

// // Keyboard event listener
// document.addEventListener('DOMContentLoaded', function() {
//     // Initialize game
//     initGame();
    
//     // Enter key to submit
//     numberInput.addEventListener('keypress', function(event) {
//         if (event.key === 'Enter') {
//             event.preventDefault();
//             submitGuess();
//         }
//     });
    
//     // Input validation to only allow numbers 1-10
//     numberInput.addEventListener('input', function() {
//         let value = parseInt(this.value);
//         if (value < 1) this.value = 1;
//         if (value > 100) this.value = 100;
//     });
// });

// // Add event listener to submit button (alternative to onclick)
// submitButton.addEventListener('click', submitGuess);

























// let randomNumber = Math.floor(Math.random() * 100) + 1;
// let attempts = 0;
// const maxAttempts = 10;

// function submit() {
//     const inputElement = document.getElementById('number');
//     const userGuess = parseInt(inputElement.value);
    
//     // Check --input is valid
//     if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
//         showMessage("Please enter a valid number between 1 and 100!");
//         inputElement.value = ''; // Clear the input
//         inputElement.focus(); // Focus back to input
//         return;
//     }
    
//     attempts++;
    
//     // Check the guess
//     if (userGuess === randomNumber) {
//         showMessage(`🎉 Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempt(s)!`);
//         disableGame();
//     } else if (userGuess > randomNumber) {
//         showMessage("OOPS! SORRY!!! TRY A SMALLER NUMBER.");
//     } else {
//         showMessage("OOPS! SORRY!!! TRY A LARGER NUMBER.");
//     }
    
//     // Check if maximum attempts reached
//     if (attempts >= maxAttempts && userGuess !== randomNumber) {
//         showMessage(`😞 Game Over! The correct number was ${randomNumber}. You've used all ${maxAttempts} attempts.`);
//         disableGame();
//     }
    
//     // Clear input and focus for next guess
//     inputElement.value = '';
//     inputElement.focus();
// }

// function showMessage(message) {
//     // Remove any existing message div
//     const existingMessage = document.querySelector('.message');
//     if (existingMessage) {
//         existingMessage.remove();
//     }
    
//     // Create new message element
//     const messageDiv = document.createElement('div');
//     messageDiv.className = 'message';
//     messageDiv.textContent = message;
//     messageDiv.style.cssText = `
//         margin-top: 20px;
//         padding: 10px;
//         font-size: 20px;
//         color: white;
//         background-color: #018790;
//         border-radius: 5px;
//         animation: fadeIn 0.5s;
//     `;
    
//     // Add to DOM
//     const contentDiv = document.getElementById('content');
//     contentDiv.appendChild(messageDiv);
    
//     // Add CSS animation
//     if (!document.querySelector('#fadeInAnimation')) {
//         const style = document.createElement('style');
//         style.id = 'fadeInAnimation';
//         style.textContent = `
//             @keyframes fadeIn {
//                 from { opacity: 0; transform: translateY(-10px); }
//                 to { opacity: 1; transform: translateY(0); }
//             }
//         `;
//         document.head.appendChild(style);
//     }
// }

// function disableGame() {
//     document.getElementById('btn').disabled = true;
//     document.getElementById('btn').style.opacity = '0.5';
//     document.getElementById('btn').style.cursor = 'not-allowed';
    
//     document.getElementById('number').disabled = true;
//     document.getElementById('number').style.opacity = '0.5';
// }

// // Add Enter key functionality
// document.addEventListener('DOMContentLoaded', function() {
//     const inputField = document.getElementById('number');
//     const submitButton = document.getElementById('btn');
    
//     // Press Enter to submit
//     inputField.addEventListener('keypress', function(event) {
//         if (event.key === 'Enter') {
//             event.preventDefault();
//             submitButton.click();
//         }
//     });
    
//     // Focus input field on page load
//     inputField.focus();
    
//     // Update the text to show 1-10 instead of 1-100
//     const instructionText = document.querySelector('#main p');
//     if (instructionText) {
//         instructionText.textContent = "We have selected a random number between 1-10. See if you can guess it.";
//     }
// });