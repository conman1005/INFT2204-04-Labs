// import student model
const animalModel = require('../models/animal');

function loadAnimalData(req, res) {
    console.log("hi");
    animalModel.Animal.find({}).then(function(animalList) {
        console.log(animalList);
        res.render('./animals/all-animals', {
            pageTitle: 'INFT 2202 - Animal List',
            animals: animalList
        })
    })
}

/**
 * renders student view
 * @param {*} req 
 * @param {*} res 
 */
function animalView(req, res) {
     loadAnimalData(req, res);
    
}

// Exports
module.exports = {
    animalView
};
