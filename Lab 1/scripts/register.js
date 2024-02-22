let errorMessage = $("<div></div>");
$(errorMessage).attr("id", "ErrorMessage");

const form = $("#registration-form");
$(form).append(errorMessage);

form.on("submit", function(e) {

    var values = $(this).serializeArray();
    var vals = ["", "", "", ""];

    $.each(values, function(i, value) {
        vals[i] = value.value.trim();
    });

    console.log("Username: " + vals[0] + " Password: " + vals[1] + values);

    // Validate First Name
    if (vals[0].length < 2) { 
        $(errorMessage).text("Error: First Name must be at least 2 characters.");
    } // Validate Last Name
    else if (vals[1].length < 2) { 
        $(errorMessage).text("Error: Last Name must be at least 2 characters.");
    } // Validate Email Name
    else if (vals[2].length < 8) {
        $(errorMessage).text("Error: Email must be at least 8 characters.");
    } // Validate Matching Passwords
    else if (vals[3] != vals[4]) {
        $(errorMessage).text("Error: Passwords entered must Match.");
    } // Validate password length
    else if (vals[3].length < 6) {
        $(errorMessage).text("Error: Password must be at least 6 characters.");
    }
    else {
        $(errorMessage).text("");
         var user = new User(vals[0], vals[1], vals[2], vals[3]);
         user.print();
    }

    e.preventDefault();
});


class User {
    constructor(fName, lName, email, password) {
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.password = password;
    }

    toString() {
        return ("Name: " + this.fName + " " + this.lName + "\nEmail: " + this.email+ "\nPassword: " + this.password);
    }

    print() {
        console.log(this.toString());
    }

    toArray() {
        return [this.fName, this.lName, this.email, this.password];
    }

    toAssocArray() {
        return {'fName': this.fName, 'lName': this.lName, 'email': this.email, 'password': this.password};
    }
}