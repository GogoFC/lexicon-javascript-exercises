function leapYearCheck2() {
  let year = document.getElementById("yearInput").value;
  let text;

  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    text = "It's a Leap Year";
  } else {
    text = "Not a Leap Year";
  }
  document.getElementById("leapYearResult").innerHTML = text;
}
