
// ===================responsive navbar 
const hamburger = document.querySelector(".hamburger");
  hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
  }

// form validation of contact us 
const form = document.querySelector("form");
const firstName = document.getElementById("fname");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

email.addEventListener("input", (event) => {
  // to check if the form fields are valid when user is typing
  if(email.validity.valid) {
    //to remove the visible error message when the field in valid
    emailError.textContent = ""; //resetting the content of the message
    emailError.className = "error";  //resetting the visual state of message
  } else {
    // tho show error 
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // to submit the form when email field is valid
  if (!email.validity.valid) {
    //to prevent the submitting when the iinput is incorrect
    showError();
    //to cancel the form when the input submiitted is wrong
    event.preventDefault();
  }
});

function showError(){
  if(email.validity.valueMissing){
    //if the field is empty display this
    emailError.textContent = "you need to enter an email address";
  } else if (email.validity.typeMismatch){
    //when email address is wrong format or empty
    emailError.textContent = "Entered value needs to be an email address";
  }else if (email.validity.tooShort){
    // email data is too short display this message
    emailError.textContent = `Email should be at least ${ email.minLength} characters;
    you entered ${email.value.length}.`;
  }
  emailError.className = "error active";
}

