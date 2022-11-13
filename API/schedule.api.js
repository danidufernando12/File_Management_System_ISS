const express = require('express');
const router = express.Router();
const controller = require('../controllers/schedule.controller');

router.post('/add',controller.addSchedule);
router.get('/',controller.getSchedule)
router.get('/delete/:id',controller.deleteSchedule)

module.exports=router;