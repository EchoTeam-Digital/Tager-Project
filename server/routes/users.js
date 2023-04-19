const express = require('express')
const router = express.Router();

const User = require("../models/Users");


router.get('/test', (req, res) => res.send("Test success"));

router.get('/', (req, res) => {
    if (req.query.email) {
        User.findOne({ email: req.query.email })
            .then(user => res.json(user))
            .catch(err => {
                res.status(500).json({ error: 'Unable to find user' });
                console.log(err);
            });
    } else {
        User.find()
            .then(users => res.json(users))
            .catch(err => {
                res.status(500).json({ error: 'Unable to find users' });
                console.log(err);
            });
    }
});

router.post('/add', async (req, res) => {
    const { email } = req.body;
    try {
        // Check if a user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }

        // If no user with the same email exists, create a new user
        const newUser = await User.create(req.body);
        res.json({ msg: 'User added successfully' });
    } catch (err) {
        res.status(400).json({ error: 'Unable to add this user' });
    }
});


module.exports = router;







// router.get('/', (req, res) => {
//   Book.find()
//     .then(books => res.json(books))
//     .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
// });

// // @route GET api/books/:id
// // @description Get single book by id
// // @access Public
// router.get('/:id', (req, res) => {
//   Book.findById(req.params.id)
//     .then(book => res.json(book))
//     .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
// });

// // @route GET api/books
// // @description add/save book
// // @access Public
// router.post('/', (req, res) => {
//   Book.create(req.body)
//     .then(book => res.json({ msg: 'Book added successfully' }))
//     .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
// });

// // @route GET api/books/:id
// // @description Update book
// // @access Public
// router.put('/:id', (req, res) => {
//   Book.findByIdAndUpdate(req.params.id, req.body)
//     .then(book => res.json({ msg: 'Updated successfully' }))
//     .catch(err =>
//       res.status(400).json({ error: 'Unable to update the Database' })
//     );
// });

// // @route GET api/books/:id
// // @description Delete book by id
// // @access Public
// router.delete('/:id', (req, res) => {
//   Book.findByIdAndRemove(req.params.id, req.body)
//     .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
//     .catch(err => res.status(404).json({ error: 'No such a book' }));
// });

// module.exports = router;