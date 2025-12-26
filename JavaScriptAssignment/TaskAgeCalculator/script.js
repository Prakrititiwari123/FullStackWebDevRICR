let dob = document.getElementById("dateTimeB");
let result = document.getElementById("result");
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;
let currentDay = new Date().getDate(); 


document.getElementById("calculateBtn").addEventListener("click", () => {
    if (dob.value == "") {
        result.innerHTML = "Please select Date of Birth";
    } else {
        calculateAge(dob.value);
    }
});

document.getElementById("clearBtn").addEventListener("click", () => {
    window.location.reload();
});

function calculateAge(start) {
    let dobYear = parseInt(start.substring(0, 4), 10);
    let dobMonth = parseInt(start.substring(5, 7), 10);
    let dobDate = parseInt(start.substring(8, 10), 10);

    let yearAgeDiff = currentYear - dobYear;
    let monthAgeDiff;
    let dateAgeDiff;

    
    if (currentMonth >= dobMonth) {
        monthAgeDiff = currentMonth - dobMonth;
    } else {
        yearAgeDiff--;
        monthAgeDiff = 12 + currentMonth - dobMonth;
    }

    
    if (currentDay >= dobDate) {
        dateAgeDiff = currentDay - dobDate;
    } else {
        monthAgeDiff--;
        let noOfDaysInDOB = daysInMonth(dobMonth, dobYear);
        dateAgeDiff = noOfDaysInDOB + currentDay - dobDate;

        if (monthAgeDiff < 0) {
            monthAgeDiff = 11;
            yearAgeDiff--;
        }
    }

    result.innerHTML = `${yearAgeDiff} Years ${monthAgeDiff} Months ${dateAgeDiff} Days`;
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}