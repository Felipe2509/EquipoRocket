const { model } = require("mongoose");

const{gql} = require('apollo-server-express')

const userType = gql`
    type User{
        _id: ID !
        name: String
        lastName: String
        phone: String
        role: String
        status: String
        email: String!
        password: String!
    }
    type Project{
        _id: ID!
        name: String
        generalObjective: String
        specificObjectives: String
        budget: Number
        startDate: Date
        endDate: Date
        leader_id: Schema.Types.ObjectId
        status: String
    }
    type Query{
        getUsers:[User]
        getUserById(_id:String): User
    }
    type Mutation{
        createUser(
            name: String
            lastName: String
            phone: String
            email: String!
            password: String!
        ): User
        updateUser(
            _id: ID !
            name: String
            lastName: String
            phone: String
            email: String!
            password: String!
        ): User
    }`;

module.exports = {userType}