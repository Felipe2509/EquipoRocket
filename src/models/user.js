const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    documentId:{
        type: Number
    },
    name:{
        type: String
    },
    lastName:{
        type: String
    },
    phone:{
        type: String
    },
    role:{
        type: String
    },
    status:{
        type: String
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("User", UserSchema)