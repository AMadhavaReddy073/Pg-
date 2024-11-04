const mongoose = require('mongoose')

const pgSchema = new mongoose.Schema ({
    pgName:{
        type :String, required:true
    },
    pgOwnerName:{
        type: String, required : true
    },
    pgType:{
        type: String, required: true
    },
    pgAddress:{
        type : String, required: true
    },
    pgFacilities:{
        type: String, required : true
    }
    
})


module.exports = mongoose.model('pgModel',pgSchema)