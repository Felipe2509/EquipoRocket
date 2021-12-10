const{gql} = require('apollo-server-express')


const advanceType = gql`


    type Advance{
        _id: ID!
        project_id: ID!
        addDate: String!
        description: String
        Observations: String
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
        getAdvance: [Advance]
        getAdvanceById(_id: ID): Advance
    }
    type Mutation{
        createAdvance(
            project_id: ID!
            addDate: String!
            description: String
            Observations: String
        ): Advance
        updateAdvance(
            _id: ID!
            project_id: ID!
            addDate: String!
            description: String
            Observations: String
        ): Advance
    }`;

module.exports =  {advanceType}