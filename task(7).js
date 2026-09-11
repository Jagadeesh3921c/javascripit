// Task 1 — Student Result Analyzer

function studentResult(name, department, mark1, mark2, mark3, mark4, mark5){
    let total = mark1 + mark2 + mark3 + mark4 + mark5;
    let avg = total/5;
    
    let result;
    if(avg >= 50){
        result = "Pass";
    }else{
        result = "Fail";
    }

    
    if(avg >= 90){
        grade = "A";
    }else if(avg >= 75){
        grade = "B";
    }else if(avg >= 60){
        grade = "C";
    }else if(avg >= 50){
        grade = "D";
    }else{
        grade = "Fail";
    }
    console.log("Name :", name);
    console.log("Department :", department);
    console.log("Total Marks :", total);
    console.log("Average :", avg);
    console.log("Result :", result);
    console.log("Grade :", grade);
 }
 studentResult("Jagadeesh", "EEE", 90, 85, 85, 90, 95);

// Task 2 — Employee Salary Calculator

let employee = {
    name: "Jagadeesh",
    role: "Developer",
    salary: 50000,
    experience: 2
};

function calculateSalary(employee) {
    let basicSalary = employee.salary;
    let bonus;

    if (employee.experience >=5) {
        bonus = basicSalary * 15 / 100;
    } else if (employee.experience >= 2) {

        bonus = basicSalary * 10 / 100;
    } else {
        bonus = 0;
    }

    let finalSalary = basicSalary + bonus;

    console.log("Employee Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}

calculateSalary(employee);

// Task 3 — Product Filter System

let products = [
    { name:  "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "shoes", price: 2500, category: "fashion" },
    { name: "phone", price:30000, category: "electronics" }
];

// 1. products above ₹2,000
let above2000 = products.filter(product => product.price > 2000);
console.log("Products above ₹2,000:", above2000);

//2.Get Only electronics
let electronics = products.filter(product => product.category === "electronics");
console.log("Electronics:", electronics);

//3.Find the first product below ₹1,000
let below1000 = products.find(product => product.price < 1000);
console.log("First product below ₹1,000:", below1000);

// 4.Calculate total price of all products
let totalPrice = products.reduce((total, product) => {
    return total + product.price;
}, 0);

// 5.Check whether any product costs more than ₹50,000
let expensiveProduct = products.some(product => product.price > 50000);
console.log("Any product above ₹50,000:", expensiveProduct);

//6.Check whether every product has a price above ₹500
let allabove500 = products.every(product => product.price > 500);
console.log("Every product above ₹500:", allabove500);

// Task 4 — Employee Management

let employees = [
    {
        id: 101,
        name: "Jagadeesh",
        role: "Frontend Developer",
        salary: 40000
    },
    {
       id: 102,
       name: "Charitha",
       role: "Backend Developer",
       salary: 45000
    },
    {
        id: 103,
        name: "Arun",
        role: "UI/UX Designer",
        salary: 55000
    },
    {
        id: 104,
        name: "Rahul",
        role: "Full Stack Developer",
        salary: 60000
    },
     {
        id: 105,
        name: "Divya",
        role: "HR Executive",
        salary: 35000
    },
    {
        id: 106,
        name: "Karthi",
        role: "Software Engineer",
        salary: 60000
    }
];

// 1.Display all employee names
let names = employees.map(employee => employee.name);
console.log("Employee Names:", names);

// 2.Display employees earning above ₹40,000
let highSalaryEmployees = employees.filter(employee => employee.salary > 40000);
console.log("Employees earning above ₹40,000:", highSalaryEmployees);

// 3.Find employee with ID 103
let employee103 = employees.find(employee => employee.id === 103);
console.log("Employee with ID 103:", employee103);

// 4.Calculate total salary
let totalSalary = employees.reduce((total,employee) =>{
    return total + employee.salary;
}, 0);

// 5.Find highest-paid employee
let highestPaid = employees.reduce((highest, person) => {
    return person.salary > highest.salary ? person : highest;
});
console.log("Highest Paid Employee :", highestPaid);

// 6.Sort employees from highest salary to lowest
let sortedEmployees = [...employees].sort((a, b) => {
    return b.salary - a.salary;
});
console.log("Employees sorted by salary :", sortedEmployees);

// 7.Create a new array containing only employee names
let nameList = employees.map((person) => {
    return person.name;
});
console.log("Names Only :", nameList);

// Task 5 — Shopping Cart

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

let calculateCart = (cart) => {
    let total = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    let discount = 0;
    if(total > 50000){
        discount = total * 10 / 100;
    }

    let finalAmount = total - discount;
    
    console.log("Total Cart Value :", total);
    console.log("Discount:", discount);
    console.log("Final Payable Amount :", finalAmount);
};
calculateCart(cart);

//Task 6 — Student Search System

let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "priya", age: 22, mark: 92 },
    { name: "karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];

// 1.Display all student names
let studentNames = students.map(student => student.name);
console.log("student Names:", studentNames);

// 2.Display students who scored above 80
let above80 = students.filter(student => student.mark > 80);
console.log("Students above 80:", above80);

//3. Find student named "Priya"
let priya = students.find(student => student.name === "Priya");
console.log("Priya:", priya);

//4. Calculate average mark
let totalMarks = students.reduce((total, student) => {
    return total + student.mark;
}, 0);

let averageMark = totalMarks / students.length;
console.log("Average Mark:", averageMark);

// 5. Check whether anyone failed
 let anyoneFailed = students.some(student => student.mark < 40);
 console.log("Anyone failed:", anyoneFailed);

 // 6. Check whether everyone scored above 40
 let everyoneAbove40 = students.every(student => student.mark > 40);
 console.log("Everyone scored above 40:", everyoneAbove40);

 // 7. Sort students by marks
let sortedStudents = [...students].sort((a, b) => b.mark - a.mark);
console.log("sorted students:", sortedStudents);

// Task 7 — Array Transformation Challenge

let numbers = [12,5, 8, 21, 44, 7, 30, 50];

// 1.Create a new array containing numbers × 2
let doubledNumbers = numbers.map (num => num * 2);
console.log("Numbers x 2:", doubledNumbers);

// 2.Get only even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// 3. Get numbers greater than 15
let greaterThan15 = numbers.filter(num => num > 15);
console.log("Numbers greater than 15:", greaterThan15);

//4. Find the first number greater than 20
let firstGreaterThan20 = numbers.find(num => num > 20);
console.log("First number greater than 20:", firstGreaterThan20);

// 5. Find total of all numbers
let total = numbers.reduce((sum, num) => sum + sum, 0);
console.log("Total:", total);

// 6. Check whether any number is greater than 40
let anyGreaterThan40 = numbers.some(num => num > 40);
console.log("Any number greater than 40:", anyGreaterThan40);

// 7. Check whether every number is positive
let allPositive = numbers.every(num => num > 0);
console.log("Every number is positive:", allPositive);

// 8.Sort from highest to lowest
let descending = [...numbers].sort((a,b) => b - a);
console.log("Highest to lowest:", descending);

// 8.Task 8 — String Analyzer

let sentence = prompt("Enter a sentence:");

// 1. Total characters
console.log("Total characters:", sentence.length);

// 2. Uppercase sentence
console.log("Uppercase:", sentence.toUpperCase());

// 3. Lowercase sentence
console.log("Lowercase:", sentence.toLowerCase());

// 4. Whether it contains "JavaScript"
console.log("Contains JavaScript:", sentence.includes("JavaScript"));

// 5. First character
console.log("First character:", sentence.slice(0, 1));

// 6. Last character
console.log("Last character:", sentence.slice(-1));

// 7. Number of words
let words = sentence.split("");
console.log("Number of words:", words.length);

// 8. Replace "JavaScript" with "Python"
console.log("Replaced sentence:", sentence.replace("JavaScript", "Python"));

// 9. Convert sentence into an array using split()
console.log("Sentence array:", words);

//🔥 Final Mini Project — Employee Dashboard

let employees1 = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];

// 1. Display all employees.
console.log("All Employees:");
console.log(employees1);

// 2. Search employee by name.
let searchName = "Priya";

let searchedEmployee = employees1.find(employee => employee.name.toLowerCase() === searchName.toLowerCase);

console.log("Search Result:", searchedEmployee);

// 3. Filter employees by department.
let department = "IT";

let departmentEmployees1 = employees1.filter(employee => employee.department === department);

console.log("IT Employees:", departmentEmployees1);

// 4. Show employees earning more than ₹50,000.
let highSalaryEmployees1 = employees1.filter(employee => employee.salary >50000);

console.log("Salary above ₹50,000:", highSalaryEmployees1);

// 5. Calculate total company salary.
let totalSalary1 = employees1.reduce((total, employee) => total + employee.salary, 0);

console.log("Total Company Salary: ₹" + totalSalary1);

// 6. Find the highest-paid employee.
let highestPaid1 = employees1.reduce((highest, employee) => employee.salary > highest.salary ? employee : highest);

console.log("Highest Paid Employee:", highestPaid1);

// 7. Find employees with more than 3 years' experience.
let experiencsdEmployees1 = employees1.filter(employee => employee.experience > 3);

console.log("Employees with more than 3 years:", experiencsdEmployees1);

// 8.  Sorting
// Sort employees by salary:
//Low → High

let lowToHigh = [...employees1].sort((a, b) => a.salary - b.salary);

console.log("Salary Low -> High:", lowToHigh);

// High → Low

let highToLow = [...employees1].sort((a, b) => b.salary - a.salary);

console.log("Salary High -> Low:", highToLow);

// 9. Statistics

let totalEmployees1 = employees1.length;

let averageSalary = totalSalary1 / totalEmployees1;

console.log("----- Statistics -----");
console.log("Total Employees:", totalEmployees1);
console.log("Total Salary: ₹" + totalSalary1);
console.log("Highest Salary: ₹" + highestPaid1.salary);
console.log("Average Salary: ₹" + Math.round(averageSalary));






    
