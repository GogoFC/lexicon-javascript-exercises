const date = new Date;
const adate = new Date;

//Cannot redeclare block-scoped variable 'date3'.ts(2451)
//const date3: Date

console.log(date)
console.log(date.toLocaleDateString("sv-SE"));
console.log(date.toLocaleDateString("en-US"));
console.log(date.toLocaleDateString());
console.log(date.toTimeString());

let date2 = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`
console.log(date2);

console.log(adate);
console.log(adate.getFullYear());
console.log(adate.getMonth());
console.log(adate.getDate());

console.log(adate.toISOString());

console.log(date.toISOString().substring(0,10));

//document.getElementById("main").innerHTML = "Lexicon JavaScript Exercises.";

//document.getElementById("date").innerHTML = date.toLocaleDateString("sv-SE");


function isLeapYear(year){
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

console.log(isLeapYear(2024));

function celsiusToFahrenheit(degree){
    return ((9/5*degree)+32);
}
function fahrenheitToCelsius(degree){
    return ((degree-32)*5/9);
}
console.log(celsiusToFahrenheit(20));
console.log(fahrenheitToCelsius(68));
console.log(celsiusToFahrenheit(60));
console.log(fahrenheitToCelsius(45));