// Assignment Code
// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function passwordOptions() {
  var passwordLink = prompt(
    "How many character would you like in your password!"
  );
  var numberConfirm = confirm(
    "click od to confirm including your numeric character."
  );
  var specialConfirm = confirm(
    "click to confirm including your special character"
  );
  var upperCaseConfirm = confirm("click to confirm your upppercase character");
  var lowerCaseConfirm = confirm("click to confirm your lowercase character");

  var options = {
    passwordLink: passwordLink,
    numberConfirm: numberConfirm,
    specialConfirm: specialConfirm,
    upperCaseConfirm: upperCaseConfirm,
    lowerCaseConfirm: lowerCaseConfirm,
  };
  return options;
}

function random(arr) {
  var index = Math.floor(Math.random() * arr.length);
  var element = arr[index];
  return element;
}

function generatePassword() {
  var options = passwordOptions();
  var result = [];
  var possible = [];
  var guarantied = [];
  if (options.specialConfirm) {
    possible = possible.concat(specialCharacters);
    guarantied.push(random(specialCharacters));
    console.log("1" + guarantied);
  }
  if (options.numberConfirm) {
    possible = possible.concat(numericCharacters);
    guarantied.push(random(numericCharacters));
    console.log("2" + guarantied);
  }
  if (options.upperCaseConfirm) {
    possible = possible.concat(upperCasedCharacters);
    guarantied.push(random(upperCasedCharacters));
    console.log("3" + guarantied);
  }
  if (options.lowerCaseConfirm) {
    possible = possible.concat(lowerCasedCharacters);
    guarantied.push(random(lowerCasedCharacters));
    console.log("4" + guarantied);
  }

  for (i = 0; i < options.passwordLink; i++) {
    var possibleCharacter = random(possible);
    result.push(possibleCharacter);
  }
  return result.join("").toString();
  console.log(result);
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  alert(generatePassword());

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
