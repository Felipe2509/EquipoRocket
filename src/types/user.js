const{gql} = require('apollo-server-express')

const userType = gql`
    type User{
        _id: ID!
        name: String
        lastName: String
        documentId: Int
        phone: String
        role: String
        status: String
        email: String!
        password: String!
    }
    type Query{
        getUser:[User]
        getUserById(_id:String): User
    }
    type Mutation{
        createUser(
            name: String
            lastName: String
            documentId: Int
            phone: String
            email: String!
            password: String!
        ): User
        updateUser(
            _id: ID!
            name: String
            lastName: String
            documentId: Int
            phone: String
            email: String!
            password: String!
        ): User
    }`;

module.exports = {userType}