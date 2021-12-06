const{gql} = require('apollo-server-express')

const userType = gql`
    type user{
        _id: ID!
        name: String
        lastName: String
        documentId: Number
        phone: String
        role: String
        status: String
        email: String!
        password: String!
    }
    type Query{
        getUsers:[user]
        getUserById(_id:String): user
    }
    type Mutation{
        createUser(
            name: String
            lastName: String
            documentId: Number
            phone: String
            email: String!
            password: String!
        ): user
        updateUser(
            _id: ID !
            name: String
            lastName: String
            documentId: Number
            phone: String
            email: String!
            password: String!
        ): user
    }`;

module.exports = {userType}