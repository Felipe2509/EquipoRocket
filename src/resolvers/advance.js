const advanceService = require('../services/advance')

const advanceResolvers={
    Query:{
        getAdvance: async(parent, args)=>{
            let advance = await advanceService.getAdvance()
            return advance
        },
        getAdvanceById: async(parent, args)=>{
            let advanceById = await advanceService.getAdvanceById(args._id)
            return advanceById
        }
    },
    Mutation:{
        createAdvance: async(parent, args)=>{
        let Advance = await advanceService.createAdvance(args)
            return Advance
        },
        updateAdvance: async(parent, args)=>{
            let updateAdvance = await advanceService.updateAdvance(args._id, args)
            return updateAdvance
        }
    }
}

module.exports={
    advanceResolvers
}