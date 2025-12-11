// Age Calculator JavaScript for your exact HTML/CSS

// Main calculate function - called when button is clicked
function calculate() {
    // Get the date inputs
    const dobInput = document.getElementById('dateTimeB');
    const currentInput = document.getElementById('dateTimeC');
    
    // Get the values
    const dobValue = dobInput.value;
    const currentValue = currentInput.value;
    
    // Check if user has entered both dates
    if (!dobValue) {
        alert("Please enter your Date of Birth!");
        dobInput.focus();
        return;
    }
    
    if (!currentValue) {
        alert("Please enter the Current Date!");
        currentInput.focus();
        return;
    }
    
    // Convert to Date objects
    const dob = new Date(dobValue);
    const current = new Date(currentValue);
    
    // Check if birth date is not in future
    if (dob > current) {
        alert("Date of Birth cannot be in the future!");
        dobInput.focus();
        return;
    }
    
    // Calculate age
    let years = current.getFullYear() - dob.getFullYear();
    let months = current.getMonth() - dob.getMonth();
    let days = current.getDate() - dob.getDate();
    
    // Adjust if days are negative
    if (days < 0) {
        months = months - 1;
        // Get last day of previous month
        const prevMonthLastDay = new Date(current.getFullYear(), current.getMonth(), 0);
        days = days + prevMonthLastDay.getDate();
    }
    
    // Adjust if months are negative
    if (months < 0) {
        years = years - 1;
        months = months + 12;
    }
    
    // Show the result
    showResult(years, months, days);
}

// Function to display result
function showResult(y, m, d) {
    // Remove old result if exists
    const oldResult = document.getElementById('ageResult');
    if (oldResult) {
        oldResult.remove();
    }
    
    // Create result div
    const resultDiv = document.createElement('div');
    resultDiv.id = 'ageResult';
    
    // Add CSS directly
    resultDiv.style.cssText = `
        margin-top: 20px;
        padding: 15px;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        border: 2px solid white;
        font-size: 22px;
        color: white;
        text-align: center;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    `;
    
    // Add the result text
    resultDiv.innerHTML = `
        <strong>Your age is ${y} years, ${m} months, and ${d} days.</strong>
    `;
    
    // Find the button container and add result after it
    const btnDiv = document.getElementById('Btn');
    btnDiv.parentNode.insertBefore(resultDiv, btnDiv.nextSibling);
}

// Set current date to today when page loads
window.onload = function() {
    // Get today's date in yyyy-mm-dd format
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const todayStr = `${year}-${month}-${day}`;
    
    // Set current date input to today
    document.getElementById('dateTimeC').value = todayStr;
    
    // Set max date for both inputs to today
    document.getElementById('dateTimeB').max = todayStr;
    document.getElementById('dateTimeC').max = todayStr;
};