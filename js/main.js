// Side Menu

document.getElementById('menu-ham').addEventListener('click', sideMenuAppears);
document.getElementById('menu-close').addEventListener('click', sideMenuDisappears);


function sideMenuAppears() {
document.querySelector('.menu').classList.add('menu-open');

document.getElementById("form").style.textColor = "white";
}


function sideMenuDisappears() {
document.querySelector('.menu').classList.remove('menu-open');
}

// Home or Away

function colorSwitcher(buttonId, bgColor, textColor) {
    const button = document.getElementById(buttonId);
    button.addEventListener("click", function () {
      document.body.style.backgroundColor = bgColor;
      document.body.style.color = textColor;
    })
  }
  
  colorSwitcher("blackButton", "black", "grey", "grey");
  colorSwitcher("whiteButton", "white", "black", "black");

const logoChange = document.querySelector("#mobile-logo-div img")
const switcher = document.querySelectorAll(".homeAway")
const logo = document.getElementById("mobile-logo")

switcher.forEach(function(homeAway) {
    homeAway.addEventListener("click", logoSwitcher)
})

function logoSwitcher(event) {

    const switcherNum = event.target.innerText;

    if(switcherNum === "0") {
        logo.src = "../img/logo-white.jpg"

        var standingElement = document.getElementById("standings");
        standingElement.style.borderColor = "black";
  
        var twitterElement = document.getElementById("twitter");
        twitterElement.style.borderColor = "black";
  
        var fixtureElement = document.getElementById("fixtures");
          fixtureElement.style.borderColor = "black";
  
        var formsElement = document.getElementById("forms");
          formsElement.style.borderColor = "black";
    }

    else if (switcherNum === "1") {
        logo.src = "../img/logo-black.jpg"

        var standingElement = document.getElementById("standings");
        standingElement.style.borderColor = "grey";
  
        var twitterElement = document.getElementById("twitter");
        twitterElement.style.borderColor = "grey";
  
        var fixtureElement = document.getElementById("fixtures");
          fixtureElement.style.borderColor = "grey";
  
        var formsElement = document.getElementById("forms");
          formsElement.style.borderColor = "grey";
    }
}

// Modals

// Trial Modal

var trialModal = document.getElementById("trialModal");
var trialModalBtn = document.getElementById("trialModalBtn");
var trialCloseBtn = document.getElementsByClassName("trialCloseBtn")[0];

trialModalBtn.addEventListener("click", openModal);

trialCloseBtn.addEventListener("click", closeModal);

window.addEventListener("click", outsideClick);

function openModal() {
    trialModal.style.display = "block";
}

function closeModal() {
    trialModal.style.display = "none";
}

function outsideClick(e) {
    if (e.target == modal) {
        trialModal.style.display = "none";
    }  
}

const form = document.getElementById("trial-form");
const errorsList = document.getElementById("errors");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  
  errorsList.innerHTML = ""
  
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let areaCode = document.getElementById("phone-area-code").value;
  let phonePrefix = document.getElementById("phone-prefix").value;
  let enquiryReason = document.getElementById("enquiryReason").value;
  let enquiry = document.getElementById("enquiry").value;
  
  if (firstName.length < 3) {
    addError("First name must be more than 2 characters")
  }
  if (lastName.length < 3) {
    addError("Last name must be more than 2 characters")
  }
  if (areaCode.length < 5 || phonePrefix.length < 6) {
    addError("Phone digits must take format 5-6 - e.g 07123-456789")
  }
  if (enquiryReason === "Select") {
    addError("You must select a reason for enquiry")
  }
  if (enquiry.length < 50) {
    addError("Enquiry must be longer than 50 characters")
  }

function addError(errorText) {
  let li = document.createElement("li");
    li.innerText = errorText;
    errorsList.appendChild(li);
}

const feedback = document.getElementById("feedback");
let firstNameValid = firstName.length >= 3;
let lastNameValid = lastName.length >= 3;
let areaCodeValid = areaCode.length >= 5;
let phonePrefixValid = phonePrefix.length >= 6;
let enquiryReasonValid = enquiryReason.value != `Select`;
let enquiryLengthValid = enquiryLength.length >= 50;
  
  if (firstNameValid && lastNameValid && areaCodeValid && phonePrefixValid && enquiryReasonValid && enquiryLengthValid) {
    feedback.innerText = "Submission Successful - you will hear from us shortly!"
  }
  else {
    feedback.innerText = "Submission Unsuccessful!"
  }
}

