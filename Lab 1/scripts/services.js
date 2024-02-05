const br = "\<br/\>";
const boldB = "\<b\>";
const boldE = "\</b\>";

const contact = "\<a\ href =\"./contact.html\">Contact Us\</a\>";

document.body.innerHTML += br + br;

var service = document.createElement("p");
var image = document.createElement("img");
image.setAttribute("width", "500");
image.setAttribute("height", "300");
image.setAttribute("margin", "auto");
image.setAttribute("alt", "Neon Rock Cover Art");
image.setAttribute("src", "./images/webhost.jpg");
service.appendChild(image);
service.setAttribute("class", "serviceBox");
service.appendChild(image);
service.innerHTML += br + boldB + "Web Hosting" + boldE + br + br + "For all of your web-hosting needs we have you covered. From simple data storage to advanced web hosting, we have hundreds of flexible options so you can get exactly as you need. "  + contact + " for a quote.";
document.body.appendChild(service);

document.body.innerHTML += br + br + br;

service = document.createElement("p");
image = document.createElement("img");
image.setAttribute("width", "500");
image.setAttribute("height", "300");
image.setAttribute("margin", "auto");
image.setAttribute("alt", "Neon Rock Cover Art");
image.setAttribute("src", "./images/programming.webp");
service.appendChild(image);
service.setAttribute("class", "serviceBox");
service.appendChild(image);
service.innerHTML += br + boldB + "Website Development" + boldE + br + br + "Your buisness needs a great weebsite that customers will go back to. So when it comes to building a website for your buisness, you need to go to the best developers. So " + contact +" to recieve your quote today.";
document.body.appendChild(service);

document.body.innerHTML += br + br + br;

service = document.createElement("p");
image = document.createElement("img");
image.setAttribute("width", "500");
image.setAttribute("height", "300");
image.setAttribute("margin", "auto");
image.setAttribute("alt", "Neon Rock Cover Art");
image.setAttribute("src", "./images/csharp.jpg");
service.appendChild(image);
service.setAttribute("class", "serviceBox");
service.appendChild(image);
service.innerHTML += br + boldB + "Application Development" + boldE + br + br + "We build custom applications for buisnesses to make their work easier. Whether you need to track inventory or keep track of sales we've got you covered. " + contact + " to recieve your quote today.";
document.body.appendChild(service);

document.body.innerHTML += br + br + br + br;