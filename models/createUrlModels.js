const mongoose = require('mongoose')

const createUrlSchema = new mongoose.Schema({
    fullUrl:{
        type: String,
        required: true
    },
    shortUrl:{
        type: String,
        required: true,
    },
    clicks:{
        type:Number,
        required: true,
        default: 0
    }
})


// Create a Tour model
const CreateUrl = mongoose.model('CreateUrl', createUrlSchema);

module.exports = CreateUrl;



