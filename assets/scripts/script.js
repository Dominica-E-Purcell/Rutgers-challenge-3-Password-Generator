// Assignment Code
var passwordLengthMinimum = 8;
var passwordLengthMaximum = 128;
var passwordComputerOptionsArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "@", "#", "$", "%", "^", "&", "*", ")", "(", "?", ">", "<", ".", ",", "-", "+", "=", ";", ":", "[", "]", "{", "}", "~",];

var writePassword = function () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  var passwordText = window.prompt("Enter a number between 8 and 128");
  if (!passwordText) {
    return;
  }
  else (passwordText) = function generatePassword() {
    var i = passwordText;
    for (i = 0; i <= passwordLengthMinimum; i >= passwordLengthMaximum) {
      var passwordText = Math.floor(Math.random() * passwordComputerOptionsArray)
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
generateBtn.addEventListener("mouseover", passwordText, "#password");
