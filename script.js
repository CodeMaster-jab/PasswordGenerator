// Assignment Code
var generateBtn = document.querySelector("#generate");
var toClipboardBtn = document.querySelector('#toClipboard');

function ValidateInput(){
  var pwLength = document.querySelector('#txtPswdLength').value;
  if ( pwLength < 8 || pwLength > 128){
    alert("Invalid Password Length! - must be (8-128)");
    return false;
  }
  if ( isNaN(pwLength) ){
    alert("Invalid Number entered! - must be a number (8-128)");
    return false;
  }
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);
  if (!checkedOne){
    alert("You must Check at least one Character Type!");
    return false;
  }
  return true;
}

function generatePassword(){
  var special = "!#$%&()*+,-./:;=?@[]^_{|}~";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var chars  = "", password = ""
  if ( document.querySelector('#cbxSpecialChar').checked ){
    chars += special; 
  }
  if ( document.querySelector('#cbxUppercase').checked ){
    chars += uppercase;
  }
  if ( document.querySelector('#cbxLowercase').checked ){
    chars += lowercase;
  }
  if ( document.querySelector('#cbxNumbers').checked ){
    chars += numbers;
  }
  console.log(chars, chars.length);
  var pwLength = document.querySelector('#txtPswdLength').value;
  for (var x=0; x<pwLength; x++){
    var randNbr = Math.floor(Math.random() * chars.length);
    console.log(randNbr);
    password += chars.charAt(randNbr);
  }
  return password;

}
// Write password to the #password input
function writePassword() {
  if ( !ValidateInput() ){
    return false;
  };
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  toClipboardBtn.removeAttribute("disabled");
  toClipboardBtn.classList.remove('btn-secondary');
  toClipboardBtn.classList.add('btn-primary');
  toClipboardBtn.focus();
}

function copyToClipboard() {
  /* Get the text field */
  var copyText = document.getElementById("password");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");
 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER for Copy to Clipboard Button
toClipboardBtn.addEventListener("click", copyToClipboard);