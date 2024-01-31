/*
 * Validate the email address
 * @param {string}       emailString
 * @returns {string}     validation result
 */
function validateEmailAddressRegex(emailString) {
    //the regular expression to validate the email address for string+string|number bewten 2-20 characters
    // note the / and / at the beginning and end of the expression

    // email regex (From https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //return true if the email address is valid - how to use regex
	//return !!emailString && typeof emailString === 'string'
		//&& emailString.match(emailRegex);
    return emailString.toLowerCase().match(emailRegex);
}

/*
 * Validate the phone number format
 * @param {string}       emailString
 * @returns {string}     validation result
 */
function validatePhoneRegex(phoneString) {
    // phone regex (From https://ihateregex.io/expr/phone/)
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    // return
    return phoneString.toLowerCase().match(phoneRegex);
}


function validateName(name) {
    // name regex to only include characters and spaces (From https://stackoverflow.com/questions/13393032/regular-expression-which-allow-only-characters-or-space)
    const nameRegex = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
    // return
    return name.toLowerCase().match(nameRegex);
}

function timedRedirect() {
    window.location.href = './index.html';
}



//form consts
const form = document.getElementById("registration-form");
const submit = document.getElementById("submit-reg-form");
const emailText = document.getElementById("inputEmail4");

//error consts
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const nameError = document.getElementById("nameError");
const messageError = document.getElementById("messageError");


form.onsubmit = function submitForm() {
    // get form data
    const formData = new FormData(form, submit);

    // get data from formData
    const name = formData.get("inputName").trim();
    const email = formData.get("inputEmail").trim();
    const phone = formData.get("inputPhone").trim();
    const message = formData.get("inputMessage").trim();

    // check if name is between 6 and 20 characters, display red error message if it's more or less'
    if (name.length < 2 || name.length > 30) {
        nameError.innerHTML = "Invalid Name: Must be between 6 and 20 characters.";
        nameError.style = "border-style: solid; border-radius: 5px; border-color: red; background-color: #ff2b2b; color: white;";
        return false;
    } else if (validateName(name) == null) {    // check if name matches name regex, display red error message if it doesn't match
        nameError.innerHTML = "Invalid Name: Cannot contain special characters or numbers.";
        nameError.style = "border-style: solid; border-radius: 5px; border-color: red; background-color: #ff2b2b; color: white;";
        return false;
    }
    // display valid name and make style green
    nameError.innerHTML = "Valid Name";
    nameError.style = "border-style: solid; border-radius: 5px; border-color: green; background-color: #04d404; color: white;";

    // check if message is between 5 and 255 characters
    if (message.length < 5 || message.length > 255) {
        messageError.innerHTML = "Invalid Message: Must be between 5 and 255 characters.";
        messageError.style = "border-style: solid; border-radius: 5px; border-color: red; background-color: #ff2b2b; color: white;";
        return false;
    }
    // display valid message and make style green
    messageError.innerHTML = "Valid Message";
    messageError.style = "border-style: solid; border-radius: 5px; border-color: green; background-color: #04d404; color: white;";


    if (validateEmailAddressRegex(email) == null) { // check if email matches email regex then display error if doesn't match
        emailError.innerHTML = "Invalid Email: Must have one (and only one) at symbol (@) and period (.). No more, No less.";
        emailError.style = "border-style: solid; border-radius: 5px; border-color: red; background-color: #ff2b2b; color: white;";
        return false;
    
    }
    // display valid email and make style green
    emailError.innerHTML = "Valid Email";
    emailError.style = "border-style: solid; border-radius: 5px; border-color: green; background-color: #04d404; color: white;";

    // check if phone matches phone regex, display red error message if it doesn't match
    if (validatePhoneRegex(phone) == null) {
        phoneError.innerHTML = "Invalid Phone Number: Use regular phone number format (999) 999-9999";
        phoneError.style = "border-style: solid; border-radius: 5px; border-color: red; background-color: #ff2b2b; color: white;";
        return false;
    }
    // display valid phone if regex matches
    phoneError.innerHTML = "Valid Phone";
    phoneError.style = "border-style: solid; border-radius: 5px; border-color: green; background-color: #04d404; color: white;";

    // Send data to console
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Phone: " + phone);
    console.log("Message: " + message);
    
    // sendd user to index page after 3 seconds
    setInterval(timedRedirect, 3000);

    // prevent page from refreshing right away.
    return false;
}