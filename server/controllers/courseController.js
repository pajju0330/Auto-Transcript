const Course = require("../models/CourseStructure");

const insertManyCourses = async (req, res) => {
	const coursesArray = req.body;
	console.log(coursesArray);
	try {
		const insertedCourses = await Course.insertMany(coursesArray);
		res.status(201).json({
			message: "Courses inserted successfully",
			courses: insertedCourses,
		});
	} catch (error) {
		res.status(500).json({ message: "Error inserting courses", error: error.message });
	}
};

const getAllCourses = async (req, res) => {
	try {
		const allCourses = await Course.find();
		res.status(200).json(allCourses);
	} catch (error) {
		res.status(500).json({ message: "Error fetching courses", error: error.message });
	}
};

const verifyCourse = async (req, res) => {
	try {
		const coursesOfYear1 = await Course.find({ Year: "1" });
		const coursesOfYear2 = await Course.find({ Year: "2" });
		const coursesOfYear3 = await Course.find({ Year: "3" });
		const coursesOfYear4 = await Course.find({ Year: "4" });
		const data = [
			{ year: 1, status: coursesOfYear1.length>0 ? "Uploaded" : "Missing" },
			{ year: 2, status: coursesOfYear2.length>0 ? "Uploaded" : "Missing" },
			{ year: 3, status: coursesOfYear3.length>0 ? "Uploaded" : "Missing" },
			{ year: 4, status: coursesOfYear4.length>0 ? "Uploaded" : "Missing" },
		];
        res.status(200).json(data);
	} catch (err) {
		res.status(500).json({ message: "Error fetching courses", error: err.message });
	}
};
module.exports = {
	insertManyCourses,
	getAllCourses,
    verifyCourse,
};
