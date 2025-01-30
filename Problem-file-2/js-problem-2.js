/* JavaScript Basic Problem Solving */

//Problem-1: Write a function to vonvert Celsius to Fahrenheit.

//answer: 
function celsiusToFahrnheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
console.log(celsiusToFahrnheit(0)); //Output: 32
console.log(celsiusToFahrnheit(25)); //Output: 77

//Problem-2: Write a function to check if a number is even. The function should take a single argument, which is  the number to check.
//answer: ....
function IsEven(Num) {
  return Num % 2 === 0;
}
console.log(IsEven(4)); //Output: true
console.log(IsEven(7)); //Output: false

//Problem-3: Write a function to sum two numbers. The function should take two arguments which are the numbers to sum.

//answer:
function Sum(a, b) {
  return a + b;
}
console.log(Sum(3, 4)); // output: 7
console.log(Sum(10, 20)); // output: 30

//Problem-4: Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.

//answer:
function findSmallestNum(arr) {
  return Math.min(...arr);
}
console.log(findSmallestNum([3, 5, 1, 9])); // 1
console.log(findSmallestNum([-1, -5, 0, 10])); // -5

//Problem-5: Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.

//answer:
function conutVowels(str) {
  let Vowels = 'aeiouAEIOU';
  let count = 0;

  for (let i = 0; i < str.length; i++){
    if (Vowels.includes(str[i])) {
      count++;
    }
  }
  return count;

} 
console.log(conutVowels("hello world")); // 3
console.log(conutVowels("Javascript")); // 3

//Problem-6: Write a function to get the first element of an array. The function should take a single argument, Which is the array.

//answer:
function getFirstElement(arr) {
  return arr[0]
}
console.log(getFirstElement([1, 2, 3,4])); //1
console.log(getFirstElement(["a", "b", "c"])); // "a"

//Problem-7:

function isArrayEmpty(arr) {
  return (arr);
}
console.log(isArrayEmpty(typeof [])); // true
console.log(isArrayEmpty(typeof [1, 2, 3,])); //false

//Problem-8: Write a function to return the factorial of a number. The function should take a single argument, which is the number.
 
//answer: 
function factorialize(num) {
  if (num === 0 || num === 1) return 1;
// return num * 24
  return num * factorialize(num - 1); //recursive case
}
console.log(factorialize(5)); // 120
console.log(factorialize(7)); //5040

//Problem-9: Write a function to reverse a string. The function should take a single argument, which is the string to reverse.

//answer:
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"

//Problem-10: Write a function to convert a string to lowercase. The function should take a single argument, Which is the string to convert.

//answer:

function toLowerCase(str) {
  return str.toLowerCase()
}
console.log(toLowerCase('HELLO WORLD')); // "hello world"
console.log(toLowerCase('JAVASCRIPT')); // "javascript"


// function toUpperCase(str) {
//   return str.toUpperCase()
// }
// console.log(toUpperCase('asdd'));
// console.log(toUpperCase('scxs'));

//Problem-11: Write a function to find the length of a string. The function should take a single argument, Which is the string.

//answer:
function stringLength(str) {
  return str.length;
}
console.log(stringLength("hello_Hablu")) //11
console.log(stringLength("world")) //5

//Problem-12: Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.

//answer:
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays(["Hablu", "programer"], ["is", "a", "company"]));

//Problem-13: Write a function to get the last element of an array. The function should take a single argument, which is the array.

//answer: 
function getLastElement(arr) {
  return arr[arr.length - 1];
}
console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(["a", "b", "c"])); // "c"

//Problem-14: Write a function to get the first character of a string. The function should take a single argument, which is the string.

// answer: 
function getFirstCharacter(str) {
  return str[0]
}
console.log(getFirstCharacter("hello"));
console.log(getFirstCharacter("World"));

//Problem-15: Write a function to find the sum of all element in an array . The function should take a single argument, which is the array.

//answer:
function sumArray(arr) {
  return arr.reduce(function (total, num) {
    return total + num;
  })
}
console.log(sumArray([1, 2, 3, 4])); //10
console.log(sumArray([-1, -2, -3, -4])); // -10
console.log(sumArray([1.5, 2.5, 3.5])); // 7.5










































































