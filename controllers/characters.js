// ============== Dependencies ================= //
const express = require ('express')
const router = express.Router()
const Characters = require('../models/characters.js')

// ================ Routes ==================== //
// Index (GET)
router.get('/', (req, res) => {
    Characters.find({}, (error, foundCharacters) => {
        res.json(foundCharacters)
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
                img: 'https://media1.popsugar-assets.com/files/thumbor/JMYN1_C8jGVEj8CnZX9ihWnEmi0/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2013/01/01/5/301/3019466/2143ba2cbc768352_DA3_1_2/i/Robert-Crawley.jpg',
                first_name:'Robert',
                last_name: 'Crawley',
                née: 'none',
                dob: '1866',
                dod: 'still living',
                title: '7th Earl of Grantham',
                num_of_eps: 52,
                spouse_first_name: 'Cora',
                spouse_last_name: 'Crawley',
                spouse_née: 'Levinson',
                marriage_date: '1890',
                children: 'Mary Talbot', 'Edith Pelham', 'Sybil Branson'
            },
            {
                img: 'https://i.pinimg.com/originals/9f/2e/b8/9f2eb811e7c74c25c8d3697e81d55bcd.jpg',
                first_name: 'Cora',
                last_name: 'Crawley',
                née: 'Levinson',
                dob: '1868',
                dod: 'still living',
                title: 'Countess of Grantham',
                num_of_eps: 52,
                spouse_first_name: 'Robert',
                spouse_last_name: 'Crawley',
                née: 'n/a',
                marriage_date: '1890',
                children: 'Mary Talbot, Edith Pelham, Sybil Branson'
            },
            {
                img: 'https://openpsychometrics.org/tests/characters/test-resources/pics/DA/4.jpg',
                first_name: 'Charles',
                last_name: 'Carson',
                née: 'n/a',
                dob: '1856',
                dod: 'still living',
                title: 'Butler of Downton Abbey',
                num_of_eps: 52,
                spouse_first_name: 'Elsie',
                spouse_last_name: 'Carson',
                spouse_née: 'Hughes',
                marriage_date: '1925',
                children: 'none'
            },
            {
                img: 'https://i.pinimg.com/originals/a0/a1/26/a0a1260bbb77e77746c2bc77543602df.jpg',
                first_name: 'Elsie',
                last_name: 'Carson',
                née: 'Hughes',
                dob: '1862',
                dod: 'still living',
                title: 'Housekeeper of Downton Abbey',
                num_of_eps: 52,
                spouse_first_name: 'Charles',
                spouse_last_name: 'Carson',
                spouse_née: 'n/a',
                marriage_date: 1925,
                children: 'none'
            }

        ],
        (error, data) => {
            res.redirect('/')
        }
    )
})


// ================= Exporting =================== //
module.exports = router;
