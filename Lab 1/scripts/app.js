// Made by Conner Cullity (100760244) and Aiden Skinner (100881254)
// Date Completed: 2024-02-05

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