const enrollmentService = require('../services/enrollment')

const enrollmentResolvers = {
    Query:{
        getEnrollment: async(parent, args)=>{
            let enrollment = await enrollmentService.getEnrollments()
            return enrollment
        },
        getEnrollmentById: async(parent, args)=>{
            let enrollmentById = await enrollmentService.getEnrollmentById(args._id)
            return enrollmentById
        }
    },
    Mutation:{
        createEnrollment: async(parent, args)=>{
            let newEnrollment = await enrollmentService.createEnrollment(args)
            return newEnrollment
        },
        updateEnrollment: async(parent, args)=>{
            let updateEnrollment = await enrollmentService.updateEnrollment(args._id, args)
            return updateEnrollment
        }
    }
}

module.exports={
    enrollmentResolvers
}