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

//document.getElementById("main").innerHTML = "Lexicon JavaScript Exercises.";

//document.getElementById("date").innerHTML = date.toLocaleDateString("sv-SE");

