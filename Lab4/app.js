/*
    Authour: Conner Cullity (100760244)
    Date: 2024/04/19
    FYI: Aiden Skinner did not contribute to this Lab at all
*/

require('dotenv').config();

const express = require('express');
const pug = require('pug');
const animal = require('./routes/animal.router')

// intialize method
const app = express();
// use port from env or default to 3000 if not set
const PORT = process.env.PORT || 3000;

// import body parser (Credit: https://stackoverflow.com/questions/5710358/how-to-access-post-form-fields-in-express)
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// use it
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies


// configure routes
app.use('/', animal);

// setup template engine
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

app.get('/', (req, res) => {
    res.render('./index', {
        pageTitle: "INFT 2202 - Home"
    })
    console.log("hi");
});

// Listent on port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})