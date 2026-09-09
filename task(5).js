//  Task 1 — For Loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Task 2 — Reverse Number

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Task 3 — Even Numbers

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Task 4 — Odd Numbers

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//  Task 5 — Multiplication Table

let num = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

// Task 6 — Countdown

let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

// Task 7 — Sum of Numbers

let i1 = 1;
let sum = 0;

while (i1 <= 10) {
    sum = sum + i1;
    i1++;
}

console.log(sum);

// Task 8 — Print Numbers

let i2 = 1;

do {
    console.log(i2);
    i2++;
} while (i2 <= 5);

// Task 9 — Do While Understanding

let a = 10;

do {
    console.log(a);
    a++
} while (a <= 5);

// Task 10 — String Characters

let name = "jagadeesh";

for (let char of name) {
    console.log(char);
}

// Task 11 — Array Values

let fruits = ["apple", "orange", "banana", "mango", "grapes"];

for (let fruit of fruits) {
    console.log(fruit);
}

// Task 12 — Student Names

let students = ["Jagadeesh", "Charitha", "Abhiram", "Divya", "Ramesh"]

for (let student of students) {
    console.log(`student: ${student}`);
}

// Task 13 — Employee Object

let employee = {
    name: "Ram",
    age: 25,
    role: "Developer",
    city: "Anathapur"
};
for (let key in employee) {
    console.log(key, employee[key]);
}

// Task 14 — Product Object

let product = {
    productName: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};

for (let key in product) {
    console.log(key, product[key]);
}

// Task 15 — Simple Function

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();

// Task 16 — Function With Parameter

function greet(name) {
    console.log("Hello, " + name);
}

greet("Jagadeesh");
greet("Charitha");
greet("Amuratha");

// Task 17 — Multiple Parameters

function student(name, age, department) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
}

student("Naveen", 25, "Computer");
student("Arun", 22, "Mechanical");
student("Priya", 24, "Information Technology");

// Task 18 — Addition Function

function add(a, b) {
    return a + b;
}

let result = add(10, 20);
console.log(result);

// Task 19 — Salary

function salary(amount) {
    return amount;
}

let result1 = salary(50000);
console.log(result1);

// Task 20 — Bonus Calculator

function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}

let total = bonus(50000, 5000);
console.log(total);

// Task 21 -  Default Parameter

function employee1(name, role = "Developer") {
    console.log("Name:", name);
    console.log("Role:", role);
}

employee1("Arun");
employee1("Priya", "Designer");

// Task 22 — Named Function

function square(number) {
    return number * number;
}

let result2 = square(5);
console.log(result2);

// Task 23 — Anonymous Function

let calculate = function (a, b) {
    return a + b;
};

let result3 = calculate(10, 20);
console.log(result3);

// Task 24 — Arrow Function

let multiply = (a, b) => {
    return a * b;
};

let result4 = multiply(5, 4);
console.log(result4);

// Task 25 — Predict the Output

function test() {
    var a = 10;
    let b = 20;
    const c = 30;

    if (true) {
        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30
    }

    console.log(a); // 10
    console.log(b); // ReferenceError
    console.log(c); // ReferenceError
}

test();

// Task 26 — Predict

var a1;

console.log(a1);

a1 = 10;

// Task 27
console.log
try {
    console.log(b);
    let b = 20;
} catch (e) {
    console.log(e.message); // Cannot access 'b' before initialization
}


// Task 28

console.log
try {
    console.log(c);
    const c = 30;
} catch (e) {
    console.log(e.message); // Cannot access 'c' before initialization
}

// Task 29 — Self Invoking Function
// IIFE 1: Immediately prints a message
(function () {
    console.log("Welcome to JavaScript");
})();

// IIFE 2: Accepts product and disscount
(function (product, discount) {
    console.log("product:", product);
    console.log("Discount:", discount + "%");
})("Laptopa", 10);

// Task 30 Callback / Higher-Order Function

function welcome() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcome);

// Task 31 — Cashback

function* casback() {
    yield "10% casback";
    yield "20% casback";
    yield "30% casback";
    yield "Better luck next time";
}

let result5 = casback();

console.log(result5.next().value);
console.log(result5.next().value);
console.log(result5.next().value);
console.log(result5.next().value);

// 🏆 FINAL MINI PROJECT
// Task 32 — Employee Management Console
// Employee data
let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Kumar",
        age: 28,
        department: "Finance",
        role: "Accountant",
        salary: 45000
    }
];


// 1. for...of
console.log("1. Employee Details");

for (let employee of employees) {
    console.log(employee);
}


// 2. for...in
console.log("2. Keys and Values");

for (let employee of employees) {
    for (let key in employee) {
        console.log(key + ":", employee[key]);
    }
    console.log("----------------");
}


// 3 & 4. Function with parameters
function displayEmployee(name, age, department, role, salary) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);
}

console.log("3 & 4. Function");

for (let employee of employees) {
    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );
}


// 5. Function returning salary

function getSalary(emp) {
    return emp.salary;
}
console.log("5. Salary");
for (let emp of employees) {
    console.log(emp.name, "->", getSalary(emp));
}

// 6. Condition
console.log("6. Salary Condition");

for (let employee of employees) {
    if (employee.salary >= 40000) {
        console.log(employee.name + " has salary >= 40000");
    }
}


// 7. Arrow function
let calculateBonus = (salary) => salary * 0.10;

console.log("7. Bonus Calculation");
console.log("Bonus:", calculateBonus(50000));


// 8. Generator
function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

console.log("8. Employee Benefits");

let employeeBenefits = benefits();

console.log(employeeBenefits.next().value);
console.log(employeeBenefits.next().value);
console.log(employeeBenefits.next().value);
console.log(employeeBenefits.next().value);