const express = require('express');
const router = express.Router();
const controller = require('../controllers/speakers.controller');

router.post('/add',controller.addSpeakers);
router.get('/delete',controller.deleteSpeakers);
router.get('/update',controller.updateSpeakers);
// router.get('/delete/:id',controller.deleteSpeakers);
// router.get('/update/:id',controller.deleteSpeakers);


module.exports=router;