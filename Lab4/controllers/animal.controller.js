// import mongoose and dotenv
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.CONNECTION);

const moment = require('moment');



// import animal model
const animalSchema = require('../models/animal').Animal;
//const Animal = mongoose.model("Animal", animalSchema); 

// load animal date for animals list
function loadAnimalData(req, res) {
    // Set start index if Next/Previous buttons were pressed, othewise set to 0
    let startIndex = req.query.startIndex | 0;
    
    let startPage = req.query.startPage - 1 | false;

    if (startPage) {
        startIndex = startPage * 30;
    }

    let pageNo = Math.ceil(startIndex / 30);

    // Find Animals
    animalSchema.find({}).then(function(animalList) {
        // Initialize Dates array to hold dates converted from UTC
        let dates = [];
        // Convert UTC Format to YYYY-MM-DD
        for (let i = 0; i < animalList.length; i++) {
            dates.push(moment(animalList[i].DOB).format('YYYY-MM-DD'));
            //console.log(dates[i], animalList[i].DOB);
        }

        // render page
        res.render('./animals/all-animals', {
            pageTitle: 'INFT 2202 - Animal List',
            animals: animalList,
            dates: dates,
            startIndex: startIndex,
            pageNo: pageNo + 1,
            lastPage: Math.ceil(animalList.length / 30)
        })
    })
}

// load edit form
function editAnimalData(req, res) {
    //const id = "66206bdfd56b85986996dbf2"
    const id = req.body._id;
    animalSchema.find({_id: id}).then(function(animalList) {
        //console.log(animalList);
        res.render('./animals/edit-animal', {
            pageTitle: 'INFT 2202 - Edit Animal data',
            animals: animalList,
            // Convert UTC Date to YYY-MM-DD Format using moment
            localizedDate: (moment(animalList[0].DOB).format('YYYY-MM-DD')),
            now: moment().format('YYYY-MM-DD')
        })
    })
}

async function submitAnimalData(req, res) {
    //const id = "66206bdfd56b85986996dbf2"
    // get ID from POST
    const id = req.body._id || false;
    // success bool to indicate successful submission
    let success = true;
    console.log("Submit Edit or New")

    // Get the actual age from subtracting the birth year from today's year
    //Age = new Date().getFullYear() - parseInt(moment(req.body.DOB).format('YYYY'));
    //Age = parseInt(moment(req.body.DOB, 'YYYY').fromNow(true).slice(0, 4));

    // Calculate age from Date of Birth using MomentJS
    Age = moment().diff(req.body.DOB, 'years');
    console.log(moment().diff(req.body.DOB, 'years'));
    

    // Set Update Object
    const update = {
        //$set: {
            Zoo: req.body.Zoo,
            ScientificName: req.body.ScientificName,
            CommonName: req.body.CommonName,
            GivenName: req.body.GivenName,
            Gender: req.body.Gender,
            DOB: req.body.DOB,
            Age: Age,
            isTransportable: req.body.isTransportable,
        //},
    };

    // check if ID was given
    if (id) {
        // Search Parameters for ID
        const id = { _id: req.body._id}

        // set Update object
        const set = {
            $set: {
                update
            }
        }
        
        //const result = await animals.updateOne(id, update, options);
        // Find and Update
        const doc = await animalSchema.findOneAndUpdate(id, update); 
  
        //const output = await doc.update({update});
        console.log(doc);
    } else {
        const animal = new animalSchema(update);
        await animal.save();
    }

    // Send to animalView if successful
    if (success) {
        animalView(req, res);
        //window.location.search = "./animals";
    }
}

// render entry form
function loadAddAnimal(req, res) {
    res.render('./animals/entry-form', {
        pageTitle: 'INFT 2202 - Submit an Animal',
        now: moment().format('YYYY-MM-DD'),
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
