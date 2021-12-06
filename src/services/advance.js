const {modelNames} = require('mongoose')

const advance = require('../models/advance')
const projectService = require('./project')

createAdvance = async(advance)=>{
    let advanceInstance = new this.advance(advance)
    let created_advance = await advanceInstance.save()
    return created_advance
}

getAdvances = async()=>{
    let advances = await advance.find({})
    return advances
}

getAdvancesById = async(advanceId)=>{
    let advances = await advance.findById(advanceId)
    return advances
}

updateAdvance = async(advanceId, advance)=>{
    let advance =await this.advance.findByIdAndUpdate(advanceId, advance, {new:true})
    return advance
}

module.exports = {
    createAdvance,
    getAdvances,
    getAdvancesById,
    updateAdvance
}