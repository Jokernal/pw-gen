// Assignment code here
var pwLength;

function generatePassword()
{
  //do something when genPW button is clicked
  var pwLength = window.prompt("Pick a number betwen 8 and 128 to choose how long your password will be!");
  var characters = "";
  var password = "";
  if(pwLength >= 8 && pwLength <= 128 )
  {
     console.log("nice");  
  }
  else
  {
    window.alert("please enter a valid number between 8 and 128!");
    generatePassword();
  }

  var lowercase = window.confirm("do you want to include lowercase letters? If not click cancel!");
  var uppercase = window.confirm("do you want to include uppercase letters? If not click cancel!");
  var numbers = window.confirm("do you want to include numbers? If not click cancel!");
  var special = window.confirm("do you want to include special characters? If not click cancel!");

  if(lowercase)
  {
    var characters ="abcdefghijklmnopqrstuvwxyz"
  }

  if(uppercase)
  {
    var characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if(numbers)
  {
    var characters = characters + "0123456789"
  }

  if(special)
  {
    var characters = characters + "?@#$%"
  }

  pwLength = pwLength - 1

  for (var i = 0; i<= pwLength; i++)
  {
    var randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber + 1);
  }
   
  
  
  return password;
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
