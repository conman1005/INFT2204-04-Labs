// Made by Conner Cullity (100760244) and Aiden Skinner (100881254)
// Date Completed: 2024-02-05

/**
 * Class for User Object
 */
class User {
    /**
     * 
     * @param {String} fName First Name
     * @param {String} lName Last Name
     * @param {String} email Email
     * @param {String} password Password
     */
    constructor(fName, lName, email, password) {
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.password = password;
    }
    /**
     * 
     * @returns User representes as a String
     */
    toString() {
        return ("Name: " + this.fName + " " + this.lName + "\nEmail: " + this.email+ "\nPassword: " + this.password);
    }

    /**
     * Prints contents of toString() to console
     */
    print() {
        console.log(this.toString());
    }

    /**
     * 
     * @returns User represented as serialized array [1: First Name, 2: Last Name, 3: Email, 4: Password]
     */
    toArray() {
        return [this.fName, this.lName, this.email, this.password];
    }

    /**
     * 
     * @returns User represented as Acssociated array [fName, lName, email, password]
     */
    toAssocArray() {
        return {'fName': this.fName, 'lName': this.lName, 'email': this.email, 'password': this.password};
    }
}
export default User;



// Get the NavBar
const navItems = document.getElementById("navItems");

// Change Products to Projects
const productButton = document.getElementById("products");
productButton.innerHTML = "Projects";

// Add Human Resources to NavBar
// create new list item
const newNavItem = document.createElement("li");
newNavItem.className = "nav-item";
// create new nav-link
const navLink = document.createElement("a");
navLink.className = "nav-link";
navLink.innerHTML = "Human Resources";
navLink.id = "hrLink";
// add new item to navbar
newNavItem.appendChild(navLink);
//navItems.appendChild(newNavItem);
navItems.insertBefore(newNavItem, navItems.children[4]);

// Create Bottom NavBar
const navBottom = document.createElement("nav");
navBottom.className = "navbar fixed-bottom navbar-light bg-light";
// create nav container and append to navBottom
const navDiv = document.createElement("div");
navDiv.className = "container-fluid";
navBottom.appendChild(navDiv);
// create navbar brand and append to navDiv
const navBrand = document.createElement("a");
navBrand.className = "navbar-brand";
navBrand.innerHTML = "&copy Copyright 2024";
navDiv.appendChild(navBrand);
// Add bottom bar to body
document.body.appendChild(navBottom);