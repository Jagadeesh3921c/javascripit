// ============ Variables & Data Types ============

//Q1: What is the difference between var, let, and const?

// var is function scoped and can be redeclared
// let is blocknscoped and cannot be redeclared in the same scope
// const is block scoped and cannot be redeclared or reassigned

// Q2: Can you re-declare a variable with var? What about let and const?

// var-yes
// Let-No
//const-No


//  Q3: What is the output of this code?

// var x = 5;
// let y = 10;
// const z = 15;

// x = 20;
// y = 25;
// z = 30;

// console.log(x, y, z);

//There is a error because we reinitialize const z which is not possible.

// Q4: What is the difference between declaring and initializing a variable?

//1. Declaration:Declaration means creating a variable and giving it a name, but not necessarily giving it a value.
//2. Initialization:Initialization means giving a variable its first value when it is created.

//  Q5: What will be the output?

//let a;
// console.log(a); // Undefined

// Q6: What is hoisting? Give an example.

// Hoisting means accesing the variable first, and then declaring the variable is known as hoisting.
// which may lead to reference error for let and const type and undefined error for var type.
// console.log(a)
// let a=10

// Q7: What is the difference between null and undefined?

//undefined:undefined means a variable has been declared,but no value has been assigned.
//Null:Null means you intentionally set the value to nothing/empty.

//  Q8: What will be the output?

//console.log(typeof null); //object
//console.log(typeof undefined); //Undefined
//console.log(typeof []); //object
//console.log(typeof {}); //object

// Q9: What is the difference between == and ===?

// == -> its loosly equal check the only both side values and not data type.
// ===  -> its strictly equal check both value and datatypes.

// Q10: What is the difference between ++i and i++?

//++i -> pre increement its increement its value by 1
//i++ ->post increement its increement its value by 1

//  Q11: What will be the output?

//let x = 10;
//let y = "5";
// console.log(x + y); // concatinate 10 + 5= 105
// console.log(x - y); // 5
// console.log(x * y);// 50
// console.log(x / y);// 2

// Q12: What are logical operators? Explain with examples

// AND -> &&  if any value false then o/p is false.
// OR -> ||  if any value is true means then o/p is true.
// NOT -> ! opposite of the the value.

// Q13: What will be the output?


// console.log(5 > 3 && 10 > 5); 
// //true && true
// // true
// console.log(5 > 10 || 10 > 5);
// // false || true
//  // true
// console.log(!(5 > 3));
// // !true
// // false

//  Q14: What is the ternary operator? Give an example.

// It is a short form of if-else.

// condition ? trueValue : falseValue

let age1 = 20;
let result1 = age1 >= 18 ? "Adult" : "Minor";
console.log(result1);
// Output: Adult

// Q15: What is the difference between implicit and explicit type casting?

// Implicit type casting is automatically done by JavaScript.
// Explicit type casting is manually done by the programmer.

// Example:

console.log("5" + 2);       // 52 - implicit conversion
console.log(Number("5"));   // 5  - explicit conversion

//  Q16: What will be the output?

console.log(Number("123"));    // 123
console.log(Number("hello"));  // NaN
console.log(Number(true));     // 1
console.log(Number(false));    // 0
console.log(Boolean(0));       // false
console.log(Boolean("hello")); // true

// Q17: What is NaN? Give an example.

// NaN means "Not a Number".
// It occurs when a value cannot be converted into a valid number.

// Example:
let number = Number("hello");
console.log(number);
// Output: NaN


// Q18: What is the difference between if-else and switch?

// if-else is useful for conditions and ranges.
// switch is useful for checking multiple fixed values.

//  Q19: What will be the output?

let age2 = 20;

if (age2 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Output: Adult

//Q20: What is nested if? Give an example.

// An if statement inside another if statement.

// Example:
let age3 = 20;

if (age3 >= 18) {

    if (age3 >= 21) {
        console.log("Eligible");
    } else {
        console.log("Not eligible");
    }

}

// Q21: Write a program to check if a number is even or odd using ternary operator.

let number1 = 7;

let evenOdd = number1 % 2 === 0 ? "Even" : "Odd";

console.log(evenOdd);
// Output: Odd

//  Q22: What is the difference between while and do-while?

// while checks the condition before executing the block.
// do-while executes the block first and checks the condition later.
// Therefore, do-while executes at least once.

//  Q23: What will be the output?

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5

//  Q24: What is the difference between for-of and for-in?

// for-of is used to get values from arrays or strings.
// for-in is used to get keys/indexes from objects or arrays.

// Example:
let fruits = ["Apple", "Banana"];

for (let fruit of fruits) {
    console.log(fruit);
}
// Apple
// Banana

for (let key in fruits) {
    console.log(key);
}
// 0
// 1

//  Q25: Write a program to find sum of numbers from 1 to 100.

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log(sum);
// Output: 5050

// Q26: What is the difference between slice and splice?

// slice() does NOT change the original array.
// splice() changes the original array.

// Example:

let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.slice(1, 3));
// Output: [2, 3]
// Original array remains unchanged.

arr1.splice(1, 2);
console.log(arr1);
// Output: [1, 4, 5]
// Original array is changed.

// Q27: What will be the output?

let arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();

console.log(arr);

// Output:
// [1, 2, 3]



//  Q28: What is the difference between function declaration and function expression?

// Function declaration:
function add(a, b) {
    return a + b;
}

// Function expression:
let addition = function (a, b) {
    return a + b;
};

// Function declarations can be called before their declaration.
// Function expressions cannot be used before they are initialized.

//  Q29: What is an arrow function? Give an example.

// Arrow function is a shorter way to write a function.
// Example:

let multiply = (a, b) => {
    return a * b;
};

console.log(multiply(5, 2));
// Output: 10

// Q30: What will be the output?

function greet() {
    return "Hello";
}

let message = greet();

console.log(message);

// Output:
// Hello


