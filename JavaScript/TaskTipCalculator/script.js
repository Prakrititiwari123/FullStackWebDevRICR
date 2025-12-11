// Tip Calculator JavaScript

// Set option values properly
document.addEventListener('DOMContentLoaded', function() {
    const selectOptions = document.getElementById('select');
    selectOptions.innerHTML = `
        <option value="">Select</option>
        <option value="25">25% - Top Notch</option>
        <option value="20">20% - Excellent</option>
        <option value="15">15% - Good</option>
        <option value="10">10% - Bad</option>
        <option value="5">5% - Worst</option>
    `;
});

// Calculate function
document.getElementById('calBtn').addEventListener('click', function() {
    // Get input values
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercent = parseFloat(document.getElementById('select').value);
    const totalPersons = parseInt(document.getElementById('totalNumber').value);
    
    // Validate inputs
    if (isNaN(billAmount) || billAmount <= 0) {
        alert("Please enter a valid bill amount!");
        document.getElementById('billAmount').focus();
        return;
    }
    
    if (isNaN(tipPercent) || tipPercent <= 0) {
        alert("Please select service quality!");
        document.getElementById('select').focus();
        return;
    }
    
    if (isNaN(totalPersons) || totalPersons <= 0) {
        alert("Please enter number of persons!");
        document.getElementById('totalNumber').focus();
        return;
    }
    
    // Calculate tip
    const totalTip = (billAmount * tipPercent) / 100;
    const tipPerPerson = totalTip / totalPersons;
    const totalPerPerson = (billAmount + totalTip) / totalPersons;
    
    // Show result
    showResult(tipPerPerson, totalTip, totalPerPerson);
});

// Show result function
function showResult(tipPerPerson, totalTip, totalPerPerson) {
    // Remove old result if exists
    const oldResult = document.getElementById('result');
    if (oldResult) {
        oldResult.remove();
    }
    
    // Create result div
    const resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    
    // Style result
    resultDiv.style.cssText = `
        margin-top: 20px;
        padding: 20px;
        background-color: #FCF6D9;
        border-radius: 10px;
        text-align: center;
        border: 2px solid #CF4B00;
    `;
    
    // Result content
    resultDiv.innerHTML = `
        <h4 style="color: #CF4B00; margin-bottom: 15px;">💸 TIP CALCULATION</h4>
        <div style="font-size: 18px;">
            <div style="margin-bottom: 8px;">
                <strong>Total Tip:</strong> ₹${totalTip.toFixed(2)}
            </div>
            <div style="margin-bottom: 8px;">
                <strong>Tip per person:</strong> ₹${tipPerPerson.toFixed(2)}
            </div>
            <div style="margin-bottom: 8px;">
                <strong>Total per person:</strong> ₹${totalPerPerson.toFixed(2)}
            </div>
            <div style="font-size: 16px; color: #666; margin-top: 10px;">
                (Bill + Tip) / Persons
            </div>
        </div>
    `;
    
    // Add result to container
    const container = document.getElementById('container');
    container.appendChild(resultDiv);
}

// Add Enter key functionality
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('calBtn').click();
    }
});