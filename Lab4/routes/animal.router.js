const express = require('express');
const { animalView, loadAddAnimal, editAnimalData } = require('../controllers/animal.controller');

// Create an express router object
const router = express.Router();

// Handle the '/student' URL with a GET method to use studentView function
router.get('/animals', animalView);
router.get('/submit', loadAddAnimal);
router.get('/edit', editAnimalData);

// Export the router
module.exports = router;