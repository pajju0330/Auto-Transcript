const Course = require('../models/CourseStructure');l

const insertManyCourses = async (req, res) => {
    const coursesArray = req.body; 

    try {
        const insertedCourses = await Course.insertMany(coursesArray);
        res.status(201).json({ message: 'Courses inserted successfully', courses: insertedCourses });
    } catch (error) {
        res.status(500).json({ message: 'Error inserting courses', error: error.message });
    }
};

const getAllCourses = async (req, res) => {
    try {
        const allCourses = await Course.find();
        res.status(200).json(allCourses);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching courses', error: error.message });
    }
};

module.exports = {
    insertManyCourses,
    getAllCourses
};
