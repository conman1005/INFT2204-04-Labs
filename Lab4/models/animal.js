const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.CONNECTION);


// mongoose.set('useCreateIndex', true);

// declare Schema
let Schema = mongoose.Schema;


// Animal schema
let animalSchema = new Schema({
    Zoo: {
        type: String,
        required: true
    },
    ScientificName: {
        type: String,
        required: true
    },
    CommonName: {
        type: String,
        required: true
    },
    GivenName: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    isTransportable: {
        type: Boolean,
        required: true
    }
}, {
    collection: 'Animals'
});

// Export schemas as models
module.exports.Animal = mongoose.model('Animals', animalSchema);