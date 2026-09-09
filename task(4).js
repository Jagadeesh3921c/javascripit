// Task-1 Variables

// Create Variables
var name = "Jagadeesh";
let age = 26
const city = "Kurnool";
const college = "Svit college";

// Print all values
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("College:", college);

// Change the var value
name = "Ravi";
console.log("changed Name:", name);

// Change the let value
age = 27;
console.log("changed Age:", age);

// Try redeclaring variables

// var can be redeclared
var name = "suresh";
console.log("Redeclared Name:", name);

// Task-2 Printing Statements

// console.log()
console.log("Hello, Javascript!");

// alert()
alert("Welcome to Javascript!");

// confirm()
let result = confirm("Do you like Javascript?");
console.log(result);

// prompt()
let name1 = prompt("What is your name?");
console.log("Hello" + name1);

// document.writeln()
document.writeln("<h1>Welcom to Javascript<h1>");

// Task-3 User Details

let name2 = "Jagadeesh";
let age1 = 26;
let city1 = "Anathapur";
let qualification = "B.Tech";

console.log("Name:", name2);
console.log("Age:", age1);
console.log("city:", city1);
console.log("Qualification:", qualification);

// Task-4 Find Data Types

let text = "Javascript";
let wholeNumber = 100;
let decimalNumber = 99.5;
let truevalue = true;
let falsevalue = false;
let undenfinedvalue = undefined;
let nullvalue = null;

console.log(text, typeof text);
console.log(wholeNumber, typeof wholenumber);
console.log(decimalNumber, typeof decimalNumber);
console.log(truevalue, typeof truevalue);
console.log(falsevalue, typeof falsevalue);
console.log(undenfinedvalue, typeof undenfinedvalue);
console.log(nullvalue, typeof nullvalue);

// Task-5 Student Array

let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

console.log("First student:", students[0]);
console.log("second student:", students[1]);
console.log("Last student:", students[students.length - 1]);
console.log("Total students:", students.length);

// Task-6 Employee Object

let employee = {
    name: "Abhiram",
    age: 25,
    role: "Web Developer",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    isWorking: true,
    qualification: ["B.Tech", "M.Tech"]
};

console.log("Employee name:", employee.name);
console.log("Age:", employee.age);
console.log("Role:", employee.role);
console.log("First skill:", employee.skills[0]);
console.log("Last qualification:", employee.qualification[employee.qualification.length - 1]);
console.log("Working status:", employee.isWorking);

// Task-7  Calculator

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// Task-8 Shopping Bill

let shirt = 999
let pant = 1499
let shoes = 1999
let bag = 899

let total = shirt + pant + shoes + bag;

console.log("Total price:", total);

// Task-9 Increment & Decrement

let a1 = 10;
let b1 = a1++;

console.log(a1);
console.log(b1);


let a2 = 10;
let b2 = ++a2;

console.log(a2);
console.log(b2);


let a3 = 10;
let b3 = a3--;

console.log(a3);
console.log(b3);


let a4 = 10;
let b4 = --a4;

console.log(a4);
console.log(b4);

// Task-10 Assignment Operator Task

let num = 10;
num += 5;
console.log("num += 5:", num);

num = 10;
num -= 3;
console.log("num -=3:", num);

num = 10;
num *= 2;
console.log("num *= 2:", num);

num = 10;
num /= 4;
console.log("num /=4:", num);

num = 10;
num %= 3;
console.log("num %= 3:", num);

num = 10;
num **= 2;
console.log("num **= 2:", num);

// Task-11  Find Output

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);

console.log(5 == "5");
console.log(5 === "5");

console.log(10 != "10");
console.log(10 !== "10");

// Task-12 AND

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Task-13 OR

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Task-14 NOT

console.log(!true);
console.log(!false);
console.log(!(5 > 10));
console.log(!(10 > 5));

// Task-15 Combination

console.log(5 == "5" && !(5 === 5) || 6 > 7);

console.log(10 > 5 && 8 < 12 || 4 === "4");

console.log(7 === 7 && 10 != "10" || 5 >= 5);

console.log(15 < 10 || 20 > 15 && 5 == "5");

// Task-16 Voting

let age2 = 20;

let result1 = age2 >= 18 ? "Eligible to vote" : "Not eligible";

console.log(result1);

// Task-17 Password

let password = true;

let message = password ? "Login successful" : "Wrong password";

console.log(message);

// Task-18 User Introduction

// Using+

let name3 = "Jagadeesh";
let age3 = 27;
let city3 = "Anathapur";

console.log("My name is" + name3 + ". I am" + age3 + "years old. I live in" + city3 + ".");

// Using Template Literals ${}

let name4 = "Naveen";
let age4 = 25;
let city4 = "Trichy";

console.log(`My name is ${name}. I am ${age4} years old. I live in ${city4}.`);

// Task-19 String Conversion

let a5 = String(100);
let b5 = String(true);
let c = String(undefined);
let d = String(null);
let e = String([1, 2]);

console.log(a5, typeof a5);
console.log(b5, typeof b5);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);

// Task-20 Number Conversion

console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));

// Task-21 Boolen Conversion

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));

// Task-22 Voting Eligibility

let Age = Number(prompt("What is your age?"));

if (Age >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}

// Task-23 Positive Or Negative

let num1 = prompt("Enter a number");

num1 = Number(num1);

if (num1 > 0) {
    console.log("Positive");
} else if (num1 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Task-24 Grade System

let marks = Number(prompt("Enter your marks:"));

if (marks >= 90 && marks <= 100) {
    console.log("A Grade");
} else if (marks >= 80 && marks <= 89) {
    console.log("B Grade");
} else if (marks >= 70 && marks <= 79) {
    console.log("C Grade");
} else if (marks >= 60 && marks <= 69) {
    console.log("D Grade");
} else {
    console.log("Fail");
}

// Task-25 Job Eligiblity

let age5 = Number(prompt("Enter your age:"));
let height = Number(prompt("Enter your height:"));
let weight = Number(prompt("Enter your weight:"));

if (age5 >= 18) {
    if (height >= 160) {
        if (weight >= 60) {
            console.log("Congratulations! you are selected");
        } else {
            console.log("yoy are not selected because your weight is below 60");

        }
    } else {
        console.log("you are not selected because your height is below 160");
    }
} else {
    console.log("you are not selected because your age is below 18");
}

// Task-26 Traffic Light

let color = prompt("Enter traffic light color:");

switch (color.toLowerCase()) {
    case "red":
        console.log("stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}


// Task-27 Day

let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");

}

// FINAL MINI PROJECT
// Task-28 Student Result System
// Get user details
let name5 = prompt("Enter your name:");
let age6 = Number(prompt("Enter your age6:"));
let city6 = prompt("Enter your city:");

// Get Marks
let tamil = Number(prompt("Enter Tamil marks:"));
let english = Number(prompt("Enter English marks:"));
let maths = Number(prompt("Enter Maths marks:"));

// Calculate
let total1 = tamil + english + maths;
let average = total1 / 3;

// Check result
let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}

// Check voting
let voting;

if (age >= 18) {
    voting = "Eligible";
} else {
    voting = "Not Eligible";
}

// Display
console.log(`
    Name: ${name5}
    Age: ${age6}
    City: ${city6}
    Tamil: ${tamil}
    English: ${english}
    Maths: ${maths}
    Total: ${total1}
    Average: ${average.toFixed(2)}
    Grade: ${grade}
    Voting: ${voting}
    `);







