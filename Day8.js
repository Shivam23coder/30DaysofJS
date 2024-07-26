// Day 8: ES6+ Features
// Tasks/Activities:
// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let names = "Rohan";
let age = 20;

let string = `My name is ${names} and I am ${age} years old.`;
console.log(string);


// Task 2: Creste a multi-line string using template literals and log it to the console.
string = `My name is Shivam.
I pursue Btech in NIT KKR.`
console.log(string);

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let array = [10,15,20,25,30];

let [idx0,idx1] = array;

console.log(idx0," ",idx1);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let book = {'title':'Physics','author':'RL Sharma'};

let {title,author}= book;
console.log(title," ",author);

// Activity 3: Spread and Rest Operators
// Task 3: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const existingArray = [1, 2, 3];
const newArray = [...existingArray, 4, 5, 6];
console.log(newArray);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

const result = sumAll(1, 2, 3, 4, 5);
console.log(result);

// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function fun(a,b = 2){
    return a*b;
}

let c = fun(5);
let d = fun(5,4);
console.log(c,d);

// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
 names = "John";
 age = 30;

let person = {
    names,
    age,

    // Method definition shorthand
    greet() {
        console.log(`My name is ${this.names} and I am ${this.age} years old.`);
    },

    ['favoriteColor']: 'blue'
};
console.log(person);
person.greet();


// Task 9: Create an object with computed property names based on variables and log the object to the console.
let property1 = "name";
let property2 = "age";
let property3 = "job"

person = {
    [property1]: "Ramesh",
    [property2]: 25,
    [property3]: "Soldier"
};
console.log(person);