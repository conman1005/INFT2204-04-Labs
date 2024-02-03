const blank = document.createElement("p");
blank.innerHTML = "\<br/\>\<br/\>"
const info = document.createElement("p");
info.setAttribute("class", "roundCornersBox");
info.innerHTML = "Techland Software is a small independent game studio in Oshawa, Ontario,\<br/\>founded and run by Conner Cullity and Aiden Skinner.\<br/\>As a studio, we have developed multiple video games since our founding in 2018.";
document.body.appendChild(blank);
document.body.appendChild(info);