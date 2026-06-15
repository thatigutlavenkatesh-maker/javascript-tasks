// Task 1: Traffic Signal Management
let signal = "red";
switch(signal){
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
        console.log("Invalid Signal");
}
// Task 2: Employee Attendance Report
for(let i=1;i<=30;i++){
    console.log(`Employee ${i} Present`);
}
// Task 3: ATM Cash Withdrawal
let balance = 10000;
while(balance > 0){
    balance -= 500;
    console.log(`Remaining Balance: ₹${balance}`);
}

// Task 4: College Admission Eligibility
let age = 20;
let percentage = 75;
let examPassed = true;

if(age >= 18){
    if(percentage >= 70){
        if(examPassed){
            console.log("Admission Approved");
        }else{
            console.log("Entrance Exam Not Passed");
        }
    }else{
        console.log("Percentage Below 70");
    }
}else{
    console.log("Age Below 18");
}

// Task 5: Food Delivery Status
function delivery(customerName, foodItem, deliveryAddress){
    console.log(`${foodItem} delivered to ${customerName} at ${deliveryAddress}`);
}
delivery("Prasanna","Pizza","Hyderabad");
// Task 6: Salary Processing System
function calculateSalary(basic){
    return basic;
}
function calculateBonus(salary){
    return salary + salary * 0.2;
}
let salaryResult = calculateSalary(30000);
console.log(calculateBonus(salaryResult));
// Task 7: E-commerce Discount Engine
function applyDiscount(amount, callback){
    let finalAmount = amount - amount * 0.1;
    callback(finalAmount);
}
function generateInvoice(amount){
    console.log(`Invoice Amount: ₹${amount}`);
}
applyDiscount(5000, generateInvoice);

// Task 8: Promotional Offers
function* offers(){
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}
let offer = offers();
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
// Task 9: Student Database Merge
let scienceStudents = ["Ravi","Kiran"];
let commerceStudents = ["Ajay","Vijay"];
let allStudents = [...scienceStudents, ...commerceStudents];
console.log(allStudents);
// Task 10: Online Exam System
function totalMarks(studentName,...marks){
    let total = marks.reduce((a,b)=>a+b,0);
    console.log(`${studentName} Total Marks: ${total}`);
}
totalMarks("Prasanna",80,90,85,95);
// Task 11: Employee Profile
let employee = {
    name:"Prasanna",
    department:"IT",
    salary:50000,
    experience:3
};
let {name,department,salary,experience} = employee;
console.log(name,department,salary,experience);
// Task 12: Product Inventory Filter
let products = [
    {name:"Laptop",price:60000,category:"Electronics"},
    {name:"Mouse",price:500,category:"Electronics"},
    {name:"Mobile",price:25000,category:"Electronics"}
];
let expensiveProducts = products.filter(product => product.price > 5000);
console.log(expensiveProducts);
// Task 13: Find First Premium Customer
let customers = [
    {name:"A",amount:30000},
    {name:"B",amount:60000},
    {name:"C",amount:80000}
];
let premiumCustomer = customers.find(customer => customer.amount > 50000);
console.log(premiumCustomer);
// Task 14: Company Expense Tracker
let expenses = [10000,20000,15000,5000];
let totalExpense = expenses.reduce((total,expense)=>total+expense,0);
console.log(`Total Expense: ₹${totalExpense}`);

// Task 15: Gaming Tournament Verification
let players = [21,22,25,19];
console.log(players.every(player => player >= 18));

// Task 16: Job Portal Search
let candidates = [
    {name:"Rahul",skills:["Java","SQL"]},
    {name:"Kiran",skills:["React","JavaScript"]}
];
console.log(candidates.some(candidate => candidate.skills.includes("React")));
// Task 17: Mobile Number Validator
let mobile = "9876543210";
if(
    mobile.length === 10 &&
    (mobile.startsWith("6") ||
     mobile.startsWith("7") ||
     mobile.startsWith("8") ||
     mobile.startsWith("9"))
){
    console.log("Valid Mobile Number");
}else{
    console.log("Invalid Mobile Number");
}

// Task 18: URL Slug Generator
let title = "Learn JavaScript Complete Course";
let slug = title.toLowerCase().split(" ").join("-");
console.log(slug);

// Task 19: Employee Sorting Dashboard
let employees = [
    {name:"A",salary:50000},
    {name:"B",salary:30000},
    {name:"C",salary:70000}
];

let highToLow = [...employees].sort((a,b)=>b.salary-a.salary);
console.log(highToLow);

let lowToHigh = [...employees].sort((a,b)=>a.salary-b.salary);
console.log(lowToHigh);
// Task 20: Movie Booking System
let movies = ["Pushpa","RRR","Salaar"];
let bookingIds = movies.map((movie,index)=>({
    movie,
    bookingId:`BOOK${index+1}`
}));
console.log(bookingIds);
