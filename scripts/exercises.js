// Date
const date = new Date();
const adate = new Date();

document.getElementsByTagName("p")[0].innerHTML = date.toLocaleDateString("sv-SE");
document.getElementsByTagName("p")[1].innerHTML = date.toLocaleDateString();
document.getElementsByTagName("p")[2].innerHTML = date.toTimeString();
document.getElementsByTagName("p")[3].innerHTML = date.toISOString();

console.log(date);
console.log(date.toLocaleDateString("sv-SE"));
console.log(date.toLocaleDateString("en-US"));
console.log(date.toLocaleDateString());
console.log(date.toTimeString());

let date2 = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
console.log(date2);

console.log(adate);
console.log(adate.getFullYear());
console.log(adate.getMonth());
console.log(adate.getDate());

console.log(adate.toISOString());

console.log(date.toISOString().substring(0, 10));

document.getElementById("main").innerHTML = "Lexicon JavaScript exercises.";


//Leap year
function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

console.log(isLeapYear(2024));

// Celsius to Fahrenheit conversion
function celsiusToFahrenheit(degree) {
  return (9 / 5) * degree + 32;
}

// Fahrenheit to Celsius conversion
function fahrenheitToCelsius(degree) {
  return ((degree - 32) * 5) / 9;
}
console.log(celsiusToFahrenheit(20));
console.log(fahrenheitToCelsius(68));
console.log(celsiusToFahrenheit(60));
console.log(fahrenheitToCelsius(45));

// Remove text from a string
let text = "Some text";
console.log(text.slice(0, 3));

// For of loop
for (let i of text) {
  console.log(i);
}
// For in loop
for (let i in text) {
  console.log(i);
}

// reverse a given string
for (let i = text.length; i >= 0; i--) {
  console.log(text[i]);
}

// Undefined
for (let i of text) {
  console.log(text[i]);
}
console.log("text.length = " + text.length);

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

let sum = 0;
numbers.forEach((numbers) => {
  sum += numbers;
});
console.log(sum);

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
