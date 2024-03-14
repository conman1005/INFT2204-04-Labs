// Registration Handling Script
// Made by Conner Cullity (100760244) and Aiden Skinner (100881254)
// Date Completed: 2024-02-05

// import User class from app.js
import User from './app.js';

/**
 * 
 * @param {String} emailString 
 * @returns regex result
 */
function validateEmailAddressRegex(emailString) {
    //the regular expression to validate the email address for string+string|number bewten 2-20 characters
    // note the / and / at the beginning and end of the expression

    // email regex (From https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailString.toLowerCase().match(emailRegex);
}

// Create error div
let errorMessage = $("<div></div>");
$(errorMessage).attr("id", "ErrorMessage");
// add error div to form
const form = $("#registration-form");
$(form).append(errorMessage);

// Form Submit Function
form.on("submit", function(e) {

    // retrieve serializedArrray as values from form and initialize vals array
    var values = $(this).serializeArray();
    var vals = ["", "", "", ""];

    // Run through each value and insert into vals array
    $.each(values, function(i, value) {
        vals[i] = value.value.trim();
    });

    // Validate First Name
    if (vals[0].length < 2) { 
        $(errorMessage).text("Error: First Name must be at least 2 characters.");
    } // Validate Last Name
    else if (vals[1].length < 2) { 
        $(errorMessage).text("Error: Last Name must be at least 2 characters.");
    } // Validate Email Name
    else if (vals[2].length < 8) {
        $(errorMessage).text("Error: Email must be at least 8 characters.");
    } else if (validateEmailAddressRegex(vals[2]) === null) {
        $(errorMessage).text("Error: Email must have an @ and a period (.).");
    } // Validate Matching Passwords
    else if (vals[3] != vals[4]) {
        $(errorMessage).text("Error: Passwords entered must Match.");
    } // Validate password length
    else if (vals[3].length < 6) {
        $(errorMessage).text("Error: Password must be at least 6 characters.");
    }
    else { // create user object and print user data to console if input is valid
        $(errorMessage).text("");
         var user = new User(vals[0], vals[1], vals[2], vals[3]);
         user.print();
    }
    // stop form from submitting (prevent refresh)
    e.preventDefault();
});


