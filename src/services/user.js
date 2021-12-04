const User = require('../models/user')

createUser = async(user) =>{
    let userInstance = new User(user)
    user = await userInstance.save()
    return user
}

getUser = async ()=>{
    let user = await User.find({})
    return user
}

getUserById = async(userId) =>{
    let user = await User.findById(userId).populate('projects')
    return user
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