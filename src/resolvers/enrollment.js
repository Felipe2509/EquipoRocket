const enrollmentService = require('../services/enrollment')

const enrollmentResolvers = {
    Query:{
        getEnrollment: async(parent, args)=>{
            let enrollment = await enrollmentService.getEnrollments()
            return enrollment
        },
        getEnrollmentById: async(parent, args)=>{
            let enrollment = await enrollmentService.getEnrollmentById(args._id)
            return enrollment
        },
        getEnrollmentByIdUser: async(parent, args)=>{
            let enrollment = await enrollmentService.getEnrollmentByIdUser(args.user_id)
            return enrollment
        }
    },
    Mutation:{
        createEnrollment: async(parent, args)=>{
            let enrollment = await enrollmentService.createEnrollment(args)
            return enrollment
        },
        updateEnrollment: async(parent, args)=>{
            let enrollment = await enrollmentService.updateEnrollment(args._id, args)
            return enrollment
        }
    }
}

module.exports={
    enrollmentResolvers
}