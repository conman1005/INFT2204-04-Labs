// import student model
const animalModel = require('../models/animal');


function loadAnimalData(req, res) {
    animalModel.Animal.find({}).then(function(animalList) {
        console.log(animalList);
        res.render('./animals/all-animals', {
            pageTitle: 'INFT 2202 - Animal List',
            animals: animalList
        })
    })
}

function editAnimalData(req, res) {
    //const id = "66206bdfd56b85986996dbf2"
    const id = req.body._id;
    animalModel.Animal.find({_id: id}).then(function(animalList) {
        console.log(animalList);
        res.render('./animals/edit-animal', {
            pageTitle: 'INFT 2202 - Edit Animal data',
            animals: animalList
        })
    })
}

function submitAnimalData(req, res) {
    //const id = "66206bdfd56b85986996dbf2"
    const id = req.body._id;
    let success = true;
    console.log("Submit Edit or New")

    if (success) {
        animalView(req, res);
        //window.location.search = "./animals";
    }
}

function loadAddAnimal(req, res) {
    res.render('./animals/entry-form', {
        pageTitle: 'INFT 2202 - Submit an Animal',
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
    animalView,
    loadAddAnimal,
    editAnimalData,
    submitAnimalData
};
