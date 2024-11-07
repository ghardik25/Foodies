const express = require('express');
const router = express.Router();

// Importing Controllers
const { signup } = require('../controllers/signup');
const { login } = require('../controllers/login');
const { getFeedback, addFeedback, deleteFeedback } = require('../controllers/feedback');
const { getBreakfast, addBreakfast, deleteBreakfast } = require('../controllers/breakfast');
const { getLunch, addLunch, deleteLunch } = require('../controllers/lunch');
const { getDinner, addDinner, deleteDinner } = require('../controllers/dinner');
const { deleteUser } = require('../controllers/deleteuser');


// Routes

// POST routes
router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/addfeedback').post(addFeedback);
router.route('/deletefeedback').post(deleteFeedback);
router.route('/deleteuser').post(deleteUser);
router.route('/addbreakfast').post(addBreakfast);
router.route('/addlunch').post(addLunch);
router.route('/adddinner').post(addDinner);
router.route('/deletebreakfast').post(deleteBreakfast);
router.route('/deletelunch').post(deleteLunch);
router.route('/deletedinner').post(deleteDinner);

// GET routes
router.route('/getfeedback').get(getFeedback);
router.route('/getbreakfast').get(getBreakfast);
router.route('/getlunch').get(getLunch);
router.route('/getdinner').get(getDinner);


// Exporting
module.exports = router;