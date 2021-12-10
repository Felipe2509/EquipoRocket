const {modelNames} = require('mongoose')

const {advance} = require('../models/advance')


createAdvance = async(advance)=>{
    let advanceInstance = new this.advance(advance)
    let created_advance = await advanceInstance.save()
    return created_advance
}

getAdvance = async()=>{
    let advances = await advance.find({})
    return advances
}

getAdvanceById = async(advanceId)=>{
    let advances = await advance.findById(advanceId)
    return advances
}

updateAdvance = async(advanceId, advance)=>{
    let Advance =await this.advance.findByIdAndUpdate(advanceId, advance, {new:true})
    return Advance
}

module.exports = {
    createAdvance,
    getAdvance,
    getAdvanceById,
    updateAdvance
}