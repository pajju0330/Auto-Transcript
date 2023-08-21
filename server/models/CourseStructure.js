const mongoose = require('mongoose');

const courseStructureSchema = new mongoose.Schema({
    CourseCode:{
        type:String
    },
    CourseTitle:{
        type:String
    },
    Lectures:{
        type:String
    },
    Tutorial:{
        type:String
    },
    Practical:{
        type:String
    },
    Credits:{
        type:String
    },
    grade:{
        type:String
    },
    Year:{
        type:String
    }
})

module.exports = mongoose.model('Course', courseStructureSchema);