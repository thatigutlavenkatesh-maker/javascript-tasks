//  TASK 1 
// Student Management System

let students=[
{id:1,name:"Ravi",department:"CSE",mark:95},
{id:2,name:"Priya",department:"ECE",mark:82},
{id:3,name:"Arjun",department:"IT",mark:76},
{id:4,name:"Sneha",department:"EEE",mark:45},
{id:5,name:"Kiran",department:"MECH",mark:67}
];

console.log("TASK 1");

let totalMarks=0;

for(let s of students){
console.log(s.name);
totalMarks+=s.mark;
}

console.log("Total Marks:",totalMarks);

for(let s of students){
if(s.mark>80){
console.log("Above 80:",s.name);
}
}

for(let s of students){
if(s.mark>=90){
console.log(s.name,"Grade A");
}
else if(s.mark>=75){
console.log(s.name,"Grade B");
}
else if(s.mark>=50){
console.log(s.name,"Grade C");
}
else{
console.log(s.name,"Fail");
}
}

function studentDetails(){
for(let s of students){
console.log(s);
}
}
studentDetails();


// TASK 2 
// Employee Payroll System

let employees=[
{id:1,name:"Raj",salary:25000,department:"HR"},
{id:2,name:"Asha",salary:40000,department:"IT"},
{id:3,name:"Kumar",salary:50000,department:"Finance"}
];

console.log("TASK 2");

let totalSalary=0;

for(let e of employees){
console.log(e.name);
totalSalary+=e.salary;
}

console.log("Total Salary:",totalSalary);

for(let e of employees){
if(e.salary>30000){
console.log("Above 30000:",e.name);
}
}

for(let e of employees){
switch(e.department){
case "HR":
console.log("Human Resources");
break;
case "IT":
console.log("Information Technology");
break;
case "Finance":
console.log("Finance Department");
break;
}
}

function payrollReport(callback){
console.log("Generating Payroll...");
callback();
}

function payrollDone(){
console.log("Payroll Generated");
}

payrollReport(payrollDone);


//  TASK 3 
// Online Food Order System

let foods=[
{id:1,foodName:"Biryani",price:250,category:"Main"},
{id:2,foodName:"Burger",price:150,category:"FastFood"},
{id:3,foodName:"Pizza",price:350,category:"FastFood"}
];

console.log("TASK 3");

let menuValue=0;

for(let f of foods){
console.log(f.foodName);
menuValue+=f.price;
}

console.log("Menu Value:",menuValue);

for(let f of foods){
if(f.price>200){
console.log(f.foodName);
}
}

for(let f of foods){
switch(f.category){
case "Main":
console.log("Main Course");
break;
case "FastFood":
console.log("Fast Food");
break;
}
}

function orderConfirm(callback){
console.log("Order Placed");
callback();
}

function orderDone(){
console.log("Order Confirmed");
}

orderConfirm(orderDone);


//  TASK 4 
// Movie Ticket Booking System

let movies=[
{movieName:"Leo",ticketPrice:200,availableSeats:50,language:"Tamil"},
{movieName:"Pushpa",ticketPrice:250,availableSeats:0,language:"Telugu"}
];

console.log("TASK 4");

let totalSeats=0;

for(let m of movies){
console.log(m.movieName);
totalSeats+=m.availableSeats;
}

console.log("Total Seats:",totalSeats);

for(let m of movies){
if(m.availableSeats>0){
console.log("Booking Available:",m.movieName);
}
else{
console.log("House Full:",m.movieName);
}
}

for(let m of movies){
switch(m.language){
case "Tamil":
console.log("Tamil Movie");
break;
case "Telugu":
console.log("Telugu Movie");
break;
}
}

function booking(callback){
console.log("Booking Process");
callback();
}

function bookingSuccess(){
console.log("Booking Confirmed");
}

booking(bookingSuccess);


//  TASK 5 
// Hospital Patient Records

let patients=[
{patientId:1,patientName:"Ram",age:65,disease:"Heart"},
{patientId:2,patientName:"Sita",age:40,disease:"Skin"},
{patientId:3,patientName:"John",age:72,disease:"Lung"}
];

console.log("TASK 5");

for(let p of patients){
console.log(p.patientName);
}

console.log("Total Patients:",patients.length);

for(let p of patients){
if(p.age>60){
console.log("Senior Patient:",p.patientName);
}
}

for(let p of patients){
switch(p.disease){
case "Heart":
console.log("Cardiology");
break;
case "Skin":
console.log("Dermatology");
break;
case "Lung":
console.log("Pulmonology");
break;
}
}

function appointment(callback){
console.log("Appointment Booked");
callback();
}

function appointmentDone(){
console.log("Appointment Confirmed");
}

appointment(appointmentDone);


// TASK 6 
// Library Management System

let books=[
{bookId:1,bookName:"JavaScript",author:"ABC",price:600},
{bookId:2,bookName:"Python",author:"XYZ",price:450},
{bookId:3,bookName:"Java",author:"PQR",price:700}
];

console.log("TASK 6");

let bookValue=0;

for(let b of books){
console.log(b.bookName);
bookValue+=b.price;
}

console.log("Book Value:",bookValue);

for(let b of books){
if(b.price>500){
console.log(b.bookName);
}
}

function issueBook(name){
console.log(name,"Issued Successfully");
}

issueBook("JavaScript");


// TASK 7 
// E-Commerce Product Dashboard

let products=[
{productId:1,productName:"Laptop",price:50000,stock:5},
{productId:2,productName:"Mouse",price:500,stock:20},
{productId:3,productName:"Keyboard",price:1500,stock:8}
];

console.log("TASK 7");

let inventory=0;

for(let p of products){
console.log(p.productName);
inventory+=p.price*p.stock;
}

console.log("Inventory Value:",inventory);

for(let p of products){
if(p.stock<10){
console.log("Low Stock:",p.productName);
}
}

for(let p of products){
if(p.stock>10){
console.log(p.productName,"In Stock");
}
else{
console.log(p.productName,"Low Stock");
}
}

function productReport(callback){
console.log("Generating Product Report");
callback();
}

function productDone(){
console.log("Report Ready");
}

productReport(productDone);


//  TASK 8 
// College Admission System

let applicants=[
{name:"Raju",age:19,percentage:75,department:"CSE"},
{name:"Anu",age:17,percentage:85,department:"ECE"},
{name:"Vijay",age:20,percentage:55,department:"IT"}
];

console.log("TASK 8");

let eligible=0;

for(let a of applicants){
console.log(a.name);

if(a.age>=18 && a.percentage>=60){
eligible++;
console.log(a.name,"Eligible");
}
else{
console.log(a.name,"Not Eligible");
}
}

console.log("Eligible Count:",eligible);

for(let a of applicants){
switch(a.department){
case "CSE":
console.log("Computer Science");
break;
case "ECE":
console.log("Electronics");
break;
case "IT":
console.log("Information Technology");
break;
}
}

function admission(callback){
console.log("Admission Processing");
callback();
}

function admissionDone(){
console.log("Admission Confirmed");
}

admission(admissionDone);


//  TASK 9 
// Bus Reservation System

let passengers=[
{passengerId:1,name:"Ravi",seatNumber:1,ticketPrice:500,busType:"AC"},
{passengerId:2,name:"Priya",seatNumber:2,ticketPrice:500,busType:"Sleeper"}
];

console.log("TASK 9");

let collection=0;

for(let p of passengers){
console.log(p.name);
collection+=p.ticketPrice;
}

console.log("Collection:",collection);

for(let p of passengers){
console.log("Occupied Seat:",p.seatNumber);
}

for(let p of passengers){
switch(p.busType){
case "AC":
console.log("Air Conditioned Bus");
break;
case "Sleeper":
console.log("Sleeper Bus");
break;
}
}

function ticket(callback){
console.log("Ticket Booking");
callback();
}

function ticketDone(){
console.log("Ticket Confirmed");
}

ticket(ticketDone);


// TASK 10 
// Mobile Store Management

let mobiles=[
{brand:"Samsung",model:"S24",price:80000,stock:5},
{brand:"Vivo",model:"V30",price:30000,stock:10},
{brand:"Redmi",model:"Note13",price:18000,stock:15}
];

console.log("TASK 10");

let stockValue=0;

for(let m of mobiles){
console.log(m.brand,m.model);
stockValue+=m.price*m.stock;
}

console.log("Stock Value:",stockValue);

for(let m of mobiles){
if(m.price>20000){
console.log(m.brand,m.model);
}
}

for(let m of mobiles){
switch(m.brand){
case "Samsung":
console.log("Premium Brand");
break;
case "Vivo":
console.log("Mid Range Brand");
break;
case "Redmi":
console.log("Budget Brand");
break;
}
}

function salesReport(callback){
console.log("Generating Sales Report");
callback();
}
function salesDone(){
console.log("Sales Report Ready");
}
salesReport(salesDone);