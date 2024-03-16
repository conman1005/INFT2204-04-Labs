// Get form element
const form = $("#login-form");

// Run this function on submit
form.on("submit", function(e) {
    // retrieve serializedArrray as values from form and initialize vals array
    var values = $(this).serializeArray();
    var vals = ["", ""];

    // Run through each value and insert into vals array
    $.each(values, function(i, value) {
        vals[i] = value.value.trim();
    });

    // print login credentials to console
    console.log("Username: " + vals[0] + " Password: " + vals[1] + values);

    


    // Get the NavBar
    const navItems = document.getElementById("navItems");
    // create new list item
    let newNavItem = document.createElement("li");
    newNavItem.className = "nav-item";

    // create new nav-link
    let navLink = document.createElement("a");
    navLink.className = "nav-link";
    navLink.innerHTML = vals[0];

    newNavItem.appendChild(navLink);
    navItems.insertBefore(newNavItem, navItems.children[6]);
    //navItems.appendChild(newNavItem);

    // stop form from submitting (stops refresh)
    e.preventDefault();
});