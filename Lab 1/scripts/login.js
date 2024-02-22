const form = $("#login-form");
form.on("submit", function(e) {
    const submit = document.getElementById("btnLogin");

    var values = $(this).serializeArray();
    var vals = ["", ""];

    $.each(values, function(i, value) {
        vals[i] = value.value.trim();
    });

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


    e.preventDefault();
});