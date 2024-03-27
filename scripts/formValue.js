function getFormvalue() {
  var form = document.forms[0];
  var fName = form.querySelector('input[name="fname"]');
  var firstName = fName.value;
  var lName = form.querySelector('input[name="lname"]');
  var lastName = lName.value;
  console.log(firstName);
  console.log(lastName);
  document.getElementById("z1").innerHTML = firstName;
  document.getElementById("z2").innerHTML = lastName;
}
