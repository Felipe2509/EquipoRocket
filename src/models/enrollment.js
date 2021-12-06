const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Project = require('./project')
const User = require('./user')

const EnrollmentSchema = new Schema({
    project_id:{
        type: Schema.Types.ObjectId,
        ref: Project,
        required: true
    },
    user_id:{
        type: Schema.Types.ObjectId,
        required: true
    }
})

module.exports=mongoose.model("Enrollment", EnrollmentSchema)
