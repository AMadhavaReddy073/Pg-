const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
    tenantName: {
        type: String,
        required: true
    },
    tenantPhone: {
        type: String,
        required: true
    },
    tenantEmail: {
        type: String,
        required: true
    },
    startDate:{
        type : Date, required: true
    },
    endDate:{
        type: Date, 
    }  
})


module.exports = mongoose.model('tenantModel',tenantSchema)