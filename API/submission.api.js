const express=require('express');
const router=express.Router();
const controllers=require('../controllers/submission.controller')
const multer=require('multer');



const FileStorage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./upload')
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname)
    }
})
const upload=multer({storage:FileStorage})
router.post('/create',upload.single('file'),controllers.createSubmission);
router.get('/',controllers.getSubmissions)
router.get('/:id',controllers.getSubmissionByID)
router.get('/download/:id',controllers.DowloadTheFile)
router.patch('/approve/:id',controllers.ApproveSubmission)
router.patch('/decline/:id',controllers.DeclineSubmission)
router.post('/test',controllers.Testing)

module.exports=router;