// import mongoose and dotenv
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.CONNECTION);



// import animal model
const animalSchema = require('../models/animal').Animal;
//const Animal = mongoose.model("Animal", animalSchema); 

function loadAnimalData(req, res) {
    animalSchema.find({}).then(function(animalList) {
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
    animalSchema.find({_id: id}).then(function(animalList) {
        console.log(animalList);
        res.render('./animals/edit-animal', {
            pageTitle: 'INFT 2202 - Edit Animal data',
            animals: animalList
        })
    })
}

async function submitAnimalData(req, res) {
    //const id = "66206bdfd56b85986996dbf2"
    const id = req.body._id || false;
    let success = true;
    console.log("Submit Edit or New")

    
    // Insert if no ID matches
    const options = { upsert: true };

    // Set Update Object
    const update = {
        //$set: {
            Zoo: req.body.Zoo,
            ScientificName: req.body.ScientificName,
            CommonName: req.body.CommonName,
            GivenName: req.body.GivenName,
            Gender: req.body.Gender,
            DOB: req.body.DOB,
            Age: req.body.Age,
            isTransportable: req.body.isTransportable,
        //},
    };

    if (id) {
        // Search Parameters for ID
        const id = { _id: req.body._id}

        const set = {
            $set: {
                update
            }
        }
        
        //const result = await animals.updateOne(id, update, options);
        const doc = await animalSchema.findOneAndUpdate(id, update); 
  
        //const output = await doc.update({update});
        console.log(doc);
    } else {
        const animal = new animalSchema(update);
        await animal.save();
    }

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
