const express = require('express')
const router = express.Router()
const roomController = require('../controllers/roomController')
const roomModel = require('../models/roomModel')

router.post('/room_details',roomController.createRoom)
router.get('/getRoom_details',roomController.fetchRoom)
router.put('/updateRoom_details/:id', roomController.updateRoom)

module.exports = router