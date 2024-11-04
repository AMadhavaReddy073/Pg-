const express = require('express')
const router = express.Router()
const tenentController = require('../controllers/tenantController')
const tenentModel = require('../models/tenantModel')

router.post('/tenant_details',tenentController.createTenant)
router.get('/getTenant_details',tenentController.fetchTenant)
router.put('/updateTenant_details/:id', tenentController.updateTenant)

module.exports = router