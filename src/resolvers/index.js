const {projectResolvers} = require('./project')
const {userResolvers} = require('./user')
const {enrollmentResolvers} = require('./enrollment')
const {advanceResolvers} = require('./advance')

const resolvers = [projectResolvers, userResolvers, enrollmentResolvers, advanceResolvers]

module.exports = {resolvers}