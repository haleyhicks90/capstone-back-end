//////////////////////////
// Dependencies
//////////////////////////
const mongoose = require('mongoose')

//////////////////////////
// Character Schema
//////////////////////////
const characterSchema = new mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        née: String,
        dob: String,
        dod: String,
        title: String,
        num_of_eps: Number,
        quotes: [String],
        spouse_first_name: String,
        spouse_last_name: String,
        spouse_née: String,
        marriage_date: String,
        children: [String]
    }
)

const Characters = mongoose.model('Character', characterSchema)


//////////////////////////
// Exporting
//////////////////////////
module.exports = Characters;
