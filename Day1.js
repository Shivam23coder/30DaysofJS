var num = 10;
console.log(num);  //output:- 10

// task 2
let str = "name";
console.log(str);

// Activty 2: Constant declaration
// task 3
const bool_val = true;
console.log(bool_val);  // output: true

//Activity 3: Data types
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let num1=100;
console.log(typeof(num1));
let str1="Hello its me!";
console.log(typeof(str1));
let bool1=false;
console.log(bool1);
let obj1={
      name_obj: "John Doe",
      age_obj: 30,
      profession_obj: "Developer",};
console.log(typeof(obj1));
let arr1=[1,2,3,4,5];
console.log(typeof(arr1));

//Activity 4:
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let fruit="Mango"; //Initial declaration
console.log(fruit)

fruit="Banana"  //Reassignment
console.log(fruit)

//Activity 5:
//Task 6: Try reassigning a variable declared with const and observe the error.

const subject = "maths";
console.log(subject);

subject = "python prog.";
console.log(subject); //Typeerror : Assignment to constant variable

// Feature Request

// 1. Variable Types Console Log: Write a script that declares varibles of diffeent datatypes and logs both the value and the type of each variable to the console.
let myNum=456;
console.log(myNum, typeof myNum);
let myString="This is my Sentence";
console.log(myString, typeof myString);
let myBool=false;
console.log(myBool, typeof myBool);
let myArr=['This', 'is', false, '1', 1, 'One'];
console.log(myArr, typeof myArr);
let myObj= {"objName": "myObj"};
console.log(myObj, typeof myObj);

// 2. Reassignment Demo: Create a script that demonstatres the difference in between let and const when it comes to reassignment.

let radius=1;
console.log(radius);
radius=10;
console.log(radius)
// let does not give any error and so  can be used for reassignment

const pi=3.14;
console.log(pi);
pi=3; //TypeError: Assignment to constant variable.
console.log(pi); // Variables defined with const cannot be Redeclared 