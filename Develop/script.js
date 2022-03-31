// Assignment code here

var generatePassword = function(){
  var lengthMin = prompt("What is the minimum length of the password?");
  while(lengthMin < 8){
    alert("Password must be at least 8 characters");
    var lengthMin = prompt("What is the minimum length of the password?");
  }
  var lengthMax = prompt("What is the maximum length of the password?");;
  while(lengthMax > 128){
    alert("Password must be less than 128 characters");
    var lengthMax = prompt("What is the maximum length of the password?");;
  }
  var characterTypes = {
    lowercase: confirm("Do you want lowercase?"),
    uppercase: confirm("Do you want uppercase?"),
    numeric: confirm("Do you want numbers?"),
    special: confirm("Do you want special characters? (?, !< %)")
  }
  var result = "";
  var characters = "";
  if(characterTypes.lowercase){
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if(characterTypes.uppercase){
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(characterTypes.numeric){
    characters += "0123456789";
  }
  if(characterTypes.special){
    characters += "!@#$%^&*()_+-=";
  }

  lengthMax = Number.parseInt(lengthMax);
  lengthMin = Number.parseInt(lengthMin);
  var length = Math.floor(Math.random() * (lengthMax - lengthMin + 1) + lengthMin);
  
  for(i = 0; i < length; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

//Length of password (min and max)
//character types (lowercase uppercase numeric special characters)
//

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
