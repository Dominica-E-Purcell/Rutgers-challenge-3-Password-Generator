// Assignment Code
// Variables to act as guide lines for the user input
var passwordLengthMinimum = 8;
var passwordLengthMaximum = 128;
var passwordComputerOptionsArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "@", "#", "$", "%", "^", "&", "*", ")", "(", "?", ">", "<", ".", ",", "-", "+", "=", ";", ":", "[", "]", "{", "}", "~",];

var writePassword = function () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
// call function within another function in order to get user input
  var generatePassword = window.prompt("Enter a number between 8 and 128");
// If user doesn't put any number when prompted bail 
  if (!generatePassword) {
    return;
  }
// if user does put in a number make sure it fits within the parameters set my the variables at the top and then run
  else (generatePassword) = function generatePassword() {
    var i = generatePassword;
// makes the numbers random
    for (i = 0; i <= passwordLengthMinimum; i >= passwordLengthMaximum) {
      var generatePassword = Math.floor(Math.random() * passwordComputerOptionsArray)
    }
  }
};

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
/*function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} */

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("mouseover", generatePassword,);
