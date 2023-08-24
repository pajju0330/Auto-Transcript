const express = require('express');
const router = express.Router();

const courseController = require('../controllers/courseController');

// Define routes
router.get('/verify', courseController.verifyCourse);
router.post('/', courseController.insertManyCourses);
router.get('/', courseController.getAllCourses);

module.exports = router;
