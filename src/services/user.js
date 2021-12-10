const {User} = require('../models/user')

createUser = async(user) =>{
    let userInstance = new User(user)
    newUser = await userInstance.save()
    return newUser
}

getUser = async ()=>{
    let user = await User.find({})
    return user
}

getUserById = async(userId) =>{
    let userById = await User.findById(userId)
    return userById
}

updateUser = async (userId, user)=>{
    
    let new_user = User.findByIdAndUpdate(userId, user, {new: true})
    return new_user
}

updateProject = async(userId, projectId)=>{
    let user = await User.findByIdAndUpdate(UserId,{
        $push:{
            projects:ProjectId
        }
    })
    return user
}

module.exports = {
    createUser,
    getUser,
    getUserById,
    updateUser,
    updateProject
}