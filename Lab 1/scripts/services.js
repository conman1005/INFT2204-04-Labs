// Made by Conner Cullity (100760244) and Aiden Skinner (100881254)
// Date Completed: 2024-02-05


// constant reused attributes
const br = "\<br/\>";
const boldB = "\<b\>";
const boldE = "\</b\>";

const contact = "\<a\ href =\"./contact.html\">Contact Us\</a\>";

// add spaces so content is not touching navbar
document.body.innerHTML += br + br;

// create elements and set attributes
var service = document.createElement("p");
var image = document.createElement("img");
image.setAttribute("width", "500");
image.setAttribute("height", "300");
image.setAttribute("margin", "auto");
image.setAttribute("alt", "Neon Rock Cover Art");
image.setAttribute("src", "./images/webhost.jpg");

// add image to service
service.appendChild(image);
service.setAttribute("class", "serviceBox");
service.appendChild(image);

// set text
service.innerHTML += br + boldB + "Web Hosting" + boldE + br + br + "For all of your web-hosting needs we have you covered. From simple data storage to advanced web hosting, we have hundreds of flexible options so you can get exactly as you need. "  + contact + " for a quote.";

// append service to body
document.body.appendChild(service);


// add spaces between content
document.body.innerHTML += br + br + br;

// create new attrabutes with same variables (as we don't need the old elements)
service = document.createElement("p");
image = document.createElement("img");
image.setAttribute("width", "500");
image.setAttribute("height", "300");
image.setAttribute("margin", "auto");
image.setAttribute("alt", "Neon Rock Cover Art");
image.setAttribute("src", "./images/programming.webp");

// add image to service
service.appendChild(image);
service.setAttribute("class", "serviceBox");
service.appendChild(image);

// set text
service.innerHTML += br + boldB + "Website Development" + boldE + br + br + "Your buisness needs a great weebsite that customers will go back to. So when it comes to building a website for your buisness, you need to go to the best developers. So " + contact +" to recieve your quote today.";

// append service to body
document.body.appendChild(service);

// add spaces between content
document.body.innerHTML += br + br + br;

// create new attrabutes with same variables (as we don't need the old elements)
service = document.createElement("p");
image = document.createElement("img");
image.setAttribute("width", "500");
image.setAttribute("height", "300");
image.setAttribute("margin", "auto");
image.setAttribute("alt", "Neon Rock Cover Art");
image.setAttribute("src", "./images/csharp.jpg");

// add image to service
service.appendChild(image);
service.setAttribute("class", "serviceBox");
service.appendChild(image);

// set text
service.innerHTML += br + boldB + "Application Development" + boldE + br + br + "We build custom applications for buisnesses to make their work easier. Whether you need to track inventory or keep track of sales we've got you covered. " + contact + " to recieve your quote today.";

// append service to body
document.body.appendChild(service);

// add spaces at end so bottom navbar doesn't cover content
document.body.innerHTML += br + br + br + br;