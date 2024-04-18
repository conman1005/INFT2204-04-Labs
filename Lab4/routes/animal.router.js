const express = require('express');
const { animalView } = require('../controllers/animal.controller');

// Create an express router object
const router = express.Router();

// Handle the '/student' URL with a GET method to use studentView function
router.get('/animals', animalView);

// Export the router
module.exports = router;