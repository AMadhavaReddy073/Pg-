const pgModel = require('../models/pgModel');

const createPg = async(req,res)=> {
    try {
        const {pgName,pgOwnerName,pgType,pgAddress,pgFacilities} = req.body
        const pg = new pgModel({
            pgName,
            pgOwnerName,
            pgType,
            pgAddress,
            pgFacilities,
        })
        await pg.save()
        res.status(201).json(pg)
    }
    catch(error){
        console.log("there is an error",error)
        res.status(500).json({message:"server error"})
    }
}

const fetchPg = async(req, res) => {
    try {
        const pgs = await pgModel.find()
        if (pgs.length === 0){
            return res.status(404).json({message: "Pgs Not Found."})
        }
        res.status(200).json(pgs)
    }
    catch(error){
        console.log("There is an error", error)
        res.status(500).json({message: 'Server Error'})
    }
}

const updatePg = async(req,res) => {
    try {
        const {pgName,pgOwnerName,pgType,pgAddress,pgFacilities} = req.body
        const updatedPg = await pgModel.findByIdAndUpdate(
            req.params.id,
            {pgName,pgOwnerName,pgType,pgAddress,pgFacilities},)
        if(!updatePg){
            return res.status(404).json({message:"Pg Not Found."})
        }
        res.status(201).json(updatedPg)

    } catch (error) {
        console.log("There is an error", error)
        res.status(500).json({message: 'Server Error'})
    }
}

module.exports = {createPg, fetchPg, updatePg}

