// constant reused attributes
const br = "\<br/\>";
const boldB = "\<b\>";
const boldE = "\</b\>";

// add spaces so content is not touching navbar
document.body.innerHTML += br + br;

// create elements and set attributes
var game = document.createElement("p");
var image = document.createElement("img");
image.setAttribute("width", "300");
image.setAttribute("height", "500");
image.setAttribute("margin", "auto");
image.setAttribute("alt", "Neon Rock Cover Art");
image.setAttribute("src", "./images/neonrock.jpg");
// add image to service
game.appendChild(image);
game.setAttribute("class", "projectsBox");

// set text
game.innerHTML += br + boldB + "Neon Rock" + boldE + br + br + "A top-down action game where the player takes the role of  a rebel from the far future of 21XX." + br + "Dismantle a dystopian regime with the power of rock and roll! Experience heart-racing, blood-pumping action like never before as you race through a world of violence on a quest to set it free from the shackles of tyranny!";

// append service to body
document.body.appendChild(game);

// add spaces between content
document.body.innerHTML += br + br + br;


// create new attrabutes with same variables (as we don't need the old elements)
game = document.createElement("p");
image = document.createElement("img");
image.setAttribute("width", "300");
image.setAttribute("height", "500");
image.setAttribute("margin", "auto");
image.setAttribute("alt", "Jet Panther Cover Art");
image.setAttribute("src", "./images/jetpanther.jpg");
// add image to service
game.appendChild(image);
game.setAttribute("class", "projectsBox");

// set text
game.innerHTML += br + boldB + "Jet Panther" + boldE + br + br + "A return to the gritty world of Neon Rock where players take on the role of a masked street-samurai clad in a panther mask. Experience an improved version of the same blood-pumping action while solving the mysteries within and uncover the true identity of the masked man.";
// append service to body
document.body.appendChild(game);

// add spaces between content
document.body.innerHTML += br + br + br;


// create new attrabutes with same variables (as we don't need the old elements)
game = document.createElement("p");
image = document.createElement("img");
image.setAttribute("width", "300");
image.setAttribute("height", "500");
image.setAttribute("margin", "auto");
image.setAttribute("alt", "Twilight Syndrome Cover Art");
image.setAttribute("src", "./images/twilightsyndrome.jpg");
// add image to service
game.appendChild(image);
game.setAttribute("class", "projectsBox");

// set text
game.innerHTML += br + boldB + "Twilight Syndrome" + boldE + br + br + "Twilight Syndrome is an adventure game reminiscent of the classic point-and-click adventure games that defined early PC gaming. Step into the role of a mysterious, amnesiac detective, knowing nothing but his own name, \"D\".";
// append service to body
document.body.appendChild(game);

// add spaces at end so bottom navbar doesn't cover content
document.body.innerHTML += br + br + br + br;
