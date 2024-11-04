const roomModel = require('../models/roomModel');

const createRoom = async(req,res) => {
    try {
        const {RoomNumber, SharingType, Floor, AmountPerBed, SecurityDeposit, Facilities} = req.body
        const room = new roomModel({
            RoomNumber,
            SharingType,
            Floor,
            AmountPerBed,
            SecurityDeposit,
            Facilities
        })
        await room.save()
        res.status(201).json(room)
    } catch (error) {
        console.log("there is an error",error)
        res.status(500).json({message:"server error"})
    }
}

const fetchRoom = async(req, res) => {
    try {
        const rooms = await roomModel.find()
        if (rooms.length === 0){
            return res.status(404).json({message: "Rooms Not Found."})
        }
        res.status(200).json(rooms)
    }
    catch(error){
        console.log("There is an error", error)
        res.status(500).json({message: 'Server Error'})
    }
}

const updateRoom = async(req,res) => {
    try {
        const {RoomNumber, SharingType, Floor, AmountPerBed, SecurityDeposit, Facilities} = req.body
        const updatedRoom = await roomModel.findByIdAndUpdate(
            req.params.id,
            {RoomNumber, SharingType, Floor, AmountPerBed, SecurityDeposit, Facilities},)
        if(!updateRoom){
            return res.status(404).json({message:"Room Not Found."})
        }
        res.status(201).json(updatedRoom)

    } catch (error) {
        console.log("There is an error", error)
        res.status(500).json({message: 'Server Error'})
    }
}

module.exports = {createRoom, fetchRoom, updateRoom}