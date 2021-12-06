const {modelNames} = require("mongoose")

const enrollment  = require('../models/enrollment')

createEnrollment = async(enrollment)=>{
    let enrollmentInstance = new this.enrollment(enrollment)
    let created_enrollment = await enrollmentInstance.save()
    return created_enrollment
}

getEnrollments = async()=>{
    let enrollments = await enrollment.find({})
    return enrollments
}

getEnrollmentsById = async(enrollmentId)=>{
    let enrollment = await this.enrollment.findById(enrollmentId).exec()
    return enrollment
}

updateEnrollment = async(enrollmentId, enrollment)=>{
    let newEnrollment = await this.enrollment.findByIdAndReplace(enrollmentId, enrollment, {new:true})
    return newEnrollment    
}

module.exports = {
    createEnrollment,
    getEnrollments,
    getEnrollmentsById,
    updateEnrollment
}