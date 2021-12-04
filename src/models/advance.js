const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Project = require('./project')

const AdvanceSchema = new Schema({
    project_id:{
        type: Schema.Types.ObjectId,
        ref: Project,
        required: true
    },
    addDate:{
        type: Date,
        required: true
    },
    description:{
        type: String
    },
    Observations:{
        type: String
    }
})

module.exports = mongoose.model("Advance", AdvanceSchema)