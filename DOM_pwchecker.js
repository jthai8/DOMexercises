function userCheck() {
  var userId = document.getElementById('userNameInput').value;
  var password = document.getElementById('passwordInput').value;
  if (userId == password) {
    document.getElementById('response').innerHTML = "Your user name cannot equal your password.";
  } else if (password.includes("!") || password.includes("#") || password.includes("$") ) {
    document.getElementById('response').innerHTML = "Your password must contain at least one of the following: $, # or !.";
  } else {
    document.getElementById('response').innerHTML = "Your LogIn is valid";
  }
}



// function userCheck(userId) {
//   var userCrit = !userId.includes("!") && !userId.includes("#") && !userId.includes("$") && userId.length >= 6;
//   return userCrit;
// }
//
// function checkPass(userPass) {
//   var passCrit = (userPass.includes("!") || userPass.includes("#") || userPass.includes("$")) && userPass.length >= 6 && !(userPass === "password") && hasNumber(userPass) && oneLowerUpper(userPass);
//   return passCrit;
// }
//
// function hasNumber(userPass) {
//   var hasDigit;
//   var hasDigitAcc = 0;
//   for(var i = 0; i <=9; i++)
//   {
//     hasDigit = userPass.includes(i);
//     hasDigitAcc += hasDigit;
//   }
//
//   if(hasDigitAcc > 0)
//     return true;
//   else {
//     return false;
//   }
//
// }
//
// function oneLowerUpper(userPass) {
//   var userPassUpper = userPass.toUpperCase();
//   var userPassLower = userPass.toLowerCase();
//
//                                       //jenN  JENN//
//   return userPass < userPassLower && userPass > userPassUpper;;
// }
//
//
// function sameCheck(userId, userPass){
//   return !(userId === userPass);
// }
// function userCred() {
//   var userId = prompt("Enter a user name: ");
//   var userPass = prompt("Enter a user password: ");
//
//   var checkFinal = sameCheck(userId, userPass) && userCheck(userId) && checkPass(userPass);
//
//   if(checkFinal == true)
//   {
//     alert("Your user name and password pass the criteria!");
//   }
//   else {
//     alert("Your user name and password fail the criteria!");
//     userCred();
//   }
// }
