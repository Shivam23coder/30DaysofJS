// Tasks/Activities

// Activity1:
// Task1: WAF to check if a Node. is even or odd and log the result to console
function odd_even(num){
    if(num % 2 == 0)
        console.log("Even");
    else
        console.log("Odd");
}
odd_even(5);    //output : Odd
// Task2: WAF to calculate the square of a number and return the result
function square(num){
    return num*num;
}
let num1= square(4);
console.log(num1);

// Activity2:
// task3:WAF expression to find maximum of 2 no and log the result to console
function maximum(num1,num2){
    if(num1 > num2)
        console.log(num1," is greater than ",num2);
    else
        console.log(num2," is greater than ",num1);
}
maximum(5,11);

// task4: WAF to concatenate two string and return the result
function concat_str(str1,str2){
    return str1 + str2;
}

const newstr = concat_str("my name is"," shivam");
console.log(newstr);    //Output: my name is shivam

// Activity3: Arrow function
// Task5: WA arrow function to calc sum of two no.s and return result
const res = (a,b)=>{
    return a+b;
}
const a = 5;
const b = 7;
console.log(res(a,b));  //Output: 12

// Task6: WAAF to check if a string contains a specific character and result  a boolean value
bool = (str,a)=>{
    for(let x in str){
        if(str[x] != a)
            continue;
        else
            return true;
    }
    return false;
}

console.log(bool("shivam","z"));    //Output: false

// Activity 3: Function parameters and default values
// task7: WAF that tak two args and their product.Provide a default value fpr second parameter.

function product_(num1,num2 =5){
    console.log(num1*num2); //Output: 10
}
product_(2);

// task8 : WAF that takes a preson name and age and returns a greeating message.Provide a default value for age.
function greating(name,age){
    return `Hello ${name}, your age is ${age}`;
}
const name1= "Shivam";
const age = 21;
console.log(greating(name1,age));

// Activity 4: Function Parameters and default Values
// Task 9:Write a higher-order function that takes a function and a number, and calls the function that many times.

function repeat(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}

// Example usage
const someStr = () => {
    console.log('This is javascript!');
};

// Call the someStr function 3 times
repeat(someStr, 3);

//task10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function compose(fun1, fun2, val) {
    return fun2(fun1(val));
}

// Example usage
const addFive = (x) => x + 5;
const multiplyByTwo = (x) => x * 2;

// Apply addFive to the value, then apply multiplyByTwo to the result
const result = compose(addFive, multiplyByTwo, 10);

console.log(result); // Output: 30

    
