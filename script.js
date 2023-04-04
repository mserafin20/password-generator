// Possible password characters

var uniqueChar = ["?",">","<","!","@","#","$","%","^","&","*"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];

// Generate Password

var passwordLength = "";
var characterPool = [];
var finalArray = "";

function generatePassword(){
  passwordLength = prompt("Select a password between 8 and 128 characters");

  if (passwordLength >= 8 && passwordLength <= 128 && Number.isInterger(Number(passwordLength))){

// Confirmation box that includes uppercase letters

    var useUppercase = confirm("Include Upper case?")
    if (useUppercase) {
      characterPool = characterPool.concat(upperCase)
    }
// Confirmation box for lowercase letters

    var lowerCase = confirm("Include Lower case?")
    if (lowerCase) {
      characterPool = characterPool.concat(lowerCase)
    }

    

  }
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function generateTurtleName() {
//   var names = ["Bob", "Bobby", "Mary", "Sue", "Fredy"];
//   var numberOfNames = parseInt(prompt("How many names?"));
//   var turtleNames = [];
//   console.log(typeof numberOfNames);
//   for(var i = 0; i < numberOfNames; i++){
//       // console.log(names[Math.floor(Math.random() * names.length)]);
//       turtleNames.push(names[Math.floor(Math.random() * names.length)]);
//   }
  
//   console.log(turtleNames);
//   return turtleNames.join('-');
// }
// generateTurtleName()



// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```