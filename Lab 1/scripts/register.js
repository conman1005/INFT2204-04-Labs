let errorMessage = $("<div></div>");
$(errorMessage).attr("id", "ErrorMessage");

const form = $("#registration-form");
$(form).append(errorMessage);

form.on("submit", function(e) {

    var values = $(this).serializeArray();
    var vals = ["", ""];

    $.each(values, function(i, value) {
        vals[i] = value.value.trim();
    });

    console.log("Username: " + vals[0] + " Password: " + vals[1] + values);

    if (vals[0].length < 2) { 
        $(errorMessage).text("Error: First Name must be at least 2 characters.");
    } else if (vals[1].length < 2) { 
        $(errorMessage).text("Error: Last Name must be at least 2 characters.");
    } else if (vals[2].length < 8) {
        $(errorMessage).text("Error: Email must be at least 8 characters.");
    } else if (vals[3] != vals[4]) {
        $(errorMessage).text("Error: Passwords entered must Match.");
    } else if (vals[3].length < 6) {
        $(errorMessage).text("Error: Password must be at least 6 characters.");
    } else {
        $(errorMessage).text("");
    }

    e.preventDefault();
});