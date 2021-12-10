const{gql} = require('apollo-server-express')

const enrollmentType = gql`
    type Enrollment{
        _id: ID!
        project_id: ID!
        user_id: ID!
    }
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
        budget: Int
        startDate: String
        endDate: String
        leader_id: ID
        status: String
    }
    type Query{
        getEnrollment: [Enrollment]
        getEnrollmentById(_id:String): Enrollment
    }
    type Mutation{
        createEnrollment(
            project_id: ID!
            user_id: ID!
        ): Enrollment
        updateEnrollment(
            _id: ID!
            project_id: ID!
            user_id: ID!
        ): Enrollment
    }`;
module.exports = {enrollmentType}