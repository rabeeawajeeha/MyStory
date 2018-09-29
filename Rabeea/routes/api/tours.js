const express = require('express');
const router = express.Router();

// Tour Model
const Tour = require('../../models/Tours');

// @route   GET api/tours
// @desc    Get All tours
// @access  Public
router.get('/', (req, res) => {
    Tour.find()
        .sort({
            date: -1
        })
        .then(tours => res.json(tours));
});

// @route   GET api/tours/:id
// @desc    Get specific tour
// @access  Public
router.get('/:id', (req, res) => {
    Tour.find()
        .sort({
            date: -1
        })
        .then(tour => res.json(tour));
});

// @route   POST api/tours
// @desc    Create An Tour
// @access  Public
router.post('/', (req, res) => {
    const newTour = new Tour({
        TourName: req.body.TourName,
        Liked: req.body.Liked,
        TourDesc: req.body.TourDesc,
        imgURL: req.body.imgURL
    });

    newTour.save().then(tour => res.json(tour));
});

// @route   UPDATE api/tours/edit/:id
// @desc    Update A Tour
// @access  Public
router.post('/edit/:id', (req, res, next) => {
    Tour.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


// @route   DELETE api/tours/delete/:id
// @desc    Delete A Tour
// @access  Public
// router.delete('/delete/:id', (req, res) => {
//     Tour.findById(req.params.id)
//         .then(tour => tour.remove().then(() => res.json({
//             success: true
//         })))
//         .catch(err => res.status(404).json({
//             success: false
//         }));
// });

module.exports = router;
