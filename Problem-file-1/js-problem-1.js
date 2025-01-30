/* JavaScript Basic Problem Solving */

// problem-01: Create a variable called carName, assign the value Volvo to it.

// answer:
let carName = "Volve";

//Problem-02: On one single line, declare three variables with the following names and values:

//answer:
let firstName = "John ";
let lastName = "Doe"
let age = 35
let fullName = firstName + lastName ;
console.log(fullName);
console.log(`${fullName} age is ${age}`)

//Problem-03 Use the correct assignment operator that will result in x being 50 (same as x = x * y).

//answer:
//if
let x = 10;
let y = 5;
x = x * y // 10 * 5 = 50
console.log(x)

//Problem-04 Use comments to describe the correct data type of the following variables:

//answer:
let length = 16; //data typeof : number
let LastName = "Johnson"; //data typeof: string

const X = {
  firstName: "John",
  lastName: "Doe"
}; //data typeof: object

//Problem-05 Execute the function named myFunction.

//answer:
function myFunction() {
  alert("Hello World");
}
myFunction(); //See the output

//Problem-06 Create an object called person with name = John, age = 50, Then access the object to alert("John is 50").

//answer:
let person = {
  name: "John",
  age: 50,
}
 alert(`${person.name} is ${person.age}`);

//Problem-07 The <button> element should do something when someone clicks on it. Try to fix it!
 
//answer:
//<button onclick="clickMe() ">Click me.</button>;
function clickMe() {
  alert("It was clicked")
}

//Problem-08 Array Related Question
//answer:
//1.Alert the number of items in an array,using the correct array property:
const Cars = ['Volvo', 'Jeep', 'Mercedes'];
alert(`There are ${Cars.length} items in the array `);

//2. Change the first item of Brand to "Ford"
let Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";
console.log(Brand);

//Problem-09 Math Related Problems
//answer:

//1.Use the correct Math method to create a random number.
//Ans:
let RandomNum = Math.random()
console.log(RandomNum);

// 2. Use the correct Math method to return the largest number of 10 and 20.
//Ans:
let LargestNum = Math.max(10, 30);
console.log(LargestNum);

// 3. Use the correct Math method to get the square root of 9.

let squareRoot = Math.sqrt(9);
console.log(squareRoot);

//Problem-10 Comparison operator related problems!
//answer:
//1. Choose the correct comparison operator to alert true, when x1 is greater than y1.
//Ans:
let x1 = 10;
let y1 = 5;
alert(x1 > y1); //ans is true because 10 is greater than 5 
if (x1 > y1) {
  console.log("x1 is greater than y") 
} else {
  console.log("y1 is greater than x1")
}
//2. Choose the correct conditional (ternary) operator to alert "Too young" if less than 18, otherwise alert "Old enough".

//Ans:
let Age = 18
let youngOld = Age <= 18 ? 'Too young' : 'Old enough';
alert(youngOld)
console.log(youngOld);