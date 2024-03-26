// Dates
const date = new Date();

document.getElementsByTagName("p")[0].innerHTML = date.toLocaleDateString("sv-SE");
document.getElementsByTagName("p")[1].innerHTML = date.toLocaleDateString();
document.getElementsByTagName("p")[2].innerHTML = date.toTimeString();
document.getElementsByTagName("p")[3].innerHTML = date.toISOString();

console.log("Date: " + date);
console.log("Date: [\"sv-SE\"] : " + date.toLocaleDateString("sv-SE"));
console.log("Date: [\"en-US\"] : " + date.toLocaleDateString("en-US"));
console.log("Date: [toLocaleDateString] : " + date.toLocaleDateString());
console.log("Date: [toTimeString] : " + date.toTimeString());
console.log("Date: [getFullYear()] : " + date.getFullYear());
console.log("Date: [getMonth()] : " + date.getMonth());
console.log("Date: [getMonth()] + 1 : " + (date.getMonth() + 1));
console.log("Date: [getDate()] : " + date.getDate());
console.log("Date: [toIOSString()] : " + date.toISOString());
console.log("Date: [toISOString().substring(0, 10)] : " + date.toISOString().substring(0, 10));

let date2 = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
console.log("Date: [`${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`] : " + date2);

document.getElementById("main").innerHTML = "Lexicon JavaScript exercises.";

//Leap year
function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

console.log("");

console.log("Function: isLeapYear(2024) : " + isLeapYear(2024));

// Celsius to Fahrenheit conversion
function celsiusToFahrenheit(degree) {
  return (9 / 5) * degree + 32;
}

// Fahrenheit to Celsius conversion
function fahrenheitToCelsius(degree) {
  return ((degree - 32) * 5) / 9;
}
console.log("Function: celsiusToFahrenheit(20) : " + celsiusToFahrenheit(20));
console.log("Function: fahrenheitToCelsius(68) : " + fahrenheitToCelsius(68));
console.log("Function: celsiusToFahrenheit(60) : " + celsiusToFahrenheit(60));
console.log("Function: fahrenheitToCelsius(45) : " + fahrenheitToCelsius(45));

// Remove text from a string
let text = "Some text";
console.log("Slice: text=\"Some text\" text.slice(0, 3) : " + text.slice(0, 3));

console.log("");

// For of loop
for (let i of text) {
console.log("Loop: for of : " + i);
}

console.log("");

// For in loop
for (let i in text) {
  console.log("Loop: for in : " + i);
}

console.log("");

// reverse a given string
for (let i = text.length-1; i >= 0; i--) {
  console.log("Loop: Reverse a String : " + text[i]);
}

// Undefined. Below Loop i is the value not text of i.
//for (let i of text) {
//  console.log(text[i]);
//}
//console.log("text.length = " + text.length);

/* //loop
for (let i = 0; i < 10; i++) {
  console.log("testing");
  }
*/

// Add numbers in Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let sum2 = 0;
for (let i = numbers.length; i >= 0; i--) {
  sum2 += i;
  //console.log(i);
}
console.log(sum2);

let sum5 = 0;
numbers.forEach((numbers) => {
  sum5 += numbers;
});
console.log(sum5);

// For of loop
let sum3 = 0;
for (let i of numbers) {
  sum3 += i;
}
console.log(sum3);



let sum4 = 0;
for (let number of numbers) {
  sum4 = sum4 + number;
}
console.log(sum4);

// Largest number in array

const arr = [1, 2, 3];
const max = Math.max(...arr);

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const largest = Math.max(...arrayOfNumbers);
const largest2 = Math.max.apply(null, arrayOfNumbers);

console.log(max);
console.log(largest);
//console.log(arrayOfNumbers); 


// Function to add numbers in an Array
function sumOfArray(array){
  let sum = 0;
  for(let number of array){
    sum += number;
  }
  return sum;
}
console.log("Sum function result = " + sumOfArray(numbers));

// Function to find the largest number of an Array
function maxInArray(array){
  const max = Math.max(...array);
  return max;
}
console.log("Largest number function result = " + maxInArray(numbers));
