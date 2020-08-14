// Assignment code here
// 4 different arrays of characters to choose from
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specArr = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', ' ', "\\"];

// generatePassword function declaration
var generatePassword = function () {
  var charAmount = window.prompt("How many characters would you like your password to have 8-128");
  charAmount = parseInt(charAmount);
  //Start of check on input of a number between 8 and 128
  if (charAmount >= 8 && charAmount <= 128) {
    // variables are set up for the different character types
    var isLower = window.confirm("Click OK to confirm including lower case letters");
    var isUpper = window.confirm("Click OK to confirm including upper case letters");
    var isNum = window.confirm("Click OK to confirm including numbers");
    var isSpec = window.confirm("Click OK to confirm including special characters");
    // checks if the char types where checked
    if (isLower === false && isUpper === false && isNum === false && isSpec === false) {
      window.alert("You must select a character type! Please try again.");
      generatePassword();
    }
    //Creates the variable for the new password that will be returned
    var newPass = "";
    for (var i = 0; i < charAmount; i) {
      debugger;
      if (isLower === true) {
        newPass += lowerCase[Math.floor(Math.random() * 26)];
        i++;
      }
      if (isUpper === true) {
        newPass += upperCase[Math.floor(Math.random() * 26)];
        i++;
      }
      if (isNum === true) {
        newPass += numArr[Math.floor(Math.random() * 10)];
        i++;
      }
      if (isSpec === true) {
        newPass += specArr[Math.floor(Math.random() * 33)];
        i++;
      }
    }
  }
  //Checks if the input is between 8 and 128
  else {
    window.alert("Please enter a number between 8 and 128");
    generatePassword();
  }
  return newPass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


