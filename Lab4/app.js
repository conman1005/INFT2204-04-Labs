require('dotenv').config();

const express = require('express');
const pug = require('pug');
const animal = require('./routes/animal.router')

// intialize method
const app = express();
// use port from env or default to 3000 if not set
const PORT = process.env.PORT || 3000;

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