//////////////////////////
// Dependencies
//////////////////////////
const mongoose = require('mongoose')

//////////////////////////
// Character Schema
//////////////////////////
const characterSchema = new mongoose.Schema(
    {
        name:
            [
                {
                    first: String,
                    last: String,
                    née: String
                }
            ],
        dob: String,
        dod: String,
        title: String,
        spouse:
            [
                {
                    first: String,
                    last: String,
                    née: String,
                    marriage_date: String
                }
            ],
        children: [String],
        num_of_eps: Number,
        quotes: [String]
    }
)

const Characters = mongoose.model('Character', characterSchema)


//////////////////////////
// Exporting
//////////////////////////
module.exports = Characters;
