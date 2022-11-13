const express=require('express');
const router=express.Router();
const controllers=require('../controllers/file.controller')
const multer=require('multer');
const { route } = require('./message.route');

const FileStorage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./upload')
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname)
    }
})

//Rouete for upload single file into system storage
const upload=multer({storage:FileStorage})
router.post('/',upload.single('file'),controllers.uploadFiles);


//Route for retrieve al lthe files
router.get('/',controllers.viewAllFiles);

module.exports=router;