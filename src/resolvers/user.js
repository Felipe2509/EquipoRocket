const userService = require('../services/user')

const userResolvers = {
    Query:{
        getusers:async(parent, args)=>{
            //logica del proceso
            let users = userService.getUsers()
            return users
        },
        getUserById: async(parent, args)=>{
            let user = await userService.getUserById(args._id)
            return user
        }

    },
    Mutation:{
        createUser: async(parent, args) =>{
            let user = await userService.CreateUser(args)
            return user
        },
        updateUser: async(paren, args)=>{
            let user_update = userService.updateUser(args._id, args)
            return user_update
        }
    }
}

module.exports = {
    userResolvers
}