///////////////////////////////
// Dependencies
//////////////////////////////
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require('cors');
const app = express();
const db = mongoose.connection;
requre('dotenv').config()


//////////////////////////////
// Controllers
//////////////////////////////


//////////////////////////////
// Port
/////////////////////////////
const PORT = process.env.PORT || 3000;


//////////////////////////////
// Database
//////////////////////////////
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI ,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);


////////////////////////////////
// Error/Success
////////////////////////////////
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", MONGODB_URI));
db.on("disconnected", () => console.log("mongo disconnected "));


//////////////////////////////
// Middleware
//////////////////////////////
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors())
app.use(methodOverride('_method'));


////////////////////////////////
// Routes
////////////////////////////////
app.get('/', (req, res) => {
    res.send('hello')
})

mongoose.connection.once('open', () => {
    console.log('Connected to Mongod...');
})

////////////////////////////////
// Listener
////////////////////////////////
app.listen(PORT, () => {
    console.log('listening on port ', PORT);
})
