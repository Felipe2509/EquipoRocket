const { modelNames } = require("mongoose")

const {Project} = require('../models/project')
const {userService} = require('./user')

createProject = async(project)=>{
    let projectInstance = new Project(project)
    let created_project = await projectInstance.save()
    await userService.updateProject(porject['leader_id'], created_project[_id])
    return created_project
}

getProjects = async()=>{
    let projects = await Project.find({})
    return projects
}

getProjectById = async(projectId)=>{
    let project = await Project.findById(projectId).exec()
    return project
}

updateProject = async(projectId, project)=>{
    let newProject = await Project.findByIdAndUpdate(projectId, project, {new:true})
    return newProject
}

module.exports = {
    createProject,
    getProjects,
    getProjectById,
    updateProject
}