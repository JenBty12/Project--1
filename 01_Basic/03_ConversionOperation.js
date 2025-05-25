//Push every time when changes in codes
let score = "33abc";
//console.log(typeof score); // string

// When in conversion
// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

let isLoggedIn = 1;
//console.log(typeof score); // string
//console.log(typeof(score)); // string

let valueInNumber = Number(score); // Converts "33abc" to NaN
//console.log(valueInNumber); // NaN

isLoggedIn = "hitesh"; // Reassigning value to avoid redeclaration
let booleanIsLoggedIn = Boolean(isLoggedIn); // Converts to true
//console.log(booleanIsLoggedIn); // true
// in Java script some rules
// 1 => true
// 0 => false
// "" => false (empty string)
// "hitesh" => true
// Investing study is important
//Browser gives us mostly sring value

let someNumber = 33;  // Declare a variable 'someNumber' and assign it a numeric value 33

let stringNumber = String(someNumber);  // Convert 'someNumber' (a number) to a string using the String() function

console.log(stringNumber);  // Output the value of 'stringNumber' to the console. It will be "33" as a string.
console.log(typeof stringNumber)

// operation ********************///

// Basic Math Operators in JavaScript

// Addition
// let sum = a + b; // Adds a and b

// Subtraction
// let difference = a - b; // Subtracts b from a

// Multiplication
// let product = a * b; // Multiplies a and b

// Division
// let quotient = a / b; // Divides a by b

// Modulus (Remainder)
// let remainder = a % b; // Returns the remainder of a divided by b

// Exponentiation (Power)
// let power = a ** b; // Raises a to the power of b (a^b)

// Increment
// a++; // Increases a by 1 (post-increment)
// ++a; // Increases a by 1 (pre-increment)

// Decrement
// a--; // Decreases a by 1 (post-decrement)
// --a; // Decreases a by 1 (pre-decrement)

// ************************************** //

let str1 ="helllo"
let str2 = "hitesh"
let str3 = str1 + str2
console.log(str3);

// console.log("1"+2);
// console.log(1+2+"2")

// console.log((3+4)*5)

// first is string then others number are aslo treated as string
//empty parentesies in boolen is equal to zero

let gaemcounter = 100
++gamecounter
console.log(gamecounter)