const express = require('express');
const router =  express.Router();
const controller = require('../controllers/message.controller');

//Route for create new message
router.post('/', controller.createMessage);

//Route for retrieve all the messages
router.get('/', controller.viewAllMessages);

module.exports = router;