const mongoose = require('mongoose');

const courseStructureSchema = new mongoose.Schema({
    coursecode:{
        type:String
    },
    courseTitle:{
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
    credits:{
        type:String
    },
    grade:{
        type:String
    },
    year:{

    }
})

module.exports = mongoose.model('Course', courseStructureSchema);