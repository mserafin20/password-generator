// Possible password characters
var uniqueChar = ["?", ">", "<", "!", "@", "#", "$", "%", "^", "&", "*"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Generate Password
var passwordLength = "";
var characterPool = [];
var finalArray = "";

function generatePassword() {
  passwordLength = prompt("Select a password between 8 and 128 characters");

  if (passwordLength >= 8 && passwordLength <= 128 && Number.isInteger(Number(passwordLength))) {

    // Confirmation box that includes uppercase letters
    var useUppercase = confirm("Include Upper case?")
    if (useUppercase) {
      characterPool = characterPool.concat(upperCase)
    }

    // Confirmation box for lowercase letters
    var useLowerCase = confirm("Include Lower case?")
    if (useLowerCase) {
      characterPool = characterPool.concat(lowerCase)
    }

    // Confirmation box for unique characters 
    var useUniqueChar = confirm("Include a unique character?")
    if (useUniqueChar) {
      characterPool = characterPool.concat(uniqueChar)
    }

    // Confirmation box for numbers 
    var useNumeric = confirm("Include numbers?")
    if (useNumeric) {
      characterPool = characterPool.concat(numbers)
    }

    // Pulls random characters from characterPool to create password
    for (var i = 0; i < parseInt(passwordLength); i++) {
      var randomIndex = Math.floor(Math.random() * characterPool.length);
      var x = characterPool[randomIndex]
      finalArray = finalArray.concat(x);
    }
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = finalArray;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
