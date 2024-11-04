const tenantModel = require('../models/tenantModel');

const createTenant = async(req,res) => {
    try {
        const {tenantName, tenantPhone, tenantEmail, startDate, endDate} = req.body
        const tenant = new tenantModel({
            tenantName,
            tenantPhone,
            tenantEmail,
            startDate,
            endDate
        })
        await tenant.save()
        res.status(201).json(tenant)
    } catch (error) {
        console.log("there is an error",error)
        res.status(500).json({message:"server error"})
    }
    console.log(req.body)
}


const fetchTenant = async(req, res) => {
    try {
        const tenants = await tenantModel.find()
        if (tenants.length === 0){
            return res.status(404).json({message: "Tenants Not Found."})
        }
        res.status(200).json(tenants)
    }
    catch(error){
        console.log("There is an error", error)
        res.status(500).json({message: 'Server Error'})
    }
}

const updateTenant = async (req, res) => {
    try {
        const { tenantName, tenantPhone, tenantEmail, startDate, endDate } = req.body;

        const updatedTenant = await tenantModel.findByIdAndUpdate(
            req.params.id,
            { tenantName, tenantPhone, tenantEmail, startDate, endDate },
            { new: true } // Return the updated document
        );

        if (!updatedTenant) {
            return res.status(404).json({ message: "Tenant Not Found." });
        }

        res.status(200).json(updatedTenant);
    } catch (error) {
        console.log("There is an error", error);
        res.status(500).json({ message: 'Server Error' });
    }
};


module.exports = {createTenant, fetchTenant, updateTenant}