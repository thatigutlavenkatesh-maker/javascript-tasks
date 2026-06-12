
// Task 1: Employee Bonus Calculator
console.log("Task 1: Employee Bonus Calculator");

let employeeName = "Rahul";
let salary = 30000;
let experience = 6;
let bonus = 0;

if (experience >= 5) {
    bonus = salary * 0.20;
} else if (experience >= 2) {
    bonus = salary * 0.10;
} else {
    bonus = salary * 0.05;
}

let finalSalary = salary + bonus;

console.log("Employee:", employeeName);
console.log("Final Salary:", finalSalary);



// Task 2: College Admission System
console.log("\nTask 2: College Admission System");

let studentName = "Kavin";
let studentAge = 18;
let percentage = 75;

if (studentAge >= 17) {
    if (percentage >= 60) {
        console.log("Admission Approved");
    } else {
        console.log("Admission Rejected");
    }
} else {
    console.log("Admission Rejected");
}



// Task 3: Food Delivery Menu
console.log("\nTask 3: Food Delivery Menu");

let choice = 1;

switch (choice) {
    case 1:
        console.log("Order Confirmed : Pizza");
        break;
    case 2:
        console.log("Order Confirmed : Burger");
        break;
    case 3:
        console.log("Order Confirmed : Shawarma");
        break;
    case 4:
        console.log("Order Confirmed : Fried Rice");
        break;
    default:
        console.log("Invalid Choice");
}



// Task 4: Attendance Tracker
console.log("\nTask 4: Attendance Tracker");

let students = [
    "Rahul",
    "Kavin",
    "John",
    "David",
    "Arun",
    "Vijay",
    "Ram",
    "Sai",
    "Ajay",
    "Kumar"
];

for (let student of students) {
    console.log(student);
}

console.log("Total Students:", students.length);

// Task 5: E-Commerce Cart
console.log("\nTask 5: E-Commerce Cart");

let cart = [
    { product: "Mobile", price: 15000 },
    { product: "Headset", price: 2000 },
    { product: "Charger", price: 1000 }
];

let totalCartValue = 0;
let expensiveProduct = cart[0];

for (let item of cart) {
    console.log(item.product);

    totalCartValue += item.price;

    if (item.price > expensiveProduct.price) {
        expensiveProduct = item;
    }
}

console.log("Total Cart Value:", totalCartValue);
console.log("Most Expensive Product:", expensiveProduct.product);

// Task 6: Bank Account Management
console.log("\nTask 6: Bank Account Management");

let balance = 10000;

function deposit(amount) {
    balance += amount;
}

function withdraw(amount) {
    balance -= amount;
}

function checkBalance() {
    console.log("Balance:", balance);
}

deposit(5000);
withdraw(2000);
checkBalance();

// Task 7: Movie Ticket Booking
console.log("\nTask 7: Movie Ticket Booking");

let movieAge = 25;

if (movieAge < 5) {
    console.log("Ticket Price: Free");
} else if (movieAge <= 18) {
    console.log("Ticket Price: ₹100");
} else if (movieAge <= 60) {
    console.log("Ticket Price: ₹200");
} else {
    console.log("Ticket Price: ₹120");
}

// Task 8: Online Shopping Discount
console.log("\nTask 8: Online Shopping Discount");

let purchase = 6000;
let discount = 0;

if (purchase > 5000) {
    discount = purchase * 0.20;
} else if (purchase > 3000) {
    discount = purchase * 0.10;
} else if (purchase > 1000) {
    discount = purchase * 0.05;
}

let finalAmount = purchase - discount;

console.log("Original Amount:", purchase);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);

// Task 9: Food Inventory System
console.log("\nTask 9: Food Inventory System");

let inventory = ["Rice", "Oil", "Sugar", "Milk", "Egg"];

inventory.push("Bread");
inventory.push("Butter");

inventory.shift();
inventory.pop();

console.log("Milk Exists:", inventory.includes("Milk"));
console.log("Final Inventory:", inventory);

// Task 10: Hospital Patient Management
console.log("\nTask 10: Hospital Patient Management");

let patient = {
    patientName: "Rahul",
    age: 30,
    disease: "Fever",
    doctor: "Dr.Smith"
};

for (let key in patient) {
    console.log(key + ":", patient[key]);
}

let {
    patientName,
    age,
    disease,
    doctor
} = patient;

console.log(patientName);
console.log(age);
console.log(disease);
console.log(doctor);
// Task 11: Amazon Order Tracker
console.log("\nTask 11: Amazon Order Tracker");

function sendSMS() {
    console.log("SMS Sent To Customer");
}

function placeOrder(callback) {
    console.log("Order Placed Successfully");
    callback();
}

placeOrder(sendSMS);
// Task 12: Cashback Offer Generator
console.log("\nTask 12: Cashback Offer Generator");

function* offers() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

let offer = offers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);

// Task 13: Employee Database
console.log("\nTask 13: Employee Database");

let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 30000 },
    { id: 3, name: "John", salary: 40000 }
];

let totalSalary = 0;
let highestSalaryEmployee = employees[0];

for (let emp of employees) {
    console.log(emp.name);

    totalSalary += emp.salary;

    if (emp.salary > highestSalaryEmployee.salary) {
        highestSalaryEmployee = emp;
    }
}

console.log("Total Salary Expense:", totalSalary);
console.log("Highest Salary Employee:", highestSalaryEmployee.name);
// Task 14: Railway Reservation System
console.log("\nTask 14: Railway Reservation System");

let totalSeats = 50;

function bookSeat(seats) {
    if (seats <= totalSeats) {
        totalSeats -= seats;
        console.log("Booking Successful");
        console.log("Available Seats:", totalSeats);
    } else {
        console.log("Seats Not Available");
    }
}

bookSeat(10);
bookSeat(20);
bookSeat(25);
// Task 15: Mobile Store Billing System
console.log("\nTask 15: Mobile Store Billing System");

let products = {
    Mobile: 15000,
    Laptop: 50000,
    Headphone: 2000,
    Smartwatch: 5000
};

let selectedProducts = [
    "Mobile",
    "Headphone",
    "Smartwatch"
];

let totalAmount = 0;

for (let item of selectedProducts) {
    totalAmount += products[item];
}

let gst = totalAmount * 0.18;
let finalBill = totalAmount + gst;

console.log("Selected Products:", selectedProducts);
console.log("Total Amount:", totalAmount);
console.log("GST 18%:", gst);
console.log("Final Bill:", finalBill);