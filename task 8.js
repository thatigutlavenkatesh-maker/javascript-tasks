
// TASK 1: Employee Salary Management
const employees = [
  { id: 1, name: "Rahul", salary: 25000 },
  { id: 2, name: "Kavin", salary: 50000 },
  { id: 3, name: "John", salary: 75000 }
];

console.log(" TASK 1 ");

console.log(
  "Salary > 40000:",
  employees.filter(emp => emp.salary > 40000)
);

console.log(
  "First Salary > 60000:",
  employees.find(emp => emp.salary > 60000)
);

console.log(
  "Total Salary Expense:",
  employees.reduce((sum, emp) => sum + emp.salary, 0)
);

console.log(
  "Employee Names:",
  employees.map(emp => emp.name)
);

// TASK 2: College Admission Form

console.log("\n TASK 2 ");

function checkAdmission(name, age, percentage) {
  return age >= 18 && percentage >= 60
    ? `${name} Eligible for Admission`
    : `${name} Not Eligible`;
}

console.log(checkAdmission("Rahul", 19, 75));

// TASK 3: E-Commerce Cart

console.log("\n TASK 3 ");

const cart = [
  { product: "Shoes", price: 2000, qty: 2 },
  { product: "Watch", price: 1500, qty: 1 },
  { product: "Bag", price: 1000, qty: 3 }
];

const totalBill = cart.reduce(
  (sum, item) => sum + item.price * item.qty,
  0
);

console.log("Total Bill:", totalBill);

const expensiveProduct = cart.reduce((max, item) =>
  item.price > max.price ? item : max
);

console.log("Most Expensive Product:", expensiveProduct);

console.log(
  "Product Names:",
  cart.map(item => item.product)
);

// TASK 4: Traffic Fine System
console.log("\n TASK 4 ");

const signal = "red";

switch (signal) {
  case "red":
    console.log("STOP - Fine ₹1000");
    break;

  case "yellow":
    console.log("WAIT - Fine ₹500");
    break;

  case "green":
    console.log("GO");
    break;

  default:
    console.log("Invalid Signal");
}

// TASK 5: Student Result Processing

console.log("\n TASK 5 ");

const students = [
  { name: "A", mark: 95 },
  { name: "B", mark: 45 },
  { name: "C", mark: 80 },
  { name: "D", mark: 30 }
];

console.log(
  "Passed:",
  students.filter(student => student.mark >= 50)
);

console.log(
  "Failed:",
  students.filter(student => student.mark < 50)
);

const grades = students.map(student => ({
  name: student.name,
  grade:
    student.mark >= 90
      ? "A"
      : student.mark >= 75
      ? "B"
      : student.mark >= 50
      ? "C"
      : "F"
}));

console.log("Grades:", grades);

// TASK 6: Online Food Delivery
console.log("\n TASK 6 ");

function placeOrder(customerName, ...items) {
  console.log("Customer:", customerName);
  console.log("Items:", items);
  console.log("Item Count:", items.length);
}

placeOrder("Rahul", "Pizza", "Burger", "Juice");

// TASK 7: Bank Account System

console.log("\n TASK 7 ");

let balance = 10000;

function deposit(amount) {
  balance += amount;
  return balance;
}

function withdraw(amount) {
  if (amount <= balance) {
    balance -= amount;
  }
  return balance;
}

function checkBalance() {
  return balance;
}

console.log("Deposit:", deposit(5000));
console.log("Withdraw:", withdraw(2000));
console.log("Balance:", checkBalance());

// TASK 8: Movie Ticket Booking
console.log("\n TASK 8 ");

const bookedSeats = ["A1", "A2", "B1"];

function bookSeat(seat) {
  if (bookedSeats.includes(seat)) {
    console.log(seat, "Already Booked");
  } else {
    bookedSeats.push(seat);
    console.log(seat, "Booked Successfully");
  }
}

bookSeat("A3");

console.log("Booked Seats:");
for (let seat of bookedSeats) {
  console.log(seat);
}

// TASK 9: User Login Validation

console.log("\n TASK 9 ");

function validateUser(username, password, email) {
  if (username.includes(" ")) {
    return "Username should not contain spaces";
  }

  if (password.length < 8) {
    return "Password should be at least 8 characters";
  }

  if (!email.includes("@")) {
    return "Invalid Email";
  }

  return "Login Successful";
}

console.log(
  validateUser(
    "rahul123",
    "password123",
    "rahul@gmail.com"
  )
);
// TASK 10: Product API Dashboard

console.log("\n TASK 10 ");

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {
    console.log("Product Titles:");

    products.forEach(product =>
      console.log(product.title)
    );

    const costlyProducts = products.filter(
      product => product.price > 1000
    );

    console.log(
      "Products Above ₹1000:",
      costlyProducts
    );

    console.log(
      "Total Products:",
      products.length
    );
  });



// TASK 11: Birthday Day Finder

console.log("\n TASK 11 ");

const dob = new Date("2002-08-15");

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

console.log("Day:", dob.getDate());
console.log("Month:", dob.getMonth() + 1);
console.log("Year:", dob.getFullYear());
console.log("Weekday:", weekdays[dob.getDay()]);

// TASK 12: Netflix Subscription

console.log("\n TASK 12 ");

const plan = "Premium";

const benefit =
  plan === "Mobile"
    ? "Mobile Only"
    : plan === "Basic"
    ? "HD Streaming"
    : plan === "Standard"
    ? "Full HD + 2 Screens"
    : plan === "Premium"
    ? "4K + 4 Screens"
    : "Invalid Plan";

console.log(benefit);

// TASK 13: Hospital Patient Management

console.log("\n TASK 13 ");

const patients = [
  { id: 1, name: "Rahul", critical: true },
  { id: 2, name: "John", critical: false },
  { id: 3, name: "Kavin", critical: true }
];

console.log(
  "Critical Patients:",
  patients.filter(patient => patient.critical)
);

console.log(
  "Patient ID 2:",
  patients.find(patient => patient.id === 2)
);

console.log(
  "Total Patients:",
  patients.length
);

/// TASK 14: Inventory Management

console.log("\n TASK 14 ");

const inventory1 = [
  { id: 1, product: "Laptop", price: 50000 }
];

const inventory2 = [
  { id: 2, product: "Phone", price: 20000 }
];

const mergedInventory = [
  ...inventory1,
  ...inventory2
];

console.log("Merged Inventory:", mergedInventory);

const { id, product, price } =
  mergedInventory[0];

console.log("Destructured:", id, product, price);

const updatedInventory = [
  ...mergedInventory,
  { id: 3, product: "Tablet", price: 15000 }
];

console.log("Updated Inventory:", updatedInventory);
// TASK 15: WhatsApp Group Management
console.log("\n TASK 15 ");

let groupMembers = [
  "Rahul",
  "John",
  "Kavin"
];

groupMembers.push("David");
groupMembers.pop();
groupMembers.shift();
groupMembers.unshift("Arun");
groupMembers.splice(2, 0, "Priya");

console.log("Final Group Members:");
console.log(groupMembers);