// Dates
const date = new Date();

document.getElementsByTagName("p")[0].innerHTML =
  date.toLocaleDateString("sv-SE");
document.getElementsByTagName("p")[1].innerHTML = date.toLocaleDateString();
document.getElementsByTagName("p")[2].innerHTML = date.toTimeString();
document.getElementsByTagName("p")[3].innerHTML = date.toISOString();

console.log("Date: " + date);
console.log('Date: ["sv-SE"] : ' + date.toLocaleDateString("sv-SE"));
console.log('Date: ["en-US"] : ' + date.toLocaleDateString("en-US"));
console.log("Date: [toLocaleDateString] : " + date.toLocaleDateString());
console.log("Date: [toTimeString] : " + date.toTimeString());
console.log("Date: [getFullYear()] : " + date.getFullYear());
console.log("Date: [getMonth()] : " + date.getMonth());
console.log("Date: [getMonth()] + 1 : " + (date.getMonth() + 1));
console.log("Date: [getDate()] : " + date.getDate());
console.log("Date: [toIOSString()] : " + date.toISOString());
console.log(
  "Date: [toISOString().substring(0, 10)] : " +
    date.toISOString().substring(0, 10)
);

let date2 = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
console.log(
  "Date: [`${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`] : " +
    date2
);

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
console.log('Slice: text="Some text" text.slice(0, 3) : ' + text.slice(0, 3));

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
for (let i = text.length - 1; i >= 0; i--) {
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
// https://www.freecodecamp.org/news/how-to-add-numbers-in-javascript-arrays/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let sum2 = 0;
for (let i = numbers.length; i >= 0; i--) {
  sum2 += i;
  //console.log(i);
}
console.log("");
console.log("Sum: Loop: " + sum2);

let sum5 = 0;
numbers.forEach((numbers) => {
  sum5 += numbers;
});
console.log("Sum: forEach: " + sum5);

// For of loop
let sum3 = 0;
for (let i of numbers) {
  sum3 += i;
}
console.log("Sum: Loop: " + sum3);

let sum4 = 0;
for (let number of numbers) {
  sum4 = sum4 + number;
}
console.log("Sum: Loop: " + sum4);
console.log("");
// Largest number in array

const arr = [1, 2, 3];
const max = Math.max(...arr);

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const largest = Math.max(...arrayOfNumbers);
const largest2 = Math.max.apply(null, arrayOfNumbers);

//console.log(max);
console.log("Math.max(...array) : " + largest);
//console.log(arrayOfNumbers);
console.log("");

// Function to add numbers in an Array
function sumOfArray(array) {
  let sum = 0;
  for (let number of array) {
    sum += number;
  }
  return sum;
}
console.log("Function: sumOfArray : " + sumOfArray(numbers));

// Function to find the largest number of an Array
function maxInArray(array) {
  const max = Math.max(...array);
  return max;
}
console.log("Function: maxInArray : " + maxInArray(numbers));

// Function get Even numbers

function getEvenNumbers(array) {
  let evenNumbers = array.filter((number) => number % 2 == 0);
  return evenNumbers;
}
console.log("Function: getEvenNumbers : " + getEvenNumbers(numbers));

// numbers.forEach((number) => console.log(number));

function getOddNumbers(array) {
  let oddNumbers = array.filter((number) => number % 2 !== 0);
  return oddNumbers;
}
console.log("Function: getOddNumbers : " + getOddNumbers(numbers));

function squareRootOfArray(array) {
  const squared = array.map((num) => Math.sqrt(num));
  return squared;
}

console.log("");
console.log("Function: squareRootOfArray : " + squareRootOfArray(numbers));
const squared = squareRootOfArray(numbers);
console.log("");
console.log("Console.log(squared): ↓ ↓ ↓");
console.log(squared);

// Object

let person = {
  name: "me",
  age: "33",
  address: {
    city: "Bowling Green",
    state: "Kentucky",
    zip: "42101",
    county: "Warren",
  },
};
console.log("");
console.log("Console.log(person.address): ↓ ↓ ↓");
console.log(person.address);

let job = {
  jobTitle: "JavaScript Developer",
  location: "USA",
};
// Merge object with spread operator (...)
// If objects have a property with the same name, then the right-most object property overwrites the previous one.
let employee = {
  ...person,
  ...job,
};
console.log("");
console.log("Merged Object: spread operator (...)          ↓ ↓ ↓ ↓ ↓");
console.log(employee);

// Merge object with Object.assign(target, sourceObj1, sourceObj2, ...)

let target = Object.assign(person, job);
console.log("");
console.log(
  "Merged Object: Object.assign(sourceObj1, sourceObj2, ...)          ↓ ↓ ↓ ↓ ↓"
);
console.log(target);

// Form
// Notes:
// https://stackoverflow.com/questions/3547035/getting-html-form-values
// https://stackoverflow.com/questions/15148659/how-can-i-use-queryselector-on-to-pick-an-input-element-by-name
// https://jsfiddle.net/2ZL4G/1/
// https://javascript.plainenglish.io/javascript-find-even-numbers-in-array-90943d5480ec
//
// READ // https://javascript.plainenglish.io/how-to-get-html-form-values-with-javascript-b4869bc5e889
//
getFormData = (selector) =>
  Object.fromEntries(new FormData(document.querySelector(selector)));
console.log("");
console.log("Form: Output of getFormData:          ↓ ↓ ↓ ↓ ↓");
console.log(getFormData("#form1"));

//const firstName = document.getElementById('form1').elements['name'].value;
// form.querySelector('input[name="fname"]');
const form = document.querySelector("#form1");
const fName = form.elements["fname"].value;
const lName = form.elements["lname"].value;
console.log("");
console.log('Form: Output of querySelector("#form1")          ↓ ↓ ↓ ↓ ↓');
console.log(form);
console.log("");
console.log("Form: Output of form.elements['name'].value          ↓ ↓ ↓ ↓ ↓");
console.log(fName);
console.log(lName);

var form2 = document.forms[0];
var selectElement = form2.querySelector('input[name="fname"]');
var selectedValue = selectElement.value;
//alert(selectedValue);
console.log("");
console.log("Form: Output of form.elements['name'].value          ↓ ↓ ↓ ↓ ↓");
console.log(selectedValue);

/// https://stackoverflow.com/a/65231208
/*
const ccForm = document.forms["form1"];

ccForm.onsubmit = function(e) {

  let ccSelection = ccForm.ccselect.value;
  console.log(ccSelection);

  e.preventDefault();
}
*/


//TODO
/*
<button id="demo">Click me1</button>

<script>
document.getElementById("demo").addEventListener("click", myFunction);
</script>


/////////////

<p id="demo"></p>

<script>
document.getElementById("demo").style.display = "none";
</script>

*/