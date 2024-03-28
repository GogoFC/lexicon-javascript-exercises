function display_c() {
  setTimeout("display_ct()", 1000);
}

function display_ct() {
  document.getElementById("ct").innerHTML = Date().slice(16,25);
  display_c();
}

function clock() {
  document.getElementsByTagName("p")[3].innerHTML = Date();
}
setInterval(clock, 1000);
/*
// Works also /////////
setInterval(function(){
    // call your function here
    clock();
  }, 1000);
*/
