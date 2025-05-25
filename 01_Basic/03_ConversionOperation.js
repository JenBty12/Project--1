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
console.log(typeof stringNumber)//