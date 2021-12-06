const{gql} = require('apollo-server-express')

const userType = gql`
    type User{
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
        createUser{
            name: String
            lastName: String
            documentId: Number
            phone: String
            email: String!
            password: String!
        }: User
        updateUser{
            _id: ID!
            name: String
            lastName: String
            documentId: Number
            phone: String
            email: String!
            password: String!
        }: User
    }`;

module.exports = {userType}