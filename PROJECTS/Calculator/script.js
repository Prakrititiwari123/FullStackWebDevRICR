const display = document.getElementById("screen");
console.log("Display element:", display); // Yeh console mein dikhega

const clickA = (value) => {
    console.log("Button clicked:", value); // Har button click par yeh dikhega
    display.value += value;
};

const clearDisplay = () => {
    console.log("Clear button clicked"); // Clear button par yeh dikhega
    display.value = "";
};

const calculateBtn = () => {
    console.log("Calculate button clicked"); // Equal button par yeh dikhega
    const ex = display.value;
    console.log("Current expression:", ex); // Current value dikhega
    
    const valid = /^[0-9+\-*/.]+$/.test(ex);
    console.log("Is valid expression?", valid); // Validation result dikhega

    if (valid && ex !== "") {
        const result = eval(ex);
        console.log("Calculation result:", result); // Result dikhega
        display.value = result;
    } else {
        console.log("Invalid expression - showing Error"); // Error case dikhega
        display.value = "Error";
    }
};

// Additional test
console.log("Script loaded successfully!"); // Page load par yeh dikhega
