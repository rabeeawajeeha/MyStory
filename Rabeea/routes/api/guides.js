const express = require('express');
const router = express.Router();

// Guide Model
const Guide = require('../../models/Guides');

// @route   GET api/guides
// @desc    Get All guides
// @access  Public
router.get('/', (req, res) => {
    Guide.find()
        .sort({
            date: -1
        })
        .then(guides => res.json(guides));
});

// @route   GET api/guides/:id
// @desc    Get specific guide
// @access  Public
router.get('/:id', (req, res) => {
    Guide.find()
        .sort({
            date: -1
        })
        .then(guide => res.json(guide));
});

// @route   POST api/guides
// @desc    Create An Guide
// @access  Public
router.post('/', (req, res) => {
    const newGuide = new Guide({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        imgURL: req.body.imgURL
    });

    newGuide.save().then(guide => res.json(guide));
});

// @route   UPDATE api/guides/edit/:id
// @desc    Update A Guide
// @access  Public
router.post('/edit/:id', (req, res, next) => {
    Guide.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
            res.json(post);
        });
});


// @route   DELETE api/guides/delete/:id
// @desc    Delete A Guide
// @access  Public
// router.delete('/delete/:id', (req, res) => {
//     Guide.findById(req.params.id)
//         .then(guide => guide.remove().then(() => res.json({
//             success: true
//         })))
//         .catch(err => res.status(404).json({
//             success: false
//         }));
// });

module.exports = router;
