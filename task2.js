// Task 1: Student Result Checker

let marks = 75;

console.log("Task 1");

if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
}


// Task 2: Employee Bonus Calculator

let salary = 25000;
let employeeBonus = salary * 10 / 100;
let employeeFinalSalary = salary + employeeBonus;

console.log("Task 2");
console.log("Original Salary :", salary);
console.log("Bonus :", employeeBonus);
console.log("Final Salary :", employeeFinalSalary);


// Task 3: User Login Validation

let email = "admin@gmail.com";
let password = "12345";

console.log("Task 3");

if (email === "admin@gmail.com" && password === "12345") {
    console.log("Login Success");
} else {
    console.log("Login Failed");
}


// Task 4: Product Discount Calculator

let price = 2000;
let productDiscount = price * 20 / 100;
let productFinalAmount = price - productDiscount;

console.log("Task 4");
console.log("Price :", price);
console.log("Discount :", productDiscount);
console.log("Final Amount :", productFinalAmount);


// Task 5: Array Product Management

let products = ["Laptop", "Mobile", "Mouse", "Keyboard"];

console.log("Task 5");
console.log("First Product :", products[0]);
console.log("Last Product :", products[products.length - 1]);
console.log("Total Products :", products.length);


// Task 6: Employee Object

let employee = {
    name: "Naveen",
    department: "Development",
    salary: 30000
};

console.log("Task 6");
console.log(employee);
console.log("Employee Name :", employee.name);
console.log("Salary :", employee.salary);


// Task 7: E-Commerce Cart Total

let shirt = 500;
let pant = 1000;
let shoe = 1500;

let totalBill = shirt + pant + shoe;
let cartDiscount = totalBill * 10 / 100;
let cartFinalAmount = totalBill - cartDiscount;

console.log("Task 7");
console.log("Total Bill :", totalBill);
console.log("Discount :", cartDiscount);
console.log("Final Amount :", cartFinalAmount);


// Task 8: Age Eligibility Checker

let age = 19;

console.log("Task 8");

if (age >= 18) {
    console.log("Eligible for Voting");
} else {
    console.log("Not Eligible");
}


// Task 9: Increment Decrement Practice

let a = 10;

console.log("Task 9");

console.log("Initial Value :", a);

a++;
console.log("After a++ :", a);

++a;
console.log("After ++a :", a);

a--;
console.log("After a-- :", a);

--a;
console.log("After --a :", a);


// Task 10: Mini Employee Attendance System

let isPresent = true;
let completedTask = true;

console.log("Task 10");

if (isPresent && completedTask) {
    console.log("Eligible for Salary");
} else {
    console.log("Not Eligible");
}


// Bonus Company-Level Task

let employeeDetails = {
    id: 101,
    name: "John",
    department: "Development",
    salary: 35000,
    experience: 2
};

let bonusAmount = employeeDetails.salary * 10 / 100;
let finalSalaryAmount = employeeDetails.salary + bonusAmount;

console.log("Bonus Task");

console.log("Employee ID :", employeeDetails.id);
console.log("Employee Name :", employeeDetails.name);
console.log("Department :", employeeDetails.department);
console.log("Salary :", employeeDetails.salary);
console.log("Experience :", employeeDetails.experience, "Years");

console.log("Bonus :", bonusAmount);
console.log("Final Salary :", finalSalaryAmount);

if (employeeDetails.experience >= 2) {
    console.log("Performance Status : Good");
} else {
    console.log("Performance Status : Average");
}