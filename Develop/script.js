// special characters
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// numeric characters
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// lowercase characters
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// uppercase characters
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// prompt for password options
function getPasswordOptions() {

}

// getting a random element from an array
function getRandom(arr) {

}

// generate password with user input
function generatePassword() {

  var myPass="";
  var plen = 0;
  let pwdLength = prompt("Length of password:");
  if ((pwdLength == null) || isNaN(pwdLength) ) {
    alert("Enter a valid length for password between 10 and 64, both including...");
    return myPass;
  } else {
    plen = parseInt(pwdLength, 10);
    if (plen <10 || plen > 64) {
      alert("Enter a valid length for password between 10 and 64, both including...");
      return myPass;
    } else {

      let lcaseOK = window.confirm("Include lower case letters (OK = Yes / Cancel = No)?");
      let ucaseOK = window.confirm("Include upper case letters (OK = Yes / Cancel = No)?");
      let numbersOK = window.confirm("Include numbers (OK = Yes / Cancel = No)?");
      let spcharsOK = window.confirm("Include special characters ($@%&*, etc.) (OK = Yes / Cancel = No)?");

      //console.log (myPass.length);
      //console.log (plen);
      if (!lcaseOK && !ucaseOK && !numbersOK && !spcharsOK) 
      {
        alert("Select atleast one character type..");
        return myPass;

      } else {
        
        while (myPass.length <= plen) {
          //console.log ("Pass length" + myPass.length);
  
          if (lcaseOK) {
            
            let x = Math.floor((Math.random() * 26) );
            myPass = myPass + lowerCasedCharacters[x];
            //console.log ("lcase: " + myPass);
            if (myPass.length >= plen) break;
           }
  
           if (ucaseOK) {
            let y = Math.floor((Math.random() * 26) );
            myPass = myPass + upperCasedCharacters[y];
            //console.log ("ucase: " + myPass);
            if (myPass.length >= plen) break;
           }
  
           if (numbersOK) {
            let z = Math.floor((Math.random() * 10) );
            console.log(z);
            myPass = myPass + numericCharacters[z];
            //console.log ("num: " + myPass);
            if (myPass.length >= plen) break;
           }
  
           if (spcharsOK) {
            let p = Math.floor((Math.random() * 23) );
            myPass = myPass + specialCharacters[p];
            //console.log ("spec: " + myPass);
            if (myPass.length >= plen) break;
           }
        }

      }

      //console.log (myPass);

} 
    

  return myPass;
  }

  document.getElementById("generate").focus();
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
