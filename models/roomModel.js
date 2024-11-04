const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema ({
    RoomNumber:{
        type :Number, required:true
    },
    SharingType:{
        type: String, required : true
    },
    Floor:{
        type: Number, required: true
    },
    AmountPerBed:{
        type : Number, required: true
    },
    SecurityDeposit:{
        type: Number, required : true
    },
    Facilities:{
        type: String , required : true
    }
    
})


module.exports = mongoose.model('roomModel',roomSchema)