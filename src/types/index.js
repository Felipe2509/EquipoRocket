const {projectType } = require('./project')
const {userType } = require('./user')
const {enrollmentType} = require('./enrollment')
const {advanceType} = require('./advence')

const types = [projectType, userType, enrollmentType, advanceType]

module.exports={types}