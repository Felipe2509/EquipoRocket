const advanceService = require('../services/advance')

const advanceResolvers={
    Query:{
        getAdvance: async(parent, args)=>{
            let advance = await advanceService.getAdvance()
            return advance
        },
        getAdvanceById: async(parent, args)=>{
            let advance = await advanceService.getAdvanceById(args._id)
            return advance
        },
        getAdvanceByIdProject: async(parent, args)=>{
            let advance = await advanceService.getAdvanceByIdProject(args.project_id)
            return advance
        }
    },
    Mutation:{
        createAdvance: async(parent, args)=>{
        let Advance = await advanceService.createAdvance(args)
            return Advance
        },
        updateAdvance: async(parent, args)=>{
            let Advance = await advanceService.updateAdvance(args._id, args)
            return Advance
        }
    }
}

module.exports={
    advanceResolvers
}