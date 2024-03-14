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
     * 
     * @throws Invalid Object Type
     */
    constructor(fName, lName, email, password) {
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.password = password;

        // Make sure each Object given are Strings.
        if (typeof fName != 'string' || typeof lName != 'string' || typeof email != 'string' || typeof password != 'string') {
            throw new Error('Invalid Type: Only String variables in the User constructor. Wait... How did you send a non-String through a form?');
        }
    }
    /**
     * 
     * @returns {String} User representes as a String
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
     * @returns {String[]} User represented as serialized array [1: First Name, 2: Last Name, 3: Email, 4: Password]
     */
    toArray() {
        return [this.fName, this.lName, this.email, this.password];
    }

    /**
     * 
     * @returns {String[]} User represented as Acssociated array [fName, lName, email, password]
     */
    toAssocArray() {
        return {'fName': this.fName, 'lName': this.lName, 'email': this.email, 'password': this.password};
    }

    /**
     * 
     * @returns {String} First Name
     */
    getFirstName() {
        return this.fName;
    }

    /**
     * Sets First Name
     * @param {String} fName 
     * @throws Invalid Object Type
     */
    setFirstName(fName) {
        // Make sure Object given is a String
        if (typeof fName != 'string') {
            throw new Error('Invalid Type: lName (Last Name) can only be a String.');
        }
        this.fName = fName;
    }

    /**
     * 
     * @returns {String} Last Name
     */
    getLastName() {
        return this.lName;
    }

    /**
     * Sets Last Name
     * @param {String} lName 
     * @throws Invalid Object Type
     */
    setLastName(lName) {
        // Make sure Object given is a String
        if (typeof lName != 'string') {
            throw new Error('Invalid Type: fName (First Name) can only be a String.');
        }
        this.lName = lName;
    }

    /**
     * 
     * @returns {String} Email
     */
    getEmail() {
        return this.email;
    }

    /**
     * Sets Email
     * @param {String} email 
     * @throws Invalid Object Type
     */
    setEmail(email) {
        // Make sure Object given is a String
        if (typeof email != 'string') {
            throw new Error('Invalid Type: email can only be a String.');
        }
        this.email = email;
    }

    /**
     * 
     * @returns {String} Password (Should be hash in future)
     */
    getPassword() {
        return this.password;
    }

    /**
     * Sets Password (Should be hash in future)
     * @param {String} password 
     * @throws Invalid Object Type
     */
    setPassword(password) {
        // Make sure Object given is a String
        if (typeof password != 'string') {
            throw new Error('Invalid Type: password can only be a String.');
        }
        this.password = password;
    }
}
// export User class to be imported into register.js
export default User;





// Get the NavBar
const navItems = document.getElementById("navItems");

try {
    var user = new User(navItems, navItems, navItems, navItems);
} catch (e) {
    console.error(e);
}

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