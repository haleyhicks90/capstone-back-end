//////////////////////////
// Dependencies
//////////////////////////
const express = require ('express')
const router = express.Router()
const Characters = require('../models/characters.js')


//////////////////////////
// Routes
//////////////////////////

// Index (GET)
router.get('/', (req, res) => {
    Characters.find({}, (error, foundCharacters) => {
        res.json
    })
})

// Delete (DELETE)
router.delete('/:id', (req, res) => {
    Characters.findByIdAndRemove(req.params.id, (error, deletedCharacter) => {
        res.json(deletedCharacter)
    })
})

// Create (POST)
router.post('/', (req, res) => {
    Characters.create(res.body, (error, createdCharacter) => {
        res.json(createdCharacter)
    })
})

// Update (PUT)
router.put('/:id', (req, res) => {
    Characters.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedCharacter) => {
        res.json(updatedCharacter)
    })
})

// Seed (GET)
router.get('/seed', (req, res) => {
    Characters.create(
        [
            {
                name:
                    [
                        {
                            first: 'Robert',
                            last: 'Crawley',
                            née: 'n/a'
                        }
                    ],
                dob: '1866',
                dod: 'still living',
                title: '7th Earl of Grantham',
                spouse:
                    [
                        {
                            first: 'Cora',
                            last: 'Crawley',
                            née: 'Levinson',
                            marriage_date: '1890'
                        }
                    ],
                children:
                    [
                        'Mary Talbot',
                        'Edith Pelham',
                        'Sybil Branson'
                    ],
                num_of_eps: 52,
                quotes:
                    [
                        "I have given my life to Downton, I was born here and I hope to die here. I claim no career beyond the future of this house and the estate. It is my third parent and fourth child. Do I care about it? Yes, I do care!",
                        "Every mountain is 'unclimbable' until someone climbs it. So every ship is 'unsinkable' until it sinks.",
                        "They do say there's a wild man inside all of us."
                    ]
            },
            {
                name:
                    [
                        {
                            first: 'Cora',
                            last: 'Crawley',
                            née: 'Levinson'
                        }
                    ],
                dob: '1868',
                dod: 'still living',
                title: 'Countess of Grantham',
                spouse:
                    [
                        {
                            first: 'Robert',
                            last: 'Crawley',
                            née: 'n/a',
                            marriage_date: '1890'
                        }
                    ],
                children:
                    [
                        'Mary Talbot',
                        'Edith Pelham',
                        'Sybil Branson'
                    ],
                num_of_eps: 52,
                quotes:
                    [
                        "You are being tested. And do you know what they say, my darling? Being tested only makes you stronger.",
                        "Don't worry about me, I'm an American. Have gun, will travel!",
                        "No one ever warns you about bringing up daughters. You think it's going to be like 'Little Women.' Instead they're at each other's throats from dusk till dawn."
                    ]
            },
            {
                name:
                    [
                        {
                            first: 'Charles',
                            last: 'Carson',
                            née: 'n/a
                        }
                    ],
                dob: '1856',
                dod: 'still living',
                title: 'Butler of Downton Abbey',
                spouse:
                    [
                        {
                            first: 'Elsie',
                            last: 'Carson',
                            née: 'Hughes',
                            marriage_date: '1925'
                        }
                    ],
                children:
                    [
                        'none'
                    ],
                num_of_eps: 52,
                quotes:
                    [
                        "If you're tired of style, you're tired of life.",
                        "I've never been called a liberal in my life and I don't intend to start now!",
                        "The business of life is the acquisition of memories. In the end, that's all there is."
                    ]
            },


        ]
    )
})


////////////////////////
// Exporting
////////////////////////
module.exports = router;
