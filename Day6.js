//Activity 1: Array Creation and Access
//task1: Create an array of numbers 1 to 5 and log to console
let array = [1,2,3,4,5];
console.log(array);

// Task 2: Acess the first and last elements of the array and log them to the console
console.log(array[0]," ",array[array.length-1]);

// Activity 2: Array Methods (Basic)
// Task 3 Use the push method to add a new number to the end of the array and log the updated array.
array.push(10);
console.log(array);

// Task 4. Use the pop method to remove the last element from the array and log the updated array
array.pop();
console.log(array);

// Task 5: Use the shift method to remove the first element from the array and log the updated array
let new_arr = array.shift();
console.log(new_arr);
console.log(array);

// Task 6. Use the unshift method to add a new number to the beginning of the array and log the updated array
array.unshift(11);
console.log(array);

// Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
new_arr = array.map(function(num){
    return num*2;
});
console.log(new_arr);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array
new_arr = array.filter(function(num){
    if(num % 2 == 0)
        return num;
})
console.log(new_arr);
// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const sum = array.reduce(function(accumulator, currentVal){
    return accumulator + currentVal;
},0);
console.log(sum);

// Activity 4. Array Iteration
// Task 10: Use a for loop to iterate over the array and ing each element to the console.
for(let x of (array))
    console.log(x);

// Task 11: Use the forEach method to Iterate over the array and log each element to the console.
array.forEach(element => {
    console.log(element);
});

// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
array = [[1,2,3],[4,5,6]];
console.log(array);

// Task 13: Access and log a specific element from the two-dimensional array
console.log(array[1][1]);


// Feature Request:

// 1. Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift and ansh metod

// 2. Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data. 3. Array Iteration Script: Wite a script that iterates over an array using both for loop and forfach method and logs each element.

// 4. Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array

// Achievement:

// By the end of these activities, students will.

// Create and maniputate arrays using various methods Transform and aggregate array data using map, filter, and reduce.

// Iterate over arrays using toops and iteration methods.

// Understand
