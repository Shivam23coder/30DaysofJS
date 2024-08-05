// Activity 1: Basic Error Handiing with Try-Catch
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function fun1(){
    try {
        throw new Error("Error detected");        
    } catch (error) {
        console.log(error.message);
        
    }
}

fun1();
// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error
function fun2(num1,num2){
    try{
       let num3 = num1/num2;
       return num3;
    }
    catch(error){
        console.log(error);
    }
}
let num1 = 10;
let num2 = 0;
console.log(fun2(num1,num2));

// Activity 2: Finally Block
// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow
function fun3(num1,num2){
    try{
       let num3 = num1/num2;
       return num3;
    }
    catch(error){
        console.log(error);
    }finally{
        console.log("Finally executed");
    }
}
num1 =5;
num2 = 4;

// Activity 1: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in Error class, Throw an instance of this custom error in a function and handle it using a try-catch block.
class customerr extends Error{
    constructor(message){
        super(message);
        this.name = this.constructor.name;   //changes the name of error to class name
    }
}
function fun4(){
    try {
        throw new customerr("This is custom error");
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}

fun4();

//  Task 5: Write a function that validates user input (e. g., checking if a string is not empty) and throws a custom error of the validation fails. Handle the custom error using a try-catch block.
class customerr2 extends Error{
    constructor(message){
        super(message);
        this.name = this.constructor.name;   //changes the name of error to class name
    }
}
function fun5(str){
    try {
        if(str ==="")
        throw new customerr2("String is empty");
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}

let str1 = ""
fun5(str1);


// Activity 4: Error Handling in Promises
// Task 6: Create a promise that randomly resolves or rejects. Use catch() to handle the rejection and log an appropriate message to the console 
function randomPromise() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() >= 0.5; // Randomly choose true or false
        setTimeout(() => {
            if (isSuccess) {
                resolve("Promise resolved successfully!");
            } else {
                reject(new Error("Promise rejected!"));
            }
        }, 1000); // Simulate asynchronous operation with a 1-second delay
    });
}

randomPromise()
    .then(response => {
        console.log(response); // This will log if the promise resolves
    })
    .catch(error => {
        console.error(error.message); // This will log if the promise rejects
    });


// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message
async function fun7(){
    try {
        return new Promise(()=>{
        
        });
    } catch (error) {
        
    }
}


// Activity 5: Graceful Error Handling in Fetch
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using catch(). Log an appropriate error message to the console.
const invalidUrl = "https://invalid-url.com/api/data";

function fetchData() {
    fetch(invalidUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(`There was a problem with the fetch operation: ${error.message}`);
        });
}

fetchData();

// Task 9: Use the fetch API to request data from an Invalid URL, within an async function and handle the error using try-catch. Log an appropriate error message.
// const invalidUrl = "https://invalid-url.com/api/data";

async function fetchData() {
    try {
        const response = await fetch(invalidUrl);
        
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(`There was a problem with the fetch operation: ${error.message}`);
    }
}

fetchData();
