const br = "\<br/\>";
const boldB = "\<b\>";
const boldE = "\</b\>";

const linkedinConner = "\<a\ href =\"https://www.linkedin.com/in/conner-cullity-677669292/\" target=\"_blank\"\>here\</a\>";

// Create Elements
var table = document.createElement("table");
var row = document.createElement("tr");

var content1 = document.createElement("td");
var content2 = document.createElement("td");

var imgConner = document.createElement("img");
var imgAiden = document.createElement("img");

// add classes for css
table.className = "aboutUs";
row.className = "aboutUs";
content1.className = "aboutUs";
content2.className = "aboutUs";

// Set image src and style
imgConner.src = "./images/conner.jpg";
imgConner.style = "margin-left: auto; margin-right: auto; display: block; width: 25%;";

imgAiden.src = "./images/conner.jpg";
imgAiden.style = "margin-left: auto; margin-right: auto; display: block; width: 25%;";

// add images to table content
content1.appendChild(imgConner);
content2.appendChild(imgAiden);

// add descriptions to our content
content1.innerHTML += br + boldB + "Conner Cullity" + boldE + br + br + "CEO of Techland Software since 2018." + br + br + "Grew up in Bowmanville Ontario and has always had" + br + "a passion in computers and an interest in how they work." + br + "It has been his lifelong goal to create software to make peoples" + br +"lives easier so that's why he started techland Software." + br + br + "You can view his LinkedIn profile " + linkedinConner + ". ";

content2.innerHTML += br + boldB + "Aiden Skinner" + boldE + br;

// add content to the row
row.appendChild(content1);
row.appendChild(content2);


// add row to table
table.appendChild(row);


// add table to body
document.body.appendChild(table);