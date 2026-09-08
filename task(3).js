//  Task 1 — var, let, const

// 1. Create variables
var studentName = "Naveen";
let studentAge = 22;
const collegeName = "Vikas College";

// Print all three values
console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("College Name:", collegeName);

// 2. Change the var value
studentName = "Jagadeesh";
console.log("Changed Name:", studentName);

// 3. Change the let value
studentAge = 23;
console.log("Changed Age:", studentAge);

// 4. Try changing the const value
collegeName1 = "narayan college";
// Error: Assignment to constant variable

// 5. Try redeclaring the var variable
var studentName = "Kumar";
console.log("Redeclared Name:", studentName);

// 6. Try redeclaring the let variable
let studentAge1 = 24;
// Error: Identifier 'studentAge' has already been declared

// Task 2 — User Information

var name = prompt("Enter your name:");
var age = prompt("Enter your age:");
var city = prompt("Enter your city:");

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);

// Task 3 — Welcome Message

var name = prompt("Enter your name:");

alert("Welcome " + name + "!");

// Task 4 — Age Calculator

var birthYear = prompt("Enter your birth year:");

var currentYear = 2026;

var age = currentYear - birthYear;

console.log("Birth Year:", birthYear);
console.log("Age:", age);

// Task 5 — Identify Data Types

var message = "Hello";
var number = 100;
var decimal = 25.5;
var isTrue = true;
var isFalse = false;
var notDefined = undefined;
var emptyValue = null;

console.log(typeof message);
console.log(typeof number);
console.log(typeof decimal);
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log(typeof notDefined);
console.log(typeof emptyValue);

// Task 6 — Student Data

var student = {
    name: "Naveen",
    age: 22,
    city: "Trichy",
    qualification: "B.Tech",
    isStudent: true
};

// 1. Print complete object
console.log(student);

// 2. Print Name
console.log("Name:", student.name);

// 3. Print Age
console.log("Age:", student.age);

// 4. Print Qualification
console.log("Qualification:", student.qualification);

// 5. Print isStudent
console.log("Is Student:", student.isStudent);

// Task 7 — Fruit Array

var fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes", "Papaya"];

// 1. First fruit
console.log("First fruit:", fruits[0]);

// 2. Second fruit
console.log("Second fruit:", fruits[1]);

// 3. Last fruit
console.log("Last fruit:", fruits[fruits.length - 1]);

// 4. Total number of fruits
console.log("Total fruits:", fruits.length);

// Task 8 — Basic Calculator

let a = 20;
let b = 5;

// Addition
console.log("Addition:", a + b);

// Subtraction
console.log("Subtraction:", a - b);

// Multiplication
console.log("Multiplication:", a * b);

// Division
console.log("Division:", a / b);

// Modulus
console.log("Modulus:", a % b);

// Exponentiation
console.log("Exponentiation:", a ** b);

// Task 9 — Shopping Bill

var shirt = 999;
var pant = 1499;
var shoes = 1999;

var total = shirt + pant + shoes;

console.log("Total =", total);

//Task 10 — Simple Marks Calculation

var tamil = 80;
var english = 75;
var maths = 90;

// Calculate total marks
var total = tamil + english + maths;

// Calculate average marks
var average = total / 3;

console.log("Total Marks:", total);
console.log("Average Marks:", average);

// Task 11 — Post Increment

let a1 = 10;

let b1 = a1++;

console.log(a1);
console.log(b1);

// Task 12 — Pre Increment

let a2 = 10;

let b2 = ++a2;

console.log(a2);
console.log(b2);

// Task 13 — Post Decrement

let a3 = 20;

let b3 = a3--;

console.log(a3);
console.log(b3);

// Task 14 — Pre Decrement

let a4 = 20;

let b4 = --a4;

console.log(a4);
console.log(b4);

// Task 15 — Find the Final Values

let a5 = 5;

let b5 = a5++;

let c = ++a5;

let d = b5--;

console.log(a5);
console.log(b5);
console.log(c);
console.log(d);

// Task 16 — Assignment Operators

// +=
let num = 10;
num += 5;
console.log("+= :", num); // 15

// -=
num = 10;
num -= 5;
console.log("-= :", num); // 5

// *=
num = 10;
num *= 5;
console.log("*= :", num); // 50

// /=
num = 10;
num /= 5;
console.log("/= :", num); // 2

// %=
num = 10;
num %= 5;
console.log("%= :", num); // 0

// **=
num = 10;
num **= 5;
console.log("**= :", num); // 100000

//  Task 17 — Mini Student Profile

// Variables
var name = "Naveen";
var age = 22;
var city = "Trichy";
var college = "Vikas College";

// Array - 5 favorite subjects
var subjects = ["Tamil", "English", "Maths", "Science", "Computer"];

// Object
var student = {
    name: name,
    age: age,
    city: city,
    subjects: subjects,
    isStudent: true
};

// 1. Student name
console.log("Student Name:", student.name);

// 2. Student age
console.log("Student Age:", student.age);

// 3. City
console.log("City:", student.city);

// 4. First subject
console.log("First Subject:", student.subjects[0]);

// 5. Last subject
console.log("Last Subject:", student.subjects[student.subjects.length - 1]);

// 6. Total subjects
console.log("Total Subjects:", student.subjects.length);

// 7. Complete object
console.log("Complete Object:", student);

// Final Challenge — User + Calculator

var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");

// Convert prompt values to numbers
num1 = Number(num1);
num2 = Number(num2);

// Arithmetic operations
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Power:", num1 ** num2);















