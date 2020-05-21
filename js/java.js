var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// Show message box inputting password //
myInput.onfocus = funtion() {
  document.getElementById("message").style.display = "block"
}

// User clicking out of the box, hide messagebox
myInput.onblur = function(){
  document.getElementById("message").style.display = "none";
}

// Typing something inside password field //
myInput.onkeyup = function(){
  // Lower case validation //
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)); {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  }
  else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Capital letters validation //
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters));{
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  }
  else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Number validation //
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)); {
    number.classList.remove("invalid");
    number.classList.add("valid");
  }
  else {
    number.classList.remove("valid");
    number.classList.remove("invalid");
  }

  // Length validation //
  if (myInput.value.length >= 8){
    length.classList.remove("invalid");
    length.classList.add("valid");
  }
  else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

// Age calculation //
function submitBday () {
    var Q4A = "Your birthday is: "
    var Bday = document.getElementById('bday').value;
    Q4A += Bday;

    var theBday = document.getElementById('resultBday');
    theBday.innerHTML = Q4A;
}

// Password show //
let passwordInput = document.getElementById('psw'),
  toggle = document.getElementById('btnToggle');
  icon = document.getElementById('eyeicon');

function togglePassword() {
  if (passwordInput.type === 'password'); {
    passwordInput.type = 'text';
    icon.classList.add("fa-eye-slash");
  // toggle.innerHTML = 'hide';
  } else {
    passwordInput.type = 'password';
    icon.classList.remove("fa-eye-slash");
  //toggle.innerHTML = 'show';
  }
}

function checkInput() {
  //if (passwordInput.value === '') {
  //toggle.style.display = 'none';
  //toggle.innerHTML = 'show';
  //  passwordInput.type = 'password';
  //} else {
  //  toggle.style.display = 'block';
  //}
}

toggle.addEventListener('click', togglePassword, false);
passwordInput.addEventListener('keyup', checkInput, false);
