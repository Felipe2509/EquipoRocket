const{gql} = require('apollo-server-express')

const projectType = gql`
    type User{
        _id: ID!
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
        budget: Int
        startDate: String
        endDate: String
        leader_id: ID
        status: String
    }
    type Query{
        getProject:[Project]
        getProjectById(_id:String): Project
    }
    type Mutation{
        createProject(
            name: String
            generalObjective: String
            specificObjectives: String
            budget: Int
            startDate: String
            endDate: String
            leader_id: ID
            status: String
        ): Project
        updateProject(
            _id: ID!
            name: String
            generalObjective: String
            specificObjectives: String
            budget: Int
            startDate: String
            endDate: String
            leader_id: ID
            status: String
        ): Project
    }`;

module.exports={projectType}