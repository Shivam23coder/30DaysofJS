// Activity 1: Arithmetic Operations

let a = 50;
let b = 5;
console.log(`Value of a is ${a} and value of b is ${b}`); // Output: Value of a is 50 and value of b is 5

// Task 1: Write a program to add two numbers and log the result to the console.
let sum = a + b;
console.log(`The sum of a and b is ${sum}`); // Output: The sum of a and b is 55

// Task 2: Write a program to subtract two numbers and log the result to the console.
let sub = a - b;
console.log(`The subtraction of a and b is ${sub}`); // Output: The subtraction of a and b is 45

// Task 3: Write a program to multiply two numbers and log the result to the console.
let product = a * b;
console.log(`The product of a and b is ${product}`); // Output: The product of a and b is 250

// Task 4: Write a program to divide two numbers and log the result to the console.
let div = a / b;
console.log(`The division of a and b is ${div}`); // Output: The division of a and b is 10

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let remainder = a % b;
console.log(`The remainder when a is divided by b is ${remainder}`); // Output: The remainder when a is divided by b is 0


// Activity 2: Assignments

let num = 0;
console.log(`Initially: num = ${num}`); // Output: Initially: num = 0

// Task 6: Use += to add a number to a variable and log the result to the console.
num += 7;
console.log(`After add: num = ${num}`); // Output: After add: num = 7

// Task 7: Use -= to subtract a number from a variable and log the result to the console.
num -= 3;
console.log(`After subtraction: num = ${num}`); // Output: After subtraction: num = 4


// Activity 3: Comparisons

let x = 16;
let y = 56;

// Task 8: Write a program to compare two numbers using < and > and log the result to the console.
console.log("Greater than: ", x > y); // Output: Greater than: false
console.log("Smaller than: ", x < y); // Output: Smaller than: true

// Task 9: Write a program to compare two numbers using <= and >= and log the result to the console.
console.log("Greater or equal to: ", x >= y); // Output: Greater or equal to: false
console.log("Smaller or equal to: ", x <= y); // Output: Smaller or equal to: true

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
console.log("Equal to: x == y", x == y); // Output: Equal to: x == y false
console.log("Strictly equal to: x === y", x === y); // Output: Strictly equal to: x === y false


// Activity 4: Logicals

x = 5;
y = 8;
a = 6;
b = 7;

// Task 11: Write a program that uses && to combine two conditions and log the result to the console.
console.log((x < y) && (a < b)); // Output: true

// Task 12: Write a program that uses || to combine two conditions and log the result to the console.
console.log((x < y) || (a > b)); // Output: true

// Task 13: Write a program that uses ! to negate the condition and log the result to the console.
console.log(!(x <= y)); // Output: false


// Activity 5: Ternary

// Task 14: Write a program that uses ternary to check if a number is positive or negative and log the result to the console.
let value = -4;
let result = (value >= 0 ? "positive" : "negative"); // Expression1 is executed when condition is true otherwise Expression2.
console.log("Number is:", result); // Output: Number is: negative


// FEATURE REQUEST:

// 1. Arithmetic operations script

let n = 5;

// Addition
console.log("Addition: n + 2 =", n + 2); // Output: Addition: n + 2 = 7

// Subtraction
console.log("Subtraction: n - 3 =", n - 3); // Output: Subtraction: n - 3 = 2

// Multiplication
console.log("Multiplication: n * 3 =", n * 3); // Output: Multiplication: n * 3 = 15

// Division
console.log("Division: n / 3 =", n / 3); // Output: Division: n / 3 = 1.6666666666666667

// Remainder
console.log("Remainder: n % 3 =", n % 3); // Output: Remainder: n % 3 = 2

// Increment
console.log("Increment: ++n =", ++n); // Output: Increment: ++n = 6

// Decrement
console.log("Decrement: --n =", --n); // Output: Decrement: --n = 5

// Exponentiation
console.log("Exponentiation: n ** 3 =", n ** 3); // Output: Exponentiation: n ** 3 = 125


/// equal to                         // output
console.log("Equal to: 3 == 3 is", 3 == 3); // Equal to: 3 == 3 is true

// not equal
console.log("Not equal to: 3 != 3 is", 3 != 3);  // Not equal to: 3 != 3 is false

// strictly equal to
console.log("Strictly equal to: 2 === '2' is", 2 === '2');  // Strictly equal to: 2 === '2' is false

// greater than 
console.log("Greater than: 3 > 5 is", 3 > 5);  // Greater than: 3 > 5 is false

// less than
console.log("Less than: 3 < 5 is", 3 < 5);  // Less than: 3 < 5 is true

// logical AND
console.log((n < 5) && (n > 0));  // false

// logical OR
console.log((n > 2) || (n > 5));  // true

// logical NOT
console.log(!(n == 3));  // true


// 3. ternary script
n>0 ? console.log(n,"is +ve") : console.log(n,"is -ve");  //output: 10 is positive