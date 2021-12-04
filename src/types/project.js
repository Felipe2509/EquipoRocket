const{gql} = require('apollo-server-express')

const projectType = gql`
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
        getProject:[Project]
        getPrjectById(_id:String):Project
    }
    type Mutation{
        createProject{
            name: String
            description: String
            topic: String
            owner: ID 
        }: Project
        updateProject{
            _id: ID!
            name: String
            description: String
            topic: String
        }: Project
    }`

module.exports={projectType}