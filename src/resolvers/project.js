constprojectService = require('../services/project')

const projectResolvers = {
    Query:{
        getProject: async(parent, args)=>{
            let project = projectService.getProjects()
            return project
        },
        getProjectById: async(parent, args)=>{
            let project = ProjectService.getProjectById(args._id)
            return project
        },
        Mutation:{
            createProject: async(parent, args)=>{
                let project = projectService.createProject(args)
                return project
            },
            updateProject: async(parent, args)=>{
                let project = projectService.updateProject(args._id, args)
                return project
            }
        }
    }
}


module.exports= {
    projectResolvers
}