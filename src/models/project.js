const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user')

const ProjectSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    generalObjective:{
        type: String
    },
    specificObjectives:{
        type: Array
    },
    budget:{
        type: Number
    },
    startDate:{
        type: Date
    },
    endDate:{
        type: Date
    },
    leader_id:{
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    status:{
        type: String
    }
})

module.exports = mongoose.model("Project", ProjectSchema)