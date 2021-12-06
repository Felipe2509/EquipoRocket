const{gql} = require('apollo-server-express')

const advanceType = gql`
    type Advance{
        _id: ID!
        project_id: ID!
        addDate: Date!
        description: String
        Observations: String
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
        getAdvances: [Advance]
        getAdvancesById(_id: ID): Advance
    }
    type Mutation{
        createAdvance{
            project_id: ID!
            addDate: Date!
            description: String
            Observations: String
        }: Advance
        updateAdvance{
            _id: ID!
            project_id: ID!
            addDate: Date!
            description: String
            Observations: String
        }: Advance
    }
`

module.exports =  {advanceType}