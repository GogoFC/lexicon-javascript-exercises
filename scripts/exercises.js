// Date
const date = new Date();
const adate = new Date();

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

//document.getElementById("main").innerHTML = "Lexicon JavaScript Exercises.";
//document.getElementById("date").innerHTML = date.toLocaleDateString("sv-SE");

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


//console.log(text.length);
