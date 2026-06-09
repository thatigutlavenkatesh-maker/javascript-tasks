// ==========================
// Task 1: Age Category Finder
// ==========================
let age = Number(prompt("Task 1\nEnter Age:"));
if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 59) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}

// ==========================
// Task 2: Salary Hike Calculator
// ==========================
let salary = Number(prompt("Task 2\nEnter Salary:"));
let newSalary;

if (salary < 20000) {
    newSalary = salary + (salary * 20 / 100);
} else if (salary <= 50000) {
    newSalary = salary + (salary * 10 / 100);
} else {
    newSalary = salary + (salary * 5 / 100);
}

console.log("Old Salary:", salary);
console.log("New Salary:", newSalary);

// ==========================
// Task 3: Electricity Department
// ==========================
let units = Number(prompt("Task 3\nEnter Units Consumed:"));
let bill;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = units * 7;
} else {
    bill = units * 10;
}

console.log("Electricity Bill:", bill);

// ==========================
// Task 4: Simple ATM
// ==========================
let balance = 10000;
let withdraw = Number(prompt("Task 4\nEnter Withdrawal Amount:"));

if (withdraw <= balance) {
    balance = balance - withdraw;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance:", balance);
} else {
    console.log("Insufficient Funds");
}

// ==========================
// Task 5: Login Validation
// ==========================
let username = prompt("Task 5\nEnter Username:");
let password = prompt("Enter Password:");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}

// ==========================
// Task 6: Mobile Recharge Offer
// ==========================
let recharge = Number(prompt("Task 6\nEnter Recharge Amount:"));

if (recharge >= 499) {
    console.log("Netflix Offer");
} else if (recharge >= 299) {
    console.log("2GB Extra Data");
} else {
    console.log("No Offer");
}

// ==========================
// Task 7: Traffic Signal System
// ==========================
let color = prompt("Task 7\nEnter Signal Color:");

switch (color.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Color");
}

// ==========================
// Task 8: Employee Attendance
// ==========================
let workingDays = Number(prompt("Task 8\nEnter Working Days:"));
let presentDays = Number(prompt("Enter Present Days:"));

let attendance = (presentDays / workingDays) * 100;

console.log("Attendance Percentage:", attendance + "%");

if (attendance >= 75) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

// ==========================
// Task 9: Bus Ticket Booking
// ==========================
let ticketPrice = 500;
let tickets = Number(prompt("Task 9\nEnter Number of Tickets:"));

let totalAmount = ticketPrice * tickets;
let gst = totalAmount * 5 / 100;
let finalAmount = totalAmount + gst;

console.log("Total Amount:", totalAmount);
console.log("GST:", gst);
console.log("Final Amount:", finalAmount);

// ==========================
// Task 10: Restaurant Bill
// ==========================
let foodCost = Number(prompt("Task 10\nEnter Food Cost:"));
let finalBill;

if (foodCost > 2000) {
    finalBill = foodCost - (foodCost * 10 / 100);
} else {
    finalBill = foodCost;
}

console.log("Final Bill:", finalBill);

// ==========================
// Task 11: Police Recruitment
// ==========================
let policeAge = Number(prompt("Task 11\nEnter Age:"));
let height = Number(prompt("Enter Height:"));
let weight = Number(prompt("Enter Weight:"));

if (policeAge >= 18) {
    if (height >= 160) {
        if (weight >= 55) {
            console.log("Selected");
        } else {
            console.log("Rejected: Weight Less Than 55");
        }
    } else {
        console.log("Rejected: Height Less Than 160");
    }
} else {
    console.log("Rejected: Age Less Than 18");
}

// ==========================
// Task 12: Student Result
// ==========================
let m1 = Number(prompt("Task 12\nEnter Subject 1 Marks:"));
let m2 = Number(prompt("Enter Subject 2 Marks:"));
let m3 = Number(prompt("Enter Subject 3 Marks:"));
let m4 = Number(prompt("Enter Subject 4 Marks:"));
let m5 = Number(prompt("Enter Subject 5 Marks:"));

let total = m1 + m2 + m3 + m4 + m5;
let percentage = total / 5;

console.log("Total Marks:", total);
console.log("Percentage:", percentage);

if (percentage >= 90) {
    console.log("Grade A+");
} else if (percentage >= 80) {
    console.log("Grade A");
} else if (percentage >= 70) {
    console.log("Grade B");
} else if (percentage >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// ==========================
// Task 13: Employee Shift Finder
// ==========================
let time = Number(prompt("Task 13\nEnter Time (0-23):"));

if (time >= 6 && time < 14) {
    console.log("Morning Shift");
} else if (time >= 14 && time < 22) {
    console.log("Afternoon Shift");
} else {
    console.log("Night Shift");
}

// ==========================
// Task 14: Loan Eligibility
// ==========================
let loanAge = Number(prompt("Task 14\nEnter Age:"));
let loanSalary = Number(prompt("Enter Salary:"));
let experience = Number(prompt("Enter Experience (Years):"));

if (loanAge >= 21 && loanSalary >= 25000 && experience >= 2) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

// ==========================
// Task 15: Cab Fare Calculator
// ==========================
let distance = Number(prompt("Task 15\nEnter Distance (KM):"));
let fare;

if (distance <= 5) {
    fare = distance * 20;
} else {
    fare = (5 * 20) + ((distance - 5) * 15);
}

console.log("Cab Fare:", fare);

// ==========================
// Task 16: Multiplication Table Generator
// ==========================
let num = Number(prompt("Task 16\nEnter Number:"));

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

// ==========================
// Task 17: Password Checker
// ==========================
let passLength = Number(prompt("Task 17\nEnter Password Length:"));

if (passLength < 6) {
    console.log("Weak");
} else if (passLength <= 10) {
    console.log("Medium");
} else {
    console.log("Strong");
}

// ==========================
// Task 18: Company Bonus System
// ==========================
let exp = Number(prompt("Task 18\nEnter Experience (Years):"));
let empSalary = Number(prompt("Enter Salary:"));
let bonus;

if (exp <= 2) {
    bonus = empSalary * 5 / 100;
} else if (exp <= 5) {
    bonus = empSalary * 10 / 100;
} else {
    bonus = empSalary * 20 / 100;
}

console.log("Bonus Amount:", bonus);

// ==========================
// Task 19: Countdown Timer
// ==========================
let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}

console.log("Happy New Year");

// ==========================
// Task 20: Interview Selection System
// ==========================
let degree = prompt("Task 20\nDegree Completed? (yes/no)");
let communication = prompt("Communication Good? (yes/no)");
let technicalScore = Number(prompt("Enter Technical Score:"));

if (degree === "yes") {
    if (communication === "yes") {
        if (technicalScore >= 70) {
            console.log("Selected");
        } else {
            console.log("Rejected: Technical Score Below 70");
        }
    } else {
        console.log("Rejected: Communication Not Good");
    }
} else {
    console.log("Rejected: Degree Not Completed");
}