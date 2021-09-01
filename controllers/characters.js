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
    Characters.create(req.body, (error, createdCharacter) => {
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
                first_name:'Robert',
                last_name: 'Crawley',
                née: 'n/a',
                dob: '1866',
                dod: 'still living',
                title: '7th Earl of Grantham',
                num_of_eps: 52,
                quotes:
                    [
                        "I have given my life to Downton, I was born here and I hope to die here. I claim no career beyond the future of this house and the estate. It is my third parent and fourth child. Do I care about it? Yes, I do care!",
                        "Every mountain is 'unclimbable' until someone climbs it. So every ship is 'unsinkable' until it sinks.",
                        "They do say there's a wild man inside all of us."
                    ],
                spouse_first_name: 'Cora',
                spouse_last_name: 'Crawley',
                spouse_née: 'Levinson',
                marriage_date: '1890',
                children:
                    [
                        'Mary Talbot',
                        'Edith Pelham',
                        'Sybil Branson'
                    ]
            },
            {
                first_name: 'Cora',
                last_name: 'Crawley',
                née: 'Levinson',
                dob: '1868',
                dod: 'still living',
                title: 'Countess of Grantham',
                num_of_eps: 52,
                quotes:
                    [
                        "You are being tested. And do you know what they say, my darling? Being tested only makes you stronger.",
                        "Don't worry about me, I'm an American. Have gun, will travel!",
                        "No one ever warns you about bringing up daughters. You think it's going to be like 'Little Women.' Instead they're at each other's throats from dusk till dawn."
                    ],
                spouse_first_name: 'Robert',
                spouse_last_name: 'Crawley',
                née: 'n/a',
                marriage_date: '1890',
                children:
                    [
                        'Mary Talbot',
                        'Edith Pelham',
                        'Sybil Branson'
                    ]
            },
            {
                first_name: 'Charles',
                last_name: 'Carson',
                née: 'n/a',
                dob: '1856',
                dod: 'still living',
                title: 'Butler of Downton Abbey',
                num_of_eps: 52,
                quotes:
                    [
                        "If you're tired of style, you're tired of life.",
                        "I've never been called a liberal in my life and I don't intend to start now!",
                        "The business of life is the acquisition of memories. In the end, that's all there is."
                    ],
                spouse_first_name: 'Elsie',
                spouse_last_name: 'Carson',
                spouse_née: 'Hughes',
                marriage_date: '1925',
                children: ['none']
            },
            {
                first_name: 'Elsie',
                last_name: 'Carson',
                née: 'Hughes',
                dob: '1862',
                dod: 'still living',
                title: 'Housekeeper of Downton Abbey',
                num_of_eps: 52,
                quotes:
                [
                    "Go as far in life as God and luck will allow.",
                    "But until then, be your own master and call your own tune.",
                    "I may not be a woman of the world, but I don't live in a sack!"
                ],
                spouse_first_name: 'Charles',
                spouse_last_name: 'Carson',
                spouse_née: 'n/a',
                marriage_date: 1925,
                children: ['none']
            }

        ]
    )
})


////////////////////////
// Exporting
////////////////////////
module.exports = router;
