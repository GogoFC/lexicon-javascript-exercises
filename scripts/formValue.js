
  function getFormvalue() {

    var form = document.forms[0];
    var fName = form.querySelector('input[name="fname"]');
    var firstName = fName.value;
    var lName = form.querySelector('input[name="lname"]');
    var lastName = lName.value;
    console.log(firstName);
    document.getElementsByTagName("exercise")[0].innerHTML = firstName;
    document.getElementsByTagName("exercise")[1].innerHTML = lastName;
  }