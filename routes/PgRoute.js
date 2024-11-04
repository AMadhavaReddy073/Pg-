const express = require('express')
const router = express.Router()
const pgController = require('../controllers/PgController')
const pgModel = require('../models/pgModel')

router.post('/pg_details',pgController.createPg)
router.get('/getpg_details',pgController.fetchPg)
router.put('/updatePg/:id', pgController.updatePg)

module.exports = router