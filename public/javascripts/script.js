document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

function mouseoverPassLogin(obj) {
  var obj = document.getElementById('myPasswordLogin');
  obj.type = "text";
}
function mouseoutPassLogin(obj) {
  var obj = document.getElementById('myPasswordLogin');
  obj.type = "password";
}

function mouseoverPassSignup(obj) {
  var obj = document.getElementById('passwordSignup');
  obj.type = "text";
}
function mouseoutPassSignup(obj) {
  var obj = document.getElementById('passwordSignup');
  obj.type = "password";
}