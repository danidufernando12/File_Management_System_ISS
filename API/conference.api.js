const express = require('express');
const router = express.Router();
const controller = require('../controllers/conference.controller');

router.post('/add',controller.addUpConference);
router.post('/delete/:id',controller.addUpConference);
router.get('/',controller.getAllUpConfernces)
router.get('/main',controller.getMainConfernces)
// router.get('/closed',controller.getClosedConfernces)
// router.get('/closed/:id',controller.getClosedConfernces)
// router.post('/activate/:id',controller.ActivateConference);
router.post('/maindelete/:id',controller.deleteConference);

module.exports=router;