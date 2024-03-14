// Made by Conner Cullity (100760244) and Aiden Skinner (100881254)
// Date Completed: 2024-02-05

// create blank p element for spaces
const blank = document.createElement("p");
blank.innerHTML = "\<br/\>\<br/\>"
// create info p for description and set class for css
const info = document.createElement("p");
info.setAttribute("class", "roundCornersBox");
// set info text
info.innerHTML = "Techland Software is a small independent game studio in Oshawa, Ontario,\<br/\>founded and run by Conner Cullity and Aiden Skinner.\<br/\>As a studio, we have developed multiple video games since our founding in 2018.";
// add blank and info to body
document.body.appendChild(blank);
document.body.appendChild(info);